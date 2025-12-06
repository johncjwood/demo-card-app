# Checklist

- [x] Ask top 3 clarifying questions
- [x] Add Test 350 to check quantity is 12 on checkout page
- [x] Add Test 351 to check quantity is 10 on checkout page
- [x] Update testMap to include new tests
- [x] Run the test command to verify implementation

## Original User Prompt

In the test-runner.js code, I'd like to add a new test, Test 350 and Test 351. Each should be able to run independently. By the time we execute either Test 350 or Test 351, we should already be on the /checkout page. Test 350 should check if the quantity getting purchased of the Mega Absol Ex card is 12, and Test 351 should check if the quantity getting purchased is 10.

After implementing these changes, please run 
node test-runner.js 100 200 300 310 350 351
Ideally, all should succeed except 351 which should fail.
