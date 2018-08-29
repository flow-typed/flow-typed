import * as React from 'react'
import { it, describe } from 'flow-typed-test'
import {
  Alert,
  Avatar,
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
  Popconfirm,
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
  TreeSelect,
} from 'antd'

describe('Alert', () => {
  it('is a react component', () => {
    const alert = <Alert />
  })
})

describe('Avatar', () => {
  it('is a react component', () => {
    const avatar = <Avatar />
  })
})

describe('Button', () => {
  it('is a react component', () => {
    const button = <Button />
  })
})

describe('Card', () => {
  it('is a react component', () => {
    const card = <Card />
  })

  it('with content', () => {
    const card =  (
      <Card title="Card title" bordered={false} extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    )
  })
  
  it('with Card.Grid', () => {
    const card = (
      <Card title="Card Title">
        <Card.Grid style={{ width: '25%', textAlign: 'center' }}>
          Content
        </Card.Grid>
      </Card>
    )
  })

  it('with Card.Meta', () => {
    const card =  (
      <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Card.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Europe Street beat"
            description="www.instagram.com"
          />
        </Card>
    )
  })
})

describe('Cascader', () => {
  it('is a react component', () => {
    const cascader = (
      <Cascader
        options={[{
          label: 'l1',
          value: 'v1',
          children: [{
            label: 'l11',
            value: 'v11'
          }]
        }]}
      />
    )
  })
})

describe('Checkbox', () => {
  it('is a react component', () => {
    const checkbox = <Checkbox />
  })
})

describe('Col', () => {
  it('is a react component', () => {
    const col = <Col />
  })
})

describe('Collapse', () => {
  it('is a react component', () => {
    const collapse = <Collapse />
  })
})

describe('Collapse.Panel', () => {
  it('is a react component', () => {
    const panel = <Collapse.Panel />
  })
})

describe('DatePicker', () => {
  it('is a react component', () => {
    const datePicker = <DatePicker />
  })
})

describe('Dropdown', () => {
  it('is a react component', () => {
    const dropdown = <Dropdown />
  })
})

describe('Form', () => {
  it('is a react component', () => {
    const form = <Form />
  })
})

describe('Form.Item', () => {
  it('is a react component', () => {
    const formItem = <Form.Item />
  })
})

describe('Icon', () => {
  it('is a react component', () => {
    const icon = <Icon />
  })
})

describe('Input', () => {
  it('is a react component', () => {
    const input = <Input />
  })
})

describe('Input.Search', () => {
  it('is a react component', () => {
    const inputSearch = <Input.Search />
  })
})

describe('Input.TextArea', () => {
  it('is a react component', () => {
    const inputTextArea = <Input.TextArea />
  })
})

describe('Layout', () => {
  it('is a react component', () => {
    const layout = <Layout />
  })
})

describe('Layout.Content', () => {
  it('is a react component', () => {
    const layoutContent = <Layout.Content />
  })
})

describe('Layout.Header', () => {
  it('is a react component', () => {
    const layoutHeader = <Layout.Header />
  })
})

describe('LocaleProvider', () => {
  it('is a react component', () => {
    const localeProvider = <LocaleProvider />
  })
})

describe('Menu', () => {
  it('is a react component', () => {
    const menu = <Menu />
  })
})

describe('Menu.Item', () => {
  it('is a react component', () => {
    const menuItem = <Menu.Item />
  })
})

describe('Menu.SubMenu', () => {
  it('is a react component', () => {
    const menuSubMenu = <Menu.SubMenu />
  })
})

describe('message', () => {
  it('have a config function', () => {
    const element = document.createElement('div')
    message.config({
      duration: 1000,
      getContainer: () => element,
      top: 42
    })
  })
  it('have a success function', () => {
    message.success('hello', 2000, () => 'closed')
  })
  it('have a error function', () => {
    message.error('hello', 2000, () => 'closed')
  })
  it('have an info function', () => {
    message.info('hello', 2000, () => 'closed')
  })
  it('have a warning function', () => {
    message.warning('hello', 2000, () => 'closed')
  })
  it('have a warn function', () => {
    message.warn('hello', 2000, () => 'closed')
  })
  it('have a loading function', () => {
    const stopLoading = message.loading('hello', 2000, () => 'closed')
    stopLoading()
  })
})

describe('Modal', () => {
  it('is a react component', () => {
    const modal = <Modal />
  })
  it('have an info method', () => {
    const ref = Modal.info({
      title: 'hello',
      content: 'world',
      onOk: () => 42
    })
    ref.destroy()
  })
  it('have a success method', () => {
    const ref = Modal.success({
      title: 'hello',
      content: 'world',
      onOk: () => 42
    })
    ref.destroy()
  })
  it('have an error method', () => {
    const ref = Modal.error({
      title: 'hello',
      content: 'world',
      onOk: () => 42
    })
    ref.destroy()
  })
  it('have a warning method', () => {
    const ref = Modal.warning({
      title: 'hello',
      content: 'world',
      onOk: () => 42
    })
    ref.destroy()
  })
  it('have a confirm method', () => {
    const ref = Modal.confirm({
      title: 'hello',
      content: 'world',
      onOk: () => 42
    })
    ref.destroy()
  })
})

describe('Popconfirm', () => {
  it('is a react component', () => {
    const popconfirm = <Popconfirm />
  })
})

describe('Radio', () => {
  it('is a react component', () => {
    const radio = <Radio />
  })
})

describe('Radio.Group', () => {
  it('is a react component', () => {
    const radioGroup = <Radio.Group />
  })
})

describe('Row', () => {
  it('is a react component', () => {
    const row = <Row />
  })
})

describe('Select', () => {
  it('is a react component', () => {
    const select = <Select />
  })
})

describe('Select.Option', () => {
  it('is a react component', () => {
    const selectOption = <Select.Option />
  })
})

describe('Slider', () => {
  it('is a react component', () => {
    const slider = <Slider />
  })
})

describe('Spin', () => {
  it('is a react component', () => {
    const spin = <Spin />
  })
})

describe('Steps', () => {
  it('is a react component', () => {
    const steps = <Steps />
  })

  it('with Steps.Step', () => {
    const steps = (
      <Steps size="small" current={1}>
        <Steps.Step title="Finished" description="This is a description." />
        <Steps.Step stats="process" title="In Progress" description="This is a description." />
        <Steps.Step status="wait" title="Waiting" description="This is a description." />
      </Steps>
    )
  })
})

describe('Table', () => {
  it('is a react component', () => {
    const table = <Table />
  })
})

describe('Tabs', () => {
  it('is a react component', () => {
    const tabs = <Tabs />
  })
})

describe('Tabs.TabPane', () => {
  it('is a react component', () => {
    const tabPane = <Tabs.TabPane />
  })
})

describe('Tag', () => {
  it('is a react component', () => {
    const tag = <Tag />
  })
})

describe('Tooltip', () => {
  it('is a react component', () => {
    const tooltip = <Tooltip title="hello" />
  })
})

describe('TreeSelect', () => {
  it('is a react component', () => {
    const treeSelect = <TreeSelect />
  })
})

describe('TreeSelect.TreeNode', () => {
  it('is a react component', () => {
    const treeNode = <TreeSelect.TreeNode />
  })
})
