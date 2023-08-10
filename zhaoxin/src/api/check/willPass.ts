import {axiosInstances} from "../axiosConfi";
export const willpass =()=>{
    return axiosInstances.get("/user/willPass", {
                headers:{
                    Authorization:"Bearer "+"eyJraWQiOiJlMTFhNGUyMy05YzlkLTQzMzQtOWRiMS0yNDQ2NDFiNjI0N2QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyMDIxMTAwOTgxNzEiLCJhdWQiOiJtZXNzYWdpbmctY2xpZW50IiwibmJmIjoxNjkxNjQzMzU2LCJzY29wZSI6WyJtZXNzYWdlLnJlYWQiXSwiaXNzIjoiaHR0cDovLzQzLjEzOS4xMTcuMjE2Ojk4MjEiLCJleHAiOjE2OTE2ODY1NTYsImlhdCI6MTY5MTY0MzM1Nn0.eLNqltAAHD1n_2ue9yHUWAm-FnnYhxDvzoKPWMamulzU7NjgAkwRAgwiYMjI2n-4FQKkECvIJMSgqPPRcVktypZiq31wMcoTfb9wgB56JCIlEkT9Srkf5CbNoWqsn16jmPNx7NOJQjdonno8-m6DVowwDS480hTmag37k6E_HPgzBCMKYtji9sXzak1yI_VUSD5zUa2R2rChEA38hricghJwKLK_ccjD0ztGOzBQNLohN4xQsf5HjCpn0uYvDB2BklpKJbUJyxrYHLkYd9g4IFl9uVELQ6QapYxhw7lIM1qVI0_y-8d9RLfAkUP3LC8qXkS1G9yCLWHcjgakWIp4dQ" 
            },
            params:{
                departmentId:1
            }
            })
}