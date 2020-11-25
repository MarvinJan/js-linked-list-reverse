// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = ``;

class LinkedList {
  head: Node;
  constructor(nodes: Node[]) {
    this.head = nodes[0];
    nodes.reduce((prev, next) => (prev.next = next));
  }

  outputList() {
    let curr = this.head;
    let output: string = "";

    while (curr) {
      const str = `{ ${curr.value} } ${curr.next ? " => " : ""}`;
      output += str;
      curr = curr.next;
    }

    console.log(output);
    const p = document.createElement("p");
    p.append(output);
    appDiv.append(p);
  }

  reverseList() {
    let prev = this.head;
    let curr = this.head.next;
    prev.next = null;

    while (true) {
      let currCopy = curr;
      curr = curr.next;
      currCopy.next = prev;
      prev = currCopy;

      if (!curr) {
        this.head = currCopy;
        break;
      }
    }

    this.outputList();
  }
}
class Node {
  next: Node;
  value: number;

  constructor(value) {
    this.value = value;
  }
}

const list = new LinkedList([0, 1, 2, 3, 4].map(val => new Node(val)));

const button = document.createElement("button");
button.append("REVERSE LIST");

button.addEventListener("click", () => list.reverseList());
appDiv.append(button);

list.outputList();
