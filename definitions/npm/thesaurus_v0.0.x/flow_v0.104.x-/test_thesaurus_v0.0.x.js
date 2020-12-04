/* @flow */
import thesaurus from "thesaurus";

const tokyoSynms: Array<string> = thesaurus.find("tokyo");
// $FlowExpectedError
thesaurus.find(2);

thesaurus.load("dummyDatFilePath");
// $FlowExpectedError
thesaurus.load(2);

const thesaurusData: { [string]: Array<string>, ... } = thesaurus.get();
// $FlowExpectedError
thesaurus.get(2);

const thesaurusDataStr: string = thesaurus.toJson();
// $FlowExpectedError
thesaurus.toJson(2);
