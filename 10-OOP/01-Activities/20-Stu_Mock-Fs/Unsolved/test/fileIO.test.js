const FileIO = require('../fileIO');
const fs = require("fs")

jest.mock("fs");

describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      // TODO: Your code here
    const fileIO = new FileIO()
    const file = 'message.txt'
    let data;
    fs.readFileSync.mockReturnValue("hello world")

    data = fileIO.read(file);
    expect(data).toEqual("hello world")
    expect(fs.readFileSync).lastCalledWith(file, "utf8")
    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
  
      const fileIO = new FileIO()
      const path = 'message.txt'
      const data = "hello world"
      fileIO.write(path,data)
    });
  });
});
