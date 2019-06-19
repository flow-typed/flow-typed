/* @flow */
import thesaurus from "thesaurus";

const tokyoSynms: Array<string> = thesaurus.find("tokyo");
// $ExpectError
thesaurus.find(2);

thesaurus.load("dummyDatFilePath");
// $ExpectError
thesaurus.load(2);

const thesaurusData: { [string]: Array<string> } = thesaurus.get();
// $ExpectError
thesaurus.get(2);

const thesaurusDataStr: string = thesaurus.toJson();
// $ExpectError
thesaurus.toJson(2);
