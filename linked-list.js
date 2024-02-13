/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)
    if(this.length ==0){
      this.head = newNode
      this.tail = newNode
      this.length+=1
    } else{
      this.tail.next = newNode
      this.tail = newNode
      this.length+=1
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    if(this.length ==0){
      this.head = newNode
      this.tail = newNode
      this.length+=1
    } else{
      newNode.next = this.head
      this.head = newNode 
      this.length+=1
    }
  }

  // Helper method
  getSecondToLast(){
    if(this.length == 0) return undefined
    else{
      let pointer = this.head
      while(pointer.next.next){
        pointer = pointer.next
    }
      return pointer
    }
    
  }

  /** pop(): return & remove last item. */

  pop() {
    if(this.length == 0) throw Exception('List is empty') 
    else if(this.length == 1){
      let output = this.tail
      this.head = null;
      this.tail = null;
      this.length = 0
      return output.val
    } else{
      let secondToLast = this.getSecondToLast()
      let output = this.tail
      delete this.tail
      this.tail = secondToLast
      this.length -=1
      return output.val
    }
    
  }

  /** shift(): return & remove first item. */

  shift() {
    if(this.length == 0) throw Exception('List is empty') 
    else if(this.length == 1){
      let output = this.tail
      this.head = null;
      this.tail = null;
      this.length = 0
      return output.val
    } 
    else{
      let output = this.head
      let newHead = this.head.next
      this.head = newHead
      this.length -=1
      return output.val
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(this.length < idx) throw Exception('Invalid index')
    let currentNode = this.head
    for(let i = 0; i<= idx; i++){
      if(i==idx) return currentNode.val
      currentNode = currentNode.next
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(this.length < idx) throw Exception('Invalid index')
    let currentNode = this.head
    for(let i = 0; i<= idx; i++){
      if(i==idx){
        currentNode.val = val
        return val
      }
      currentNode = currentNode.next
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // If empty
    if (this.length == 0 ){
      let newNode = new Node(val)
      this.head = newNode 
      this.tail = newNode 
      this.length +=1
    }
    // If not empty list, but idx is greater than length
    // Make a new tail
    else if(this.length < idx){
      pointer = this.getSecondToLast()
      newNode = new Node(val)
      pointer.next = newNode
      this.tail = newNode
    } else{
      let currentNode = this.head
      // Traverse
      for(let i = 0; i<= idx; i++){
        // Find node right before the index
        if(i==idx-1){
          let newNode = new Node(val)
          newNode.next = currentNode.next
          currentNode.next = newNode
          if(idx == this.length){
            this.tail = newNode
          }
          this.length +=1 
        }
        currentNode = currentNode.next
      }
    }
    
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (this.length == 0 ) throw Exception('List is empty')
    else if (this.length < idx) throw Exception('Invalid index')
    else{
      let currentNode = this.head
      // Traverse
      for(let i = 0; i<= idx; i++){

        // Found node
        if(i == idx){

          // If node is head
          if(currentNode == this.head){
            this.length = 0
            this.head = null 
            this.tail = null
            // If node is tail
          } else if(currentNode == this.tail){
            // Set tail to second to last
            this.tail = this.getSecondToLast()
            this.length--
          }
          else{
            currentNode.next = currentNode.next.next
            this.length--
          }
        }
        currentNode = currentNode.next
      }
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length == 0) return 0
    else{
      let ct = 0
      let values =0 
      let currentNode = this.head
      for(let i = 0; i< this.length; i++){
        ct+= 1
        values += currentNode.val
        currentNode = currentNode.next
      }
      return values/ct
    }
  }
}

module.exports = LinkedList;
