export class Serie {
    num: number;
    name: string;
    channel: string;
    seasons: number;
  
    constructor(num:number, name: string, channel: string, seasons: number) {
      this.num = num;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
    }
  }
  