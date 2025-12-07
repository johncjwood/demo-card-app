# Checklist

- [x] Ask top 3 clarifying questions
- [x] Add test360() method to check total purchase price is 519.75
- [x] Add test361() method to check total cost is 433.13
- [x] Add test362() method to check total cost is 529.65
- [x] Update testMap to include tests 360, 361, 362
- [x] Run the command: node test-runner.js 100 200 300 310 350 360 361 362
- [x] Verify results (all pass except 361 and 362 should fail)

## Original User Prompt

In the test-runner.js code, I'd like to add 3 new tests, Test 360, Test 361, and Test 362. Each should be able to run independently. By the time we execute any of these 3 tests we should already be on the /checkout page. Test 360 should check if the total purchase price is 519.75, Test 361 should test that the total cost is 433.13, and Test 362 should test that the total cost is 529.65

After implementing these changes, please run
node test-runner.js 100 200 300 310 350 360 361 362
Ideally, all should succeed except 361 and 362 which should fail.
