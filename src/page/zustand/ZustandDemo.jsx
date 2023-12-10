import { useCountStore } from "./store"
import { Button } from "antd";

export function ZustandDemo () {
    const count = useCountStore((state) => state.count);
    const add = useCountStore(state => state.increate);
    const decreate = useCountStore(state => state.decreate);
    const reset = useCountStore(state => state.reset);
    const asyncAdd = useCountStore(state => state.asyncAdd);
    return (
        <div>
            <h1>zustand demo</h1>
            <h2> counter</h2>
            <div>
                <Button onClick={()=> add()}>
                    + 1
                </Button>
                <Button onClick={()=> add(3)}>
                    + 3
                </Button>
                <Button onClick={()=> asyncAdd()}>
                    async add 1
                </Button>
                <Button onClick={()=> decreate()}> -1</Button>
                <Button onClick={()=> decreate(2)}> -2</Button>
                <Button onClick={reset}> reset</Button>
                <p>
                    {count}
                </p>
            </div>
        </div>
    )
}