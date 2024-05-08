function Node(data) {
    this.data = data;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.add = function (data) {
    const newNode = new Node(data);

    if (!this.head) {
        this.head = newNode;

    } else {
        let node = this.head;

        while (node.next) {
            node = node.next;

        }
        node.next = newNode;

    }
}

LinkedList.prototype.remove = function (data) {
    if (!this.head) {
        return;
    }
    if (this.head.data === data) {
        this.head = this.head.next
        return;
    }
    let node = this.head;

    while (node.next) {
        if (node.next.data === data) {
            node.next = node.next.next;
            return;
        }
        node = node.next;
    }
}

LinkedList.prototype.print = function () {
    let node = this.head;

    let result = '{';
    while (node) {
        result += node.data;
        if (node.next) {
            result += ',';
        }
        node = node.next;
    }
    result += '}';
    console.log(result);
}

let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};




function Person(firstName,lastName,grade){
    this.firstName=firstName;
    this.lastName=lastName;
    this.grade=grade;

    this.inputNewGrade =(newGrade)=>{this.grade.push(newGrade)}

    this.computeAverage =() =>{
        let total=0;
        console.log(this.grade);
        this.grade.forEach(element => {
            total+=element;
        });
        return total/this.grade.length;
    }
}

const p1=new Person('Aa', 'Bb', [50,90]);
console.log(p1.computeAverage());
p1.inputNewGrade(40);
console.log(p1.computeAverage());
