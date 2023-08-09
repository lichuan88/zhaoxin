import {axiosInstances} from "../axiosConfi";
export const get = async () => {
        try {
            interface arr{
                college:string,
                volunteer:{},
                gender:string,
                major:string,
                id:string,
                introduction:string,
                username:string
            }
            let list:arr[]
            const res = await axiosInstances.get("/user/info/all", {
                headers:{
                    Authorization:"Bearer"+"eyJraWQiOiJlMTFhNGUyMy05YzlkLTQzMzQtOWRiMS0yNDQ2NDFiNjI0N2QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyMDIxMTAwOTgxNzEiLCJhdWQiOiJtZXNzYWdpbmctY2xpZW50IiwibmJmIjoxNjkxNTkzNzE3LCJzY29wZSI6WyJtZXNzYWdlLnJlYWQiXSwiaXNzIjoiaHR0cDovLzQzLjEzOS4xMTcuMjE2Ojk4MjEiLCJleHAiOjE2OTE2MzY5MTcsImlhdCI6MTY5MTU5MzcxN30.agqxwY8DavIMb50g-tFYotkFZP-3ZWt94CMXAhw0jfMubXh6C7qbpJnbKk2vWoJXif1338JbvA6IsFW8nKEooT_muKAFBWBk7jYvjJgmEfP6EIvZNt5SLHPbFHea8J6xXrFVZkbrqA3cOQZ1DNrKUr69VAqJxfOEEEhI0-qSbyYj3-sXH8e68FHlDmY1yjohBsRPndmcV8UNjHRD1D9RpjEKvWcyrGGXHKgoQcWMKvDw6ulerRG3HJNSck6q1YO9jvAOukMkcaOwURCRWCvBrAC_B8t2Z0mo02RPM1TwnqQ5wbJy53qSV_U4U-_nAD1_O4g92vrs8MBghcbpssYUVw" 
            },
            params:{
                organizationId:1
            }
            })
            list=res.data.data
            console.log(list)
        } catch (error) {
            console.log(error)
        }
    }