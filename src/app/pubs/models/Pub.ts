export class Pub {
  id!: number;
  name!: string;
  location!: string;
  url!: string;
  icon!: string;

  constructor(id, name, location, url, icon){
    this.id = id;
    this.name = name;
    this.location = location;
    this.url = url;
    this.icon = icon;
  }

}
