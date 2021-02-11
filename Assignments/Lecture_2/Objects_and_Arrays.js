class MessageBoard {
  constructor(name) {
    this.name = name;
    this.messages = [];
    this.callback = [];
  }

  set putMessage(msg) {this.messages.push(m);}
  get printMessages() {console.log(this.messages[this.messages.length - 1]);}
  set register(f) {this.callback.push(f);}
  set sendAndNotify(m) {
      this.messages.push(m);
      this.callback.forEach(e => e(this.name, m));
  }
}


let msgBoard = {
	messages: [],
	callBack: [],
	name: "chat",
	set putMessage(m) {this.messages.push(m);},
	get printMessages() {console.log(this.messages[this.messages.length - 1]);},
	set register(f) {this.callBack.push(f);},
	set sendAndNotify(m) {
		this.messages.push(m);
		this.callBack.forEach(e => e(this.name, m));
	}
};

function notifier(boardName, message){
	console.log("NAME, a message from " + boardName + ": " + message);
}

msgBoard.putMessage = "Hej, dette er en test";
msgBoard.printMessages;

msgBoard.register = notifier;
msgBoard.sendAndNotify = "Hey u Big fat fanny";



makeMessageBoards("Guess what!?!?!??")

function makeMessageBoards(name){
	let board2 = new MessageBoard(name);
	board2.register = notifier;
	board2.sendAndNotify = "It bloddy works";
}