import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ReactTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>

      <TabPanel>
        <h2>Содержание для первой вкладки</h2>
        <p>Это текст для первой вкладки.</p>
      </TabPanel>
      <TabPanel>
        <h2>Содержание для второй вкладки</h2>
        <p>Это текст для второй вкладки.</p>
      </TabPanel>
      <TabPanel>
        <h2>Содержание для третьей вкладки</h2>
        <p>Это текст для третьей вкладки.</p>
      </TabPanel>
    </Tabs>
  );
};

export default ReactTabs;
