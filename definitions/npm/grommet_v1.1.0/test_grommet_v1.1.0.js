// @flow
import React, { Component } from 'react';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Anchor from 'grommet/components/Anchor';
import Animate from 'grommet/components/Animate';
import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Card from 'grommet/components/Card';
import Carousel from 'grommet/components/Carousel';
import CheckBox from 'grommet/components/CheckBox';
import Columns from 'grommet/components/Columns';
import DateTime from 'grommet/components/DateTime';
import Distribution from 'grommet/components/Distribution';
import Footer from 'grommet/components/Footer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Label from 'grommet/components/Label';
import Layer from 'grommet/components/Layer';
import Legend from 'grommet/components/Legend';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import LoginForm from 'grommet/components/LoginForm';
import Map from 'grommet/components/Map';
import Markdown from 'grommet/components/Markdown';
import Menu from 'grommet/components/Menu';
import Meter from 'grommet/components/Meter';
import Notification from 'grommet/components/Notification';
import NumberInput from 'grommet/components/NumberInput';
import Paragraph from 'grommet/components/Paragraph';
import Quote from 'grommet/components/Quote';
import RadioButton from 'grommet/components/RadioButton';
import Search from 'grommet/components/Search';
import SearchInput from 'grommet/components/SearchInput';
import Section from 'grommet/components/Section';
import Select from 'grommet/components/Select';
import Sidebar from 'grommet/components/Sidebar';
import Split from 'grommet/components/Split';
import SunBurst from 'grommet/components/SunBurst';
import Tab from 'grommet/components/Tab';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';
import Tabs from 'grommet/components/Tabs';
import TextInput from 'grommet/components/TextInput';
import Tile from 'grommet/components/Tile';
import Tiles from 'grommet/components/Tiles';
import Timestamp from 'grommet/components/Timestamp';
import Tip from 'grommet/components/Tip';
import Title from 'grommet/components/Title';
import Toast from 'grommet/components/Toast';
import Topology from 'grommet/components/Topology';
import Value from 'grommet/components/Value';
import Video from 'grommet/components/Video';
import WorldMap from 'grommet/components/WorldMap';

class FailingApp extends Component {
  render() {
    return (
      // $ExpectError This type is incompatible with boolean
      <App centered="false">
        {/* $ExpectError This type is incompatible with string enum */}
        <Headline align="asdf">
          Grommet + Flow
        </Headline>
      </App>
    );
  }
}

class ExampleApp extends Component {
  handleClick() {
    return "foo";
  }
  render() {
    return (
      <App centered={true} inline={true}>
        <Headline align="center" justify="left">
          Grommet + TypeScript
        </Headline>
        <Video full={true}
          autoPlay={true}
          loop={true}
          muted={true}
          poster='/img/mobile_first.jpg'
          shareLink='http://grommet.io'
          shareText='Sample share text'>
          <source src='/video/test.mp4'
            type='video/mp4' />
        </Video>
        <Box pad={{between: "medium"}}
          align='center'>
          <Button label='Leave'
            primary={true}
            onClick={this.handleClick} />
          <Animate enter={{ animation: "fade", duration: 1000, delay: 0}} keep={true}>
            <Box direction='row'>
              <Box
                colorIndex='light-2'
                margin='medium'
                pad='large'
              >
                <Value value={1} />
              </Box>
            </Box>
          </Animate>
        </Box>
        <Carousel>
          <Image src='/img/carousel-1.png' />
          <Image src='/img/carousel-2.png' />
          <Box pad='large'
            colorIndex='neutral-3'>
            <Box pad='medium'
              colorIndex='neutral-2'>
              Content inside of a Box element.
            </Box>
          </Box>
        </Carousel>
        <WorldMap
          series={[{
            continent: "NorthAmerica",
            colorIndex: "graph-1",
            onClick: this.handleClick
          }, {
            continent: "SouthAmerica",
            colorIndex: "accent-2",
            onClick: this.handleClick
          }]}
        />
        <Topology
          a11yTitle='Server Topology'
          links={[{colorIndex: "graph-1", ids: ["s1p1", "s2p1"]}, {colorIndex: "graph-1", ids: ["s1p1", "s2p1"]}]}
        />
        <Box>
          <Value value={40}
            units='GB'
            align='start' />
          <Meter value={40}
            onActive={this.handleClick} />
        </Box>
        <Box direction='row'
          align='center'
          pad={{between: "medium"}}>
          <SunBurst
            data={[{
              value: 50,
              colorIndex: "neutral-1",
              children: [
                {
                  label: "sub-1",
                  value: 20,
                  colorIndex: "neutral-1",
                  total: 10,
                  children: [
                {label: "leaf-1", value: 5, colorIndex: "neutral-1"},
                {label: "leaf-1", value: 5, colorIndex: "neutral-1"}
                  ]
                }
              ]
            }, {
              value: 30,
              colorIndex: "neutral-2",
              children: [
              {label: "leaf-1", value: 5, colorIndex: "neutral-1"},
              {label: "leaf-1", value: 5, colorIndex: "neutral-1"}
              ]
            }, {
              value: 20,
              colorIndex: "neutral-3",
              children: [
              {label: "leaf-1", value: 5, colorIndex: "neutral-1"},
              {label: "leaf-1", value: 5, colorIndex: "neutral-1"}
              ]
            }]}
            onActive={this.handleClick}
            onClick={this.handleClick}
          />
          <Legend series={[{label: "on target", colorIndex: "neutral-1"}, {label: "over", colorIndex: "neutral-2"}]} />
        </Box>
        <Legend series={[{label: "Americas", value: 40, colorIndex: "graph-1", onClick: this.handleClick}]} />
        <Map
          data={{
            categories: [
              {
                id: "category-3",
                label: "Third category",
                items: [
              {id: "item-3-1", label: "Sixth item"},
              {id: "item-3-2", label: "Seventh item"}
                ]
              }
            ],
            links: [
            {parentId: "item-1-1", childId: "item-2-2"}
            ]
          }}
        />
        <Distribution series={[{label: "First", value: 40, colorIndex: "graph-1"}, {label: "Second", value: 30, colorIndex: "accent-2"}]} />
        <Tiles
          onMore={this.handleClick}
          selectable={true}
          onSelect={this.handleClick}
        >
          <Tile>
            <Card thumbnail='/img/carousel-1.png'
              heading='Sample Heading'
              label='Sample Label'
              description='Sample description providing more details.' />
          </Tile>
          <Tile>
            <Card thumbnail='/img/carousel-1.png'
              heading='Sample Heading'
              label='Sample Label'
              description='Sample description providing more details.' />
          </Tile>
          <Tile>
            <Card thumbnail='/img/carousel-1.png'
              heading='Sample Heading'
              label='Sample Label'
              description='Sample description providing more details.' />
          </Tile>
          <Tile>
            <Card thumbnail='/img/carousel-1.png'
              heading='Sample Heading'
              label='Sample Label'
              description='Sample description providing more details.' />
          </Tile>
        </Tiles>
        <Table
          selectable={true}
          onSelect={this.handleClick}
        >
          <TableHeader labels={['Name', 'Note']} />
          <tbody>
            <TableRow>
              <td>
                1
              </td>
              <td>
                Alan
              </td>
              <td className='secondary'>
                plays accordion
              </td>
            </TableRow>
            <TableRow>
              <td>
                2
              </td>
              <td>
                Chris
              </td>
              <td className='secondary'>
                drops the mic
              </td>
            </TableRow>
            <TableRow>
              <td>
                3
              </td>
              <td>
                Eric
              </td>
              <td className='secondary'>
                rides a bike
              </td>
            </TableRow>
            <TableRow>
              <td>
                4
              </td>
              <td>
                Tracy
              </td>
              <td className='secondary'>
                travels the world
              </td>
            </TableRow>
          </tbody>
        </Table>
        <Markdown
          content={`
            # H1

            Paragraph [link](/).

            ## H2

            ![image](/img/carousel-1.png)
          `}
        />
        <List
          selectable={true}
          onMore={this.handleClick}
          onSelect={this.handleClick}
        >
          <ListItem justify='between'
            separator='horizontal'>
            <span>
              Alan
            </span>
            <span className='secondary'>
              happy
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Chris
            </span>
            <span className='secondary'>
              cool
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Eric
            </span>
            <span className='secondary'>
              odd
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Alan
            </span>
            <span className='secondary'>
              happy
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Chris
            </span>
            <span className='secondary'>
              cool
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Eric
            </span>
            <span className='secondary'>
              odd
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Alan
            </span>
            <span className='secondary'>
              happy
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Chris
            </span>
            <span className='secondary'>
              cool
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Eric
            </span>
            <span className='secondary'>
              odd
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Alan
            </span>
            <span className='secondary'>
              happy
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Chris
            </span>
            <span className='secondary'>
              cool
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Eric
            </span>
            <span className='secondary'>
              odd
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Alan
            </span>
            <span className='secondary'>
              happy
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Chris
            </span>
            <span className='secondary'>
              cool
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Eric
            </span>
            <span className='secondary'>
              odd
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Alan
            </span>
            <span className='secondary'>
              happy
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Chris
            </span>
            <span className='secondary'>
              cool
            </span>
          </ListItem>
          <ListItem justify='between'>
            <span>
              Eric
            </span>
            <span className='secondary'>
              odd
            </span>
          </ListItem>
        </List>
        <Tip
          target='actions'
          onClose={this.handleClick}
        >
          Available actions
        </Tip>
        <Label>Foo</Label>
        <FormField>
          <TextInput
            id='item1'
            name='item-1'
            value='one'
            onDOMChange={this.handleClick}
            onSelect={this.handleClick}
            suggestions={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
          />
        </FormField>
        <CheckBox
          label='Sample label'
          toggle={true}
          disabled={true}
          reverse={true}
        />
        <Form onSubmit={this.handleClick}>
          <FormFields>
            <FormField>
              <DateTime
                id='id'
                name='name'
                format='H:mm:ss'
                onChange={this.handleClick}
              />
            </FormField>
            <FormField label="Foo" error={<p>foo</p>}>
              <NumberInput
                value={10}
                onChange={this.handleClick}
              />
            </FormField>
            <FormField>
              <RadioButton
                id='choice1-1'
                name='choice1-1'
                label='Choice 1'
                checked={true}
                onChange={this.handleClick}
              />
              <RadioButton
                id='choice1-2'
                name='choice1-2'
                label='Choice 2'
                checked={false}
                onChange={this.handleClick}
              />
            </FormField>
          </FormFields>
        </Form>
        <SearchInput
          placeHolder='Search'
          suggestions={[
            {
              value: "first",
              label: "FOO"
            },
            {
              value: "first",
              label: "FOO"
            }
          ]}
        />
        <LoginForm
          onSubmit={this.handleClick}
          title='Sample Title'
          secondaryText='Sample secondary text'
          forgotPassword={<Anchor href='#' label='Forgot password?' />}
        />
        <CheckBox
          label='Sample label'
          toggle={false}
          disabled={true}
          reverse={false}
        />
        <Search
          placeHolder='Search'
          inline={true}
        />
        <Search
          placeHolder='Search'
          inline={true}
          size='medium'
          suggestions={['first', 'second', 'third', 'fourth']}
        />
        <Tabs
          activeIndex={0}
          onActive={this.handleClick}
        >
          <Tab title='First Title'>
            <Paragraph>
              First contents
            </Paragraph>
            <input
              type='text'
              value=''
              onChange={this.handleClick}
            />
          </Tab>
          <Tab title='Second Title'>
            <Paragraph>
              Second contents
            </Paragraph>
            <input
              type='text'
              value=''
              onChange={this.handleClick}
            />
          </Tab>
        </Tabs>
        <Quote credit='Ricky Baker'>
          <Paragraph>
            Trees. Birds. Rivers. Sky.
          </Paragraph>
          <Paragraph>
            Running with my Uncle Hec
          </Paragraph>
          <Paragraph>
            Living forever.
          </Paragraph>
        </Quote>
        <Timestamp value='2017-01-09T02:40:24.812Z' />
        <Accordion>
          <AccordionPanel heading="First Title">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          </AccordionPanel>
          <AccordionPanel heading="Second Title">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          </AccordionPanel>
          <AccordionPanel heading="Third Title">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          </AccordionPanel>
        </Accordion>
        <Box direction='row'
          justify='start'
          align='center'
          wrap={true}
          pad='medium'
          margin='small'
          colorIndex='light-2'
          onClick={this.handleClick}
          onFocus={this.handleClick}
        >
          <Value value={1}
            colorIndex='accent-1' />
          <Box direction='row'
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='small'
            colorIndex='light-1'
            onClick={this.handleClick}
            onFocus={this.handleClick}>
            <Value value={2} />
          </Box>
          <Box direction='row'
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='small'
            colorIndex='light-1'
            onClick={this.handleClick}
            onFocus={this.handleClick}
          >
            <Value value={3} />
          </Box>
          <Box direction='row'
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='small'
            colorIndex='light-1'
            onClick={this.handleClick}
            onFocus={this.handleClick}
          >
            <Value value={4} />
          </Box>
          <Box direction='row'
            justify='start'
            align='center'
            wrap={true}
            pad='medium'
            margin='small'
            colorIndex='light-1'
            onClick={this.handleClick}
            onFocus={this.handleClick}
          >
            <Value value={5} />
          </Box>
        </Box>
        <Columns>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            Box 1
          </Box>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            Box 2
          </Box>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            Box 3
          </Box>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            Box 4
          </Box>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            Box 5
          </Box>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            Box 6
          </Box>
        </Columns>
        <Layer onClose={this.handleClick}>
          <Box align='center'
            pad='medium'
            margin='small'
            colorIndex='light-2'>
            Box 6
          </Box>
        </Layer>
        <Split flex="left" priority="right" separator showOnResponsive="both">
          <Box colorIndex='neutral-1'
            justify='center'
            align='center'
            pad='medium'>
            Left Side
          </Box>
          <Box colorIndex='neutral-2'
            justify='center'
            align='center'
            pad='medium'>
            Right Side
          </Box>
        </Split>
        <Article>
          <Card
            thumbnail='/img/carousel-1.png'
            label='Sample Label'
            heading='Sample Heading'
            description='Sample description providing more details.'
          />
        </Article>
        <Header justify='between'>
          <Paragraph margin='none'>
            © 2016 Grommet Labs
          </Paragraph>
          <Menu direction='row'
            size='small'
            dropAlign={{ right: "right"}}>
            <Anchor href='#'>
              First
            </Anchor>
            <Anchor href='#'>
              Second
            </Anchor>
            <Anchor href='#'>
              Third
            </Anchor>
          </Menu>
        </Header>
        <Hero
          background={<Image src='/img/carousel-1.png' fit='cover' />}
          backgroundColorIndex='dark'>
          <Box direction='row'
            justify='center'
            align='center'>
            <Box basis='1/2'
              align='end'
              pad='medium' />
            <Box basis='1/2'
              align='start'
              pad='medium'>
              <Heading margin='none'>
                Sample Heading
              </Heading>
            </Box>
          </Box>
        </Hero>
        <Footer size='small'>
          <Paragraph margin='none'>
            © 2016 Grommet Labs
          </Paragraph>
          <Menu direction='row'
            size='small'
            dropAlign={{ right: "right"}}>
            <Anchor href='#'>
              First
            </Anchor>
            <Anchor href='#'>
              Second
            </Anchor>
            <Anchor href='#'>
              Third
            </Anchor>
          </Menu>
        </Footer>
        <Notification
          state='Sample state'
          message='Sample message'
          timestamp={{}}
        />
        <Notification
          state='Sample state'
          message='Sample message'
          timestamp="123456"
          percentComplete={30}
          status='ok'
        />
        <Section
          align='center'
          pad='medium'
          margin='small'
          colorIndex='light-2'
        >
          Section 1
        </Section>
        <Section
          align='center'
          pad='medium'
          margin='small'
          colorIndex='light-2'
        >
          Section 2
        </Section>
        <Section
          align='center'
          pad='medium'
          margin='small'
          colorIndex='light-2'
        >
          Section 3
        </Section>
        <Menu responsive={true}>
          <Anchor href='#'>
            First action
          </Anchor>
          <Anchor href='#'>
            Second action
          </Anchor>
          <Anchor href='#'>
            Third action
          </Anchor>
        </Menu>
        <Sidebar colorIndex='neutral-1'>
          <Header pad='medium'
            justify='between'>
            <Title>
              Title
            </Title>
          </Header>
          <Box
            flex='grow'
            justify='start'
          >
            <Menu primary={true}>
              <Anchor href='#'>
                First
              </Anchor>
              <Anchor href='#'>
                Second
              </Anchor>
              <Anchor href='#'>
                Third
              </Anchor>
            </Menu>
          </Box>
          <Footer pad='medium'>
            <Button label="foo" />
          </Footer>
        </Sidebar>
        <Toast
          status='ok'
          onClose={this.handleClick}
        >
          A short message to let the user know something.
        </Toast>
        <Select
          placeHolder='Search'
          inline={true}
          multiple={true}
          onSearch={this.handleClick}
          options={['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']}
          value={["one"]}
          onChange={this.handleClick}
        />
      </App>
    );
  }
}

export default ExampleApp;
