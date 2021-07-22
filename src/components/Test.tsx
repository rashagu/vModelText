import {defineComponent, ref} from 'vue'
import { Tab, Tabs } from 'vant';

interface ExampleProps {
  name: string
}

const ServiceDetails = defineComponent<ExampleProps>(props => {
  const tabsActive =ref(2)
  return () => (
      <div>
        <Tabs v-model-active={tabsActive.value} type="card">
          <Tab title="标签 1">内容 1</Tab>
          <Tab title="标签 2">内容 2</Tab>
          <Tab title="标签 3">内容 3</Tab>
        </Tabs>
      </div>
  )
})

ServiceDetails.props = {
  name: String
}

export default ServiceDetails
