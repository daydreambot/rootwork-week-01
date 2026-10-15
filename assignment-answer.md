PART 1
To be considered for the Rootwork Tech Scholarship, an applicant must satisfy five criteria which are: 

Be at least 18 years old

Have an application score of at least 60

Have completed their application

Have access to a laptop

Have internet access

If an applicant fails at least one of these five requirements, they are not eligible



For applicants who meet all five criteria, their final classification depends on how high they score:

If their score is 85 or higher, they are classified as a Priority candidate.

If their score is between 60 and 84, they are classified as an eligible candidate.



PART 2

check for the answer in PSEUDOCODE.txt in the assignment/decision-engine branch



PART 3

check for the answer in index.js in the assignment/decision-engine branch



PART 4

someone younger than 18  (  Input: age = 15 score = 85 hasLaptop = true hasInternet = true completedApplication = true Expected result: Not eligible Actual result: Not eligible )
someone with a score below 60   (  Input: age = 21 score = 57 hasLaptop = true hasInternet = true completedApplication = true Expected result: Not eligible Actual result: Not eligible )
someone without internet access  (  Input: age = 21 score = 85 hasLaptop = true hasInternet = false completedApplication = true Expected result: Not eligible Actual result: Not eligible )
someone with an incomplete application  (  Input: age = 21 score = 85 hasLaptop = true hasInternet = true completedApplication = false Expected result: Not eligible Actual result: Not eligible )
someone without laptop access  (  Input: age = 21 score =  85 hasLaptop = false hasInternet = true completedApplication = true Expected result: Not eligible Actual result: Not eligible )
someone aged exactly 18  (  Input: age = 18 score = 62 hasLaptop = true hasInternet = true completedApplication = true Expected result: Eligible Actual result: Eligible )
someone scoring exactly 60  (  Input: age = 21 score = 60 hasLaptop = true hasInternet = true completedApplication = true Expected result: Not eligible Actual result: Not eligible )
one priority candidate  (  Input: age = 21 score = 96 hasLaptop = true hasInternet = true completedApplication = true Expected result: Priority candidate Actual result: Priority candidate )