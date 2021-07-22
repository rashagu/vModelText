import {defineComponent, KeepAlive} from 'vue'
import Test from "./components/Test";

interface ExampleProps {
    name: string
}

const ExampleComponent = defineComponent<ExampleProps>(props => {
    return () => (
        <div style={{height: '100%'}}>
            <Test />
        </div>
    )
})

ExampleComponent.props = {
    name: String
}

export default ExampleComponent
