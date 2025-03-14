class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length; 
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length; 

    this.items.sort((a, b) => 
      a - b
    )
  }
  get(pos) {
    return this.items[pos-1];
    
  }
  max() {
    if(this.length == 0){
      throw new Error("EmptySortedList")
    } else {
      return Math.max(...this.items)
    }
  }
  min() {
    if(this.length == 0){
      throw new Error("EmptySortedList")
    } else {
      return Math.min(...this.items)
    }

  }
  average() {
    if(this.length == 0){
      throw new Error("EmptySortedList")
    } else {
      return this.sum()/this.length
    }

  }
  sum() {
    return this.items.reduce((acum, current)=>acum + current, 0)

  }
};

module.exports = SortedList;
