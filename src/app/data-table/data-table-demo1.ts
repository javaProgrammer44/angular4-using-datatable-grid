import {Component, OnInit} from '@angular/core';
import {DataTableResource} from 'angular-4-data-table-bootstrap-4';
import {HttpClient, HttpParams} from "@angular/common/http";


@Component({
  selector: 'data-table-demo-1',
  templateUrl: './data-table-demo1.html',
  styleUrls: ['./data-table-demo1.css']
})
export class DataTableDemo1 implements OnInit {


  ngOnInit(): void {
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });

  }

  itemResource;
  items = [];
  itemCount = 0;

  readonly ROOT_URL = "http://localhost:8080/facebookData";
  readonly NAME_SEARCH_URL = "http://localhost:8080/searchByName";

  SEARCH_NAME_URL: String = "http://localhost:8080/searchByName";
  SEARCH_COUNTRY_URL: String = "http://localhost:8080/searchByCountry";
  SEARCH_CITY_URL: String = "http://localhost:8080/searchByCity";


  constructor(private  http: HttpClient) {
    //  this.itemResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
    this.itemResource.query(params).then(items => this.items = items);
  }

  getData() {
    this.extractFacebookResult();
  }


  onNameSearch(event: any) {

    let params = new HttpParams().set("name", event.target.value);
    this.onStringSearch(params, this.SEARCH_NAME_URL)
  }


  onCountrySearch(event: any) {

    let params = new HttpParams().set("countryName", event.target.value);
    this.onStringSearch(params, this.SEARCH_COUNTRY_URL)
  }


  onCitySearch(event: any) {

    let params = new HttpParams().set("cityName", event.target.value);
    this.onStringSearch(params, this.SEARCH_CITY_URL)
  }


  onStringSearch(params: any, url) {
    this.http.get(url, {params: params})
      .subscribe(
        (data) => {
          const helperArray = [];

          for (let key in data) {
            helperArray.push(data[key]);
          }

          this.items = helperArray;

          this.itemResource = new DataTableResource(helperArray);
          this.itemResource.count().then(count => this.itemCount = count);

          console.log(helperArray)
          console.log(JSON.stringify(data))
        });
  }

  // special properties:
  rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.item.name);
  }

  rowDoubleClick(rowEvent) {
    alert('Double clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item) {
    return item.jobTitle;
  }

  private extractFacebookResult() {
    this.http.get(this.ROOT_URL)
      .subscribe(
        (data) => {
          const helperArray = [];
          for (let key in data) {
            helperArray.push(data[key]);
          }


          this.items = helperArray;
          this.itemResource = new DataTableResource(helperArray);
          this.itemResource.count().then(count => this.itemCount = count);

          console.log(helperArray)
          console.log(JSON.stringify(data))
        });
  }
}
