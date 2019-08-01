// @flow
import * as React from "react";
import { describe, it } from "flow-typed-test";
import {
  Alert,
  AutoComplete,
  Avatar,
  Badge,
  Button,
  Card,
  Cascader,
  Checkbox,
  Col,
  Collapse,
  DatePicker,
  Dropdown,
  Form,
  Icon,
  Input,
  Layout,
  LocaleProvider,
  Menu,
  message,
  Modal,
  Pagination,
  Popconfirm,
  Popover,
  Radio,
  Row,
  Select,
  Slider,
  Spin,
  Steps,
  Table,
  Tabs,
  Tag,
  Tooltip,
  TreeSelect
} from "antd";

import type { WrappedFormUtils } from "antd";

describe("Alert", () => {
  it("is a react component", () => {
    const alert = <Alert />;
  });
});

describe("Avatar", () => {
  it("is a react component", () => {
    const avatar = <Avatar />;
  });
});

describe("AutoComplete", () => {
  it("is a react component", () => {
    const autocomplete = <AutoComplete />;
  });

  it("with prop allowClear", () => {
    const autocomplete1 = <AutoComplete allowClear={false} />;
    const autocomplete2 = <AutoComplete allowClear={true} />;
    const autocomplete3 = <AutoComplete allowClear />;
  });

  it("with prop autoFocus", () => {
    const autocomplete1 = <AutoComplete autoFocus={false} />;
    const autocomplete2 = <AutoComplete autoFocus={true} />;
    const autocomplete3 = <AutoComplete autoFocus />;
  });

  it("with prop backfill", () => {
    const autocomplete1 = <AutoComplete backfill={false} />;
    const autocomplete2 = <AutoComplete backfill={true} />;
    const autocomplete3 = <AutoComplete backfill />;
  });

  it("with prop defaultActiveFirstOption", () => {
    const autocomplete1 = <AutoComplete defaultActiveFirstOption={false} />;
    const autocomplete2 = <AutoComplete defaultActiveFirstOption={true} />;
    const autocomplete3 = <AutoComplete defaultActiveFirstOption />;
  });

  it("with prop defaultValue", () => {
    const autocomplete1 = <AutoComplete defaultValue="key-123" />;
    const autocomplete2 = <AutoComplete defaultValue={["key-123", "key-456"]} />;
    const autocomplete3 = <AutoComplete defaultValue={123} />;
    const autocomplete4 = <AutoComplete defaultValue={[123, 456]} />;
  });

  it("with prop disabled", () => {
    const autocomplete1 = <AutoComplete disabled={false} />;
    const autocomplete2 = <AutoComplete disabled={true} />;
    const autocomplete3 = <AutoComplete disabled />;
  });

  it("with prop filterOption", () => {
    const autocomplete1 = <AutoComplete filterOption={true} />;
    const autocomplete2 = <AutoComplete filterOption={(input: string, option: React$Node) => true} />;
  });

  it("with prop open", () => {
    const autocomplete1 = <AutoComplete open={false} />;
    const autocomplete2 = <AutoComplete open={true} />;
    const autocomplete3 = <AutoComplete open />;
  });

  it("with prop optionLabelProp", () => {
    const autocomplete = <AutoComplete optionLabelProp="name" />;
  });

  it("with prop placeholder", () => {
    const autocomplete = <AutoComplete placeholder="Please select..." />;
  });

  it("with prop value", () => {
    const autocomplete1 = <AutoComplete value="key-123" />;
    const autocomplete2 = <AutoComplete value={["key-123", "key-456"]} />;
    const autocomplete3 = <AutoComplete value={123} />;
    const autocomplete4 = <AutoComplete value={[123, 456]} />;
  });

  it("with prop onBlur", () => {
    const autocomplete = <AutoComplete onBlur={() => undefined} />;
  });

  it("with prop onChange", () => {
    const autocomplete1 = <AutoComplete onChange={() => undefined} />;
    const autocomplete2 = <AutoComplete value="key-123" onChange={(value: string) => undefined} />;
    const autocomplete3 = <AutoComplete value={["key-123", "key-456"]} onChange={(value: string[]) => undefined} />;
    const autocomplete4 = <AutoComplete value={123} onChange={(value: number) => undefined} />;
    const autocomplete5 = <AutoComplete value={[123, 456]} onChange={(value: number[]) => undefined} />;
  });

  it("with prop onDropdownVisibleChange", () => {
    const autocomplete = <AutoComplete onDropdownVisibleChange={(open: boolean) => undefined} />;
  });

  it("with prop onFocus", () => {
    const autocomplete = <AutoComplete onFocus={() => undefined} />;
  });

  it("with prop onSearch", () => {
    const autocomplete = <AutoComplete onSearch={(value: string) => undefined} />;
  });

  it("with prop onSelect", () => {
    const autocomplete1 = <AutoComplete onSelect={() => undefined} />;
    const autocomplete2 = <AutoComplete value="key-123" onSelect={(value: string) => undefined} />;
    const autocomplete3 = <AutoComplete value={["key-123", "key-456"]} onSelect={(value: string[]) => undefined} />;
    const autocomplete4 = <AutoComplete value={123} onSelect={(value: number) => undefined} />;
    const autocomplete5 = <AutoComplete value={[123, 456]} onSelect={(value: number[]) => undefined} />;
  });
});

describe("AutoComplete.Option", () => {
  it("is a react component", () => {
    const option = <AutoComplete.Option />;
  });
});

describe("AutoComplete.OptGroup", () => {
  it("is a react component", () => {
    const group = <AutoComplete.OptGroup />;
  });
});

describe("Badge", () => {
  it("is a react component", () => {
    const badge = <Badge />;
  });
});

describe("Button", () => {
  it("is a react component", () => {
    const button = <Button />;
  });
  it("should accept nullary or unary onClick handler", () => {
    const good0 = <Button onClick={() => undefined} />
    const good1 = <Button onClick={(event: SyntheticEvent<HTMLButtonElement>) => undefined} />
    // $ExpectError
    const bad = <Button onClick='bad' />
  });
});

describe("Button.Group", () => {
  it("is a react component", () => {
    const group = <Button.Group />;
  });
});

describe("Card", () => {
  it("is a react component", () => {
    const card = <Card />;
  });

  it("with content", () => {
    const card = (
      <Card
        title="Card title"
        bordered={false}
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    );
  });

  it("with Card.Grid", () => {
    const card = (
      <Card title="Card Title">
        <Card.Grid style={{ width: "25%", textAlign: "center" }}>
          Content
        </Card.Grid>
      </Card>
    );
  });

  it("with Card.Meta", () => {
    const card = (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Card.Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Europe Street beat"
          description="www.instagram.com"
        />
      </Card>
    );
  });
});

describe("Cascader", () => {
  it("is a react component", () => {
    const cascader = (
      <Cascader
        options={[
          {
            label: "l1",
            value: "v1",
            children: [
              {
                label: "l11",
                value: "v11"
              }
            ]
          }
        ]}
      />
    );
  });
});

describe("Checkbox", () => {
  it("is a react component", () => {
    const checkbox = <Checkbox />;
  });
});

describe("Checkbox.Group", () => {
  it("is a react component", () => {
    const group = <Checkbox.Group />;
  });
});

describe("Col", () => {
  it("is a react component", () => {
    const col = <Col />;
  });
});

describe("Collapse", () => {
  it("is a react component", () => {
    const collapse = <Collapse />;
  });
});

describe("Collapse.Panel", () => {
  it("is a react component", () => {
    const panel = <Collapse.Panel />;
  });
});

describe("DatePicker", () => {
  it("is a react component", () => {
    const datePicker = <DatePicker />;
  });
});

describe("Dropdown", () => {
  it("is a react component", () => {
    const dropdown = <Dropdown />;
  });
});

describe("Form", () => {
  it("is a react component", () => {
    const form = <Form />;
  });
  it("have create method that wrap a component with a form", () => {

    type PropsGoodTest = {
      a:string,
      form: WrappedFormUtils,
      ...
    };
    type PropsBadTest = { a:string, ... };
    class GoodTestComponent extends React.Component<PropsGoodTest> {}
    class BadTestComponent extends React.Component<PropsBadTest> {}

    // create is a function
    const GoodWrappedTestForm: React$ComponentType<$Diff<PropsGoodTest, { form: *, ... }>> =
      Form.create<PropsGoodTest>({name: 'good_test_form'})(GoodTestComponent);

    const BadWrappedTestForm: React$ComponentType<$Diff<PropsBadTest, { form: *, ... }>> =
      // $ExpectError PropsBadTest. it must contain form attribute
      Form.create<PropsBadTest>({name: 'bad_test_form'})(BadTestComponent);

  });
});

describe("Form.Item", () => {
  it("is a react component", () => {
    const formItem = <Form.Item />;
  });
});

describe("Icon", () => {
  it("is a react component", () => {
    const icon = <Icon />;
  });
});

describe("Input", () => {
  it("is a react component", () => {
    const input = <Input />;
  });
});

describe("Input.Search", () => {
  it("is a react component", () => {
    const inputSearch = <Input.Search />;
  });
});

describe("Input.TextArea", () => {
  it("is a react component", () => {
    const inputTextArea = <Input.TextArea />;
  });
});

describe("Input.Password", () => {
  it("is a react component", () => {
    const inputPassword = <Input.Password />;
  });
  it("should accept boolean visibilityToggle", () => {
    const good = <Input.Password visibilityToggle={false} />;
    // $ExpectError string. visibilityToggle must be of type boolean
    const bad = <Input.Password visibilityToggle={"false"} />
  });
});

describe("Layout", () => {
  it("is a react component", () => {
    const layout = <Layout />;
  });
});

describe("Layout.Content", () => {
  it("is a react component", () => {
    const layoutContent = <Layout.Content />;
  });
});

describe("Layout.Footer", () => {
  it("is a react component", () => {
    const layoutFooter = <Layout.Footer />;
  });
});

describe("Layout.Header", () => {
  it("is a react component", () => {
    const layoutHeader = <Layout.Header />;
  });
});

describe("LocaleProvider", () => {
  it("is a react component", () => {
    const localeProvider = <LocaleProvider />;
  });
});

describe("Menu", () => {
  it("is a react component", () => {
    const menu = <Menu />;
  });
});

describe("Menu.Item", () => {
  it("is a react component", () => {
    const menuItem = <Menu.Item />;
  });
});

describe("Menu.SubMenu", () => {
  it("is a react component", () => {
    const menuSubMenu = <Menu.SubMenu />;
  });
});

describe("message", () => {
  it("have a config function", () => {
    const element = document.createElement("div");
    message.config({
      duration: 1000,
      getContainer: () => element,
      top: 42
    });
  });
  it("have a success function", () => {
    message.success("hello", 2000, () => "closed");
  });
  it("have a error function", () => {
    message.error("hello", 2000, () => "closed");
  });
  it("have an info function", () => {
    message.info("hello", 2000, () => "closed");
  });
  it("have a warning function", () => {
    message.warning("hello", 2000, () => "closed");
  });
  it("have a warn function", () => {
    message.warn("hello", 2000, () => "closed");
  });
  it("have a loading function", () => {
    const stopLoading = message.loading("hello", 2000, () => "closed");
    stopLoading();
  });
});

describe("Modal", () => {
  it("is a react component", () => {
    const modal = <Modal />;
  });
  it("have an info method", () => {
    const ref = Modal.info({
      title: "hello",
      content: "world",
      onOk: () => 42
    });
    ref.destroy();
  });
  it("have a success method", () => {
    const ref = Modal.success({
      title: "hello",
      content: "world",
      onOk: () => 42
    });
    ref.destroy();
  });
  it("have an error method", () => {
    const ref = Modal.error({
      title: "hello",
      content: "world",
      onOk: () => 42
    });
    ref.destroy();
  });
  it("have a warning method", () => {
    const ref = Modal.warning({
      title: "hello",
      content: "world",
      onOk: () => 42
    });
    ref.destroy();
  });
  it("have a confirm method", () => {
    const ref = Modal.confirm({
      title: "hello",
      content: "world",
      onOk: () => 42
    });
    ref.destroy();
  });
});

describe("Pagination", () => {
  it("is a react component", () => {
    const pagination = <Pagination />;
  });
});

describe("Popconfirm", () => {
  it("is a react component", () => {
    const popconfirm = <Popconfirm />;
  });
  it("should accept only certain strings for placement prop", () => {
    // Testing placement prop in particular just to verify sharing between
    // Popconfirm, Popover, and Tooltip is working.
    const good = <Popconfirm placement='top' />;
    // $ExpectError
    const bad = <Popconfirm placement='topCenter' />;
  });
});

describe("Popover", () => {
  it("is a react component", () => {
    const popover = <Popover />;
  });

  it("should accept only certain strings for placement prop", () => {
    // Testing placement prop in particular just to verify sharing between
    // Popconfirm, Popover, and Tooltip is working.
    const good = <Popover placement='top' />;
    // $ExpectError
    const bad = <Popover placement='topCenter' />;
  });
});

describe("Radio", () => {
  it("is a react component", () => {
    const radio = <Radio />;
  });
});

describe("Radio.Group", () => {
  it("is a react component", () => {
    const radioGroup = <Radio.Group />;
  });
});

describe("Row", () => {
  it("is a react component", () => {
    const row = <Row />;
  });
});

describe("Select", () => {
  it("is a react component", () => {
    const select = <Select />;
  });

  it("with prop allowClear", () => {
    const select1 = <Select allowClear={false} />;
    const select2 = <Select allowClear={true} />;
    const select3 = <Select allowClear />;
  });

  it("with prop autoClearSearchValue", () => {
    const select1 = <Select autoClearSearchValue={false} />;
    const select2 = <Select autoClearSearchValue={true} />;
    const select3 = <Select autoClearSearchValue />;
  });

  it("with prop autoFocus", () => {
    const select1 = <Select autoFocus={false} />;
    const select2 = <Select autoFocus={true} />;
    const select3 = <Select autoFocus />;
  });

  it("with prop defaultActiveFirstOption", () => {
    const select1 = <Select defaultActiveFirstOption={false} />;
    const select2 = <Select defaultActiveFirstOption={true} />;
    const select3 = <Select defaultActiveFirstOption />;
  });

  it("with prop defaultOpen", () => {
    const select1 = <Select defaultOpen={false} />;
    const select2 = <Select defaultOpen={true} />;
    const select3 = <Select defaultOpen />;
  });

  it("with prop defaultValue", () => {
    const select1 = <Select defaultValue="key-123" />;
    const select2 = <Select defaultValue={["key-123", "key-456"]} />;
    const select3 = <Select defaultValue={123} />;
    const select4 = <Select defaultValue={[123, 456]} />;
  });

  it("with prop disabled", () => {
    const select1 = <Select disabled={false} />;
    const select2 = <Select disabled={true} />;
    const select3 = <Select disabled />;
  });

  it("with prop dropdownClassName", () => {
    const select = <Select dropdownClassName="dropdown-css-class" />;
  });

  it("with prop dropdownMatchSelectWidth", () => {
    const select1 = <Select dropdownMatchSelectWidth={false} />;
    const select2 = <Select dropdownMatchSelectWidth={true} />;
    const select3 = <Select dropdownMatchSelectWidth />;
  });

  it("with prop filterOption", () => {
    const select1 = <Select filterOption={true} />;
    const select2 = <Select filterOption={(input: string, option: React$Node) => true} />;
  });

  it("with prop firstActiveValue", () => {
    const select1 = <Select firstActiveValue="key-123" />;
    const select2 = <Select firstActiveValue={["key-123", "key-456", "key-789"]} />;
  });

  it("with prop labelInValue", () => {
    const select1 = <Select labelInValue={false} />;
    const select2 = <Select labelInValue={true} />;
    const select3 = <Select labelInValue />;
  });

  it("with prop loading", () => {
    const select1 = <Select loading={false} />;
    const select2 = <Select loading={true} />;
    const select3 = <Select loading />;
  });

  it("with prop maxTagCount", () => {
    const select = <Select maxTagCount={10} />;
  });

  it("with prop mode", () => {
    const select1 = <Select mode="default" />;
    const select2 = <Select mode="multiple" />;
    const select3 = <Select mode="tags" />;
    // $ExpectError
    const select4 = <Select mode="notARealOption" />;
  });

  it("with prop notFoundContent", () => {
    const select = <Select notFoundContent="No Items" />;
  });

  it("with prop open", () => {
    const select1 = <Select open={false} />;
    const select2 = <Select open={true} />;
    const select3 = <Select open />;
  });

  it("with prop optionFilterProp", () => {
    const select = <Select optionFilterProp="id" />;
  });

  it("with prop optionLabelProp", () => {
    const select = <Select optionLabelProp="name" />;
  });

  it("with prop placeholder", () => {
    const select1 = <Select placeholder="Please select..." />;
    const select2 = <Select placeholder={<span>Please select...</span>} />;
  });

  it("with prop showArrow", () => {
    const select1 = <Select showArrow={false} />;
    const select2 = <Select showArrow={true} />;
    const select3 = <Select showArrow />;
  });

  it("with prop showSearch", () => {
    const select1 = <Select showSearch={false} />;
    const select2 = <Select showSearch={true} />;
    const select3 = <Select showSearch />;
  });

  it("with prop size", () => {
    const select1 = <Select size="default" />;
    const select2 = <Select size="small" />;
    const select3 = <Select size="large" />;
    const select4 = <Select size="32px" />;
  });

  it("with prop suffixIcon", () => {
    const select = <Select suffixIcon={<Icon />} />;
  });

  it("with prop removeIcon", () => {
    const select = <Select removeIcon={<Icon />} />;
  });

  it("with prop clearIcon", () => {
    const select = <Select clearIcon={<Icon />} />;
  });

  it("with prop menuItemSelectedIcon", () => {
    const select = <Select menuItemSelectedIcon={<Icon />} />;
  });

  it("with prop tokenSeparators", () => {
    const select = <Select tokenSeparators={[",", "|"]} />;
  });

  it("with prop value", () => {
    const select1 = <Select value="key-123" />;
    const select2 = <Select value={["key-123", "key-456"]} />;
    const select3 = <Select value={123} />;
    const select4 = <Select value={[123, 456]} />;
  });

  it("with prop onBlur", () => {
    const select = <Select onBlur={() => undefined} />;
  });

  it("with prop onChange", () => {
    const select1 = <Select onChange={() => undefined} />;
    const select2 = <Select value="key-123" onChange={(value: string) => undefined} />;
    const select3 = <Select value={["key-123", "key-456"]} onChange={(value: string[]) => undefined} />;
    const select4 = <Select value={123} onChange={(value: number) => undefined} />;
    const select5 = <Select value={[123, 456]} onChange={(value: number[]) => undefined} />;
  });

  it("with prop onDeselect", () => {
    const select1 = <Select onDeselect={() => undefined} />;
    const select2 = <Select value="key-123" onDeselect={(value: string) => undefined} />;
    const select3 = <Select value={["key-123", "key-456"]} onDeselect={(value: string[]) => undefined} />;
    const select4 = <Select value={123} onDeselect={(value: number) => undefined} />;
    const select5 = <Select value={[123, 456]} onDeselect={(value: number[]) => undefined} />;
  });

  it("with prop onDropdownVisibleChange", () => {
    const select = <Select onDropdownVisibleChange={(open: boolean) => undefined} />;
  });

  it("with prop onFocus", () => {
    const select = <Select onFocus={() => undefined} />;
  });

  it("with prop onSearch", () => {
    const select = <Select onSearch={(value: string) => undefined} />;
  });

  it("with prop onSelect", () => {
    const select1 = <Select onSelect={() => undefined} />;
    const select2 = <Select value="key-123" onSelect={(value: string) => undefined} />;
    const select3 = <Select value={["key-123", "key-456"]} onSelect={(value: string[]) => undefined} />;
    const select4 = <Select value={123} onSelect={(value: number) => undefined} />;
    const select5 = <Select value={[123, 456]} onSelect={(value: number[]) => undefined} />;
  });
});

describe("Select.Option", () => {
  it("is a react component", () => {
    const selectOption = <Select.Option />;
  });

  it("with prop className", () => {
    const selectOption = <Select.Option className="my-option" />;
  })

  it("with prop disabled", () => {
    const selectOption1 = <Select.Option disabled={false} />;
    const selectOption2 = <Select.Option disabled={true} />;
    const selectOption3 = <Select.Option disabled />;
  })

  it("with prop key", () => {
    const selectOption = <Select.Option key="key-123" />;
  })

  it("with prop title", () => {
    const selectOption = <Select.Option title="This is a test title." />;
  })

  it("with prop value", () => {
    const selectOption1 = <Select.Option value="value-123" />;
    const selectOption2 = <Select.Option value={123} />;
  })
});

describe("Select.OptGroup", () => {
  it("is a react component", () => {
    const selectOptGroup = <Select.OptGroup />;
  })

  it("with prop key", () => {
    const selectOptGroup = <Select.OptGroup key="key-123" />;
  })

  it("with prop label", () => {
    const selectOptGroup = <Select.OptGroup label="This is a test label." />;
  })
})

describe("Slider", () => {
  it("is a react component", () => {
    const slider = <Slider />;
  });
});

describe("Spin", () => {
  it("is a react component", () => {
    const spin = <Spin />;
  });
});

describe("Steps", () => {
  it("is a react component", () => {
    const steps = <Steps />;
  });

  it("with Steps.Step", () => {
    const steps = (
      <Steps size="small" current={1}>
        <Steps.Step title="Finished" description="This is a description." />
        <Steps.Step
          stats="process"
          title="In Progress"
          description="This is a description."
        />
        <Steps.Step
          status="wait"
          title="Waiting"
          description="This is a description."
        />
      </Steps>
    );
  });
});

describe("Table", () => {
  it("is a react component", () => {
    const table = <Table />;
  });
});

describe("Tabs", () => {
  it("is a react component", () => {
    const tabs = <Tabs />;
  });
});

describe("Tabs.TabPane", () => {
  it("is a react component", () => {
    const tabPane = <Tabs.TabPane />;
  });
});

describe("Tag", () => {
  it("is a react component", () => {
    const tag = <Tag />;
  });
});

describe("Tooltip", () => {
  it("is a react component", () => {
    const tooltip = <Tooltip title="hello" />;
  });
  it("should accept only certain strings for placement prop", () => {
    // Testing placement prop in particular just to verify sharing between
    // Popconfirm, Popover, and Tooltip is working.
    const good = <Tooltip title='tooltip' placement='top' />;
    // $ExpectError
    const bad = <Tooltip title='tooltip' placement='topCenter' />;
  });
});

describe("TreeSelect", () => {
  it("is a react component", () => {
    const treeSelect = <TreeSelect />;
  });
});

describe("TreeSelect.TreeNode", () => {
  it("is a react component", () => {
    const treeNode = <TreeSelect.TreeNode />;
  });
});
