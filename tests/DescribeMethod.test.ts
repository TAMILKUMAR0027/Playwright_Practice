import { test, expect } from '@playwright/test';
test.describe("Grouping test case",()=>{
    test("Test 1",async()=>{
        console.log("Test 1")
    })
    test("Test 2",async()=>{
        console.log("Test 2")
    })
    test("Test 3",async()=>{
        console.log("Test 3")
    })
})
test.describe.skip("Skipping testcase",()=>{
    test("Test 1",async()=>{
        console.log("Test 1")
    })
    test("Test 2",async()=>{
        console.log("Test 2")
    })
    test("Test 3",async()=>{
        console.log("Test 3")
    })
})

test.describe("Nested describe",()=>{
    test.describe("nested describe",()=>{
        test("Test nested 1",async()=>{
            console.log("Hi")
        });
        test("Test nested 2",async()=>{
            console.log("Hello")
        });
    })
})

test("Valid testcases @smoke",async({page})=>{
    console.log("smoke testcases")
})
test("Valid  @regression",async({page})=>{
    console.log("Regression testcases")
})
test("Valid 2 @smoke",async({page})=>{
    console.log("smoke 2 testcases")
})
test("Valid 3 @sanity",async({page})=>{
    console.log("Sanity testcases")
})

test.describe("authentication @group",()=>{
    test("testcase",()=>{
        console.log("Groups")
    })
})