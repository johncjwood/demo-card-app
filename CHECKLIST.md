# Checklist

- [x] Ask top 3 clarifying questions
- [x] Review existing test structure and goals page implementation
- [x] Add test identifiers to frontend code if needed
- [x] Create Test 600 (navigate, add goal, submit)
- [x] Create Test 601 (verify goal completion display)
- [x] Run test suite to verify all tests pass

## Original User Prompt

Add 2 new tests, Test 600 and Test 601. Test 600 should 
1) Navigate to the /goals page
2) click the "Add New Goal" button
3) In the "Create New Goal" area, the dropdown should be set to "Total Cards" and the quantity should be set to 10
4) The Submit button should be pressed
Test 601 should see that you're still on the /goals page, and that there is a new box that shows the goal is completed 100%

Please create these tests and if you need to add additional identifiers to the frontend code to make the testing code simpler, please do.

When finished, run the test script and everything should succeed:
node test-runner.js 100 200 300 310 350 360 390 395 400 500 600 601
