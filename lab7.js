// 1.1
let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((student) =>
            console.log(this.title + ": " + student)
        );
    }
};

// 1.2
let group2 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        const self = this;
        this.students.forEach(function (student) {
            console.log(self.title + ": " + student
            );
        });
    }
};

// 1.3
let group3 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(group3.title + ": " + student
            );
        });
    }
};

// 1.4
let group4 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student
            );
        }.bind(this));
    }
};

// 1.5
let group5 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student
            );
        }, this);
    }
};

group5.showList();



let i = 0;
setTimeout(() => console.log(i), 100); // Ans:100000000 because setTimeout process do after finish all of the stacks.

// assume that the time to execute this function is >100ms
for (let j = 0; j < 100000000; j++) {
    i++;
}
