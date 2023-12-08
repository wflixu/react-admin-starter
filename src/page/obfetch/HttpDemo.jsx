import { http } from './../../shared/http'
import { Button } from 'antd'
import {retry, tap, catchError} from 'rxjs'
export function HttpDemo() {
   
    const getData = () =>{
        http.get('/ping').subscribe(res=>{
            console.log(res)
        })
    }
    // 重试
    const getData2 = () =>{
        http.get('/ping').pipe(
            tap(()=>{
                console.log('start ping ...')
            }),
            retry(4),
            catchError((error)=> {
                console.log(error)
            })
        ).subscribe(res=>{
            console.log(res)
        })
    }

    return (<div>
        <h1>test obfetch</h1>
        <div>
            <Button onClick={getData}>请求数据</Button>
        </div>
        <h2>retry fetch </h2>
        <div>
        <Button onClick={getData2}>请求数据</Button>
        </div>
    </div>)
}