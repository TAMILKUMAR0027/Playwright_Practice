import searchData from '../test-data/searchData.json'
import {test,expect} from '../fixtures/baseFixtures'
for (const key of searchData){
        test(`search data ${key.keyword}`,async({hp})=>{
            await hp.navigate()
            await hp.search(`${key.keyword}`)
            if(`${key.keyword}`=="mac"){
                await expect(hp.mac).toHaveText(`${key.expectedMessage}`)
            }else{
                await expect(hp.noProduct).toHaveText(`${key.expectedMessage}`)
            }
        })
}