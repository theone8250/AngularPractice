export class Message {

  /**
   * 留言者的名稱
   *
   * @type {string}
   * @memberof Message
   */
  name: string;

  /**
   * 留言的內容
   *
   * @type {string}
   * @memberof Message
   */
  content: string;

  /**
   * 留言的日期
   *
   * @type {Date}
   * @memberof Message
   */
  date: Date;
  /**
   * Creates an instance of Message.
   *
   * @param {string} name - 留言者的名稱
   * @param {string} content - 留言的內容
   * @memberof Message
   */
  constructor(name: string, content: string) {

    this.name = name;
    this.content = content;
    this.date = new Date();
  }
}
