import { describe, it } from "flow-typed-test";
import * as React from "react";
import {
  Button,
  IconButton,
  ButtonToolbar,
  ButtonGroup,
  Whisper,
  Tooltip,
  Popover,
  Modal,
  Alert,
  Notification,
  Message,
  Drawer,
  Loader,
  Icon,
  SafeAnchor,
  Divider,
  Dropdown,
  Nav,
  Navbar,
  Sidenav,
  Breadcrumb,
  Pagination,
  Steps,
  Toggle,
  Form,
  FormGroup,
  ErrorMessage,
  ControlLabel,
  HelpBlock,
  FormControl,
  Input,
  InputNumber,
  InputGroup,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  SelectPicker,
  CheckPicker,
  InputPicker,
  TagPicker,
  TreePicker,
  CheckTreePicker,
  Cascader,
  DatePicker,
  DateRangePicker,
  AutoComplete,
  Uploader,
  Slider,
  Tree,
  CheckTree,
  Panel,
  PanelGroup,
  Table,
  TablePagination,
  Progress,
  Timeline,
  Tag,
  Grid,
  Row,
  Col,
  FlexboxGrid,
  Container,
  Content,
  Header,
  Sidebar,
  Footer,
  Schema,
  Animation,
  Portal,
  DOMHelper,
  IntlProvider
} from "rsuite";

const {
  addClass,
  hasClass,
  removeClass,
  toggleClass,
  addStyle,
  removeStyle,
  getStyle,
  translateDOMPositionXY,
  on,
  off,
  scrollLeft,
  scrollTop,
  getHeight,
  getWidth,
  getOffset,
  getOffsetParent,
  getPosition,
  contains,
  DOMMouseMoveTracker
} = DOMHelper;

<Button appearance="default">test</Button>;
//$FlowExpectedError
<Button appearance="test">test</Button>;

<Cascader data={[]} />;
//$FlowExpectedError
<Cascader />;

<CheckTreePicker data={[]} />;
//$FlowExpectedError
<CheckTreePicker />;

<TreePicker data={[]} />;
//$FlowExpectedError
<TreePicker />;

<Tree data={[]} />;
//$FlowExpectedError
<Tree />;

<CheckTree data={[]} />;
//$FlowExpectedError
<CheckTree />;

<DatePicker />;

//$FlowExpectedError
<DatePicker value={"10/10/2018"} />;

<DateRangePicker />;

//$FlowExpectedError
<DateRangePicker value={["10/10/2018", "10/10/2018"]} />;

<InputPicker data={[]} />;
//$FlowExpectedError
<InputPicker />;

<TagPicker data={[]} />;
//$FlowExpectedError
<TagPicker />;

<SelectPicker data={[]} />;
//$FlowExpectedError
<SelectPicker />;

<AutoComplete data={[]} />;
//$FlowExpectedError
<AutoComplete />;

<Breadcrumb.Item />;
//$FlowExpectedError
<Breadcrumb.Item active="a" />;

<Breadcrumb>
  <Breadcrumb.Item>test</Breadcrumb.Item>
</Breadcrumb>;

<Breadcrumb>
  <Breadcrumb.Item>item1</Breadcrumb.Item>
  <Breadcrumb.Item>item2</Breadcrumb.Item>
</Breadcrumb>;


<Button />;
//$FlowExpectedError
<Button active="a" />;

<ButtonGroup />;
<ButtonToolbar />;

<Checkbox
  inputRef={ref => {
    (ref: ?HTMLInputElement);
  }}
/>;

<CheckboxGroup
  value={["a"]}
  onChange={value => {
    (value: Array<any>);
  }}
>
  <Checkbox value="a">A</Checkbox>
  <Checkbox value="b">B</Checkbox>
</CheckboxGroup>;

<Col />;

//$FlowExpectedError
<Col xs="1" />;

<Container />;
<Content />;
<ControlLabel />;
<Divider />;
<Drawer />;

<Drawer>
  <Drawer.Header>1</Drawer.Header>
  <Drawer.Body>2</Drawer.Body>
  <Drawer.Title>3</Drawer.Title>
  <Drawer.Footer>4</Drawer.Footer>
  <Drawer.Dialog>5</Drawer.Dialog>
</Drawer>;

<Dropdown>
  <Dropdown.Item>1</Dropdown.Item>
  <Dropdown.Item>2</Dropdown.Item>
  <Dropdown.Menu>
    <Dropdown.Item>3</Dropdown.Item>
    <Dropdown.Item>4</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>;

<ErrorMessage>error</ErrorMessage>;

<FlexboxGrid />;
//$FlowExpectedError
<FlexboxGrid align="abc" />;

<FlexboxGrid>
  <FlexboxGrid.Item>a</FlexboxGrid.Item>
</FlexboxGrid>;

<Footer />;

<Form />;
//$FlowExpectedError
<Form layout="abc" />;

<Form>
  <FormControl name="username" />
</Form>;

<Icon icon="user" />;

//$FlowExpectedError
<Icon />;

//$FlowExpectedError
<Icon icon="user" size="100" />;

<IntlProvider />;

<FormControl name="username" />;

//$FlowExpectedError
<FormControl />;

<FormGroup />;
<Grid />;
<Header />;
<HelpBlock />;
<IconButton />;
<Input
  onChange={(value: string) => {
    (value: string);
  }}
/>;
<InputGroup />;
<InputGroup>
  <InputGroup.Addon />
  <Input />
  <InputGroup.Button />
</InputGroup>;

<InputNumber />;

//$FlowExpectedError
<InputNumber value={[]} />;

<Loader />;

//$FlowExpectedError
<Loader speed="default" />;

<Message>error</Message>;

<Modal>
  <Modal.Header>1</Modal.Header>
  <Modal.Body>2</Modal.Body>
  <Modal.Title>3</Modal.Title>
  <Modal.Footer>4</Modal.Footer>
  <Modal.Dialog>5</Modal.Dialog>
</Modal>;

<Nav />;

<Nav>
  <Nav.Item>a</Nav.Item>
</Nav>;

<Navbar />;

<Navbar>
  <Navbar.Header>1</Navbar.Header>
  <Navbar.Body>2</Navbar.Body>
</Navbar>;

<Pagination />;
<Panel />;
<PanelGroup />;

<PanelGroup>
  <Panel>a</Panel>
</PanelGroup>;

<Popover />;

<Progress.Circle />;

//$FlowExpectedError
<Progress.Circle status />;

<Progress.Line />;

//$FlowExpectedError
<Progress.Line status />;

<Radio />;
<RadioGroup>
  <Radio />
</RadioGroup>;

<Row />;

<Row>
  <Col>1</Col>
</Row>;

<Row>
  <Col>2</Col>
  <Col>3</Col>
</Row>;

<SafeAnchor href="http://" />;
<Sidebar />;
<Sidenav />;

<Sidenav>
  <Sidenav.Header />
  <Sidenav.Body />
  <Sidenav.Toggle />
</Sidenav>;

<Slider value={100} />;
<Steps.Item />;
<Steps>
  <Steps.Item>1</Steps.Item>
</Steps>;

<Table data={[]}>
  <Table.Column>
    <Table.HeaderCell />
    <Table.Cell />
  </Table.Column>
</Table>;

<Table.Pagination total={100} activePage={1} />;

//$FlowExpectedError
<Table />;

//$FlowExpectedError
<Table.Pagination />;

<Tag />;

<Timeline />;

<Timeline>
  <Timeline.Item />
</Timeline>;

<Toggle
  onChange={(checked: boolean) => {
    (checked: boolean);
  }}
/>;

<Tooltip />;

<Uploader action="http://" />;

//$FlowExpectedError
<Uploader />;

//$FlowExpectedError
<Whisper />;

//$FlowExpectedError
<Whisper>
  <a>a</a>
</Whisper>;

<Whisper speaker={<div>a</div>}>
  <a>a</a>
</Whisper>;

//$FlowExpectedError
Alert.info();

Alert.info("message");
Alert.success("message");
Alert.warning("message");
Alert.error("message");
Alert.config({
  top: 10,
  duration: 100,
  getContainer: () => {
    return document.createElement("div");
  }
});

//$FlowExpectedError
Notification.info();

Notification.open({ title: "title", description: "desc" });
Notification.info({ title: "title", description: "desc" });
Notification.success({ title: "title", description: "desc" });
Notification.warning({ title: "title", description: "desc" });
Notification.error({ title: "title", description: "desc" });
Notification.remove("key");

<Animation.Transition />;
<Animation.Fade />;
<Animation.Collapse />;

<Portal />;

const { Model, Types } = Schema;
const {
  StringType,
  NumberType,
  ArrayType,
  DateType,
  ObjectType,
  BooleanType
} = Types;

StringType("error")
  .isRequired("isRequired")
  .containsLetter("")
  .containsUppercaseLetter("")
  .containsLowercaseLetter("")
  .containsLetterOnly("")
  .containsNumber("")
  .isOneOf(["dd", "aa"], "")
  .isEmail("")
  .isURL("")
  .isHex("")
  .pattern(/\s/, "")
  .rangeLength(1, 4, "")
  .minLength(1, "")
  .maxLength(4, "")
  .addRule(() => true, "");

//$FlowExpectedError
StringType("error").maxLength();

NumberType("error")
  .isRequired("isRequired")
  .isInteger("");

ArrayType("error")
  .isRequired("isRequired")
  .rangeLength(1, 100, "");

DateType("error")
  .isRequired("isRequired")
  .range(new Date(), new Date(), "");

ObjectType("error")
  .isRequired("isRequired")
  .shape({}, "");

BooleanType("error").isRequired("isRequired");
