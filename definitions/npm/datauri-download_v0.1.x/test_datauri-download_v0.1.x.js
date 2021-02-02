import download from "datauri-download";

download("filename.txt", "text/plain", "Hello world!");

// $FlowExpectedError
download(5, 3, 5);
