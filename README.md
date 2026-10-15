# rootwork-week-02

WHAT EACH VARIABLE REPRESENTS
age - the age of the applicant in years
score - the test score gotten by the applicant
hasLaptop - checks whether the applicant has access to a laptop
hasInternet - checks whether the applicant has access to the internet
completedApplication - checks whether the applicant has completed the application form

WHAT EACH CONDITION DOES
age >= 18 - verifies that the applicant is older than or equal to 18 years old
score >= 85 - checks that the applicant scored 85 and above to qualify as a Priority candidate.
score >= 60 -checks that the applicant scored between 60 and above to be an eligible candidate.
hasLaptop - checks if the access to laptop is true
hasInternet - checks if the access to internet connection is true
completedApplication - checks if the applicant has completed the full application process

LOGICAL OPERATOR USED 
>=  to check if age and score are greater than or equal to some limits
&& to connect all neccessary conditions together

WHY THE ORDER OF THE CONDITION MATTERS
The code should check for the priority candidates first because Javascript reads code from top to bottom and if one condition is met, the code exists the if/else if/ else condition structure. If the normal eligibility is evaluated first, the code will always return 'Eligible' for all candidates that scored 85 or higher and met all other requirements instead of outputting 'Priority candidate'

WHY A CANDIDATE WITH HIGH SCORE CAN STILL FAIL
To be eligible, the candidate has to meet all of the the other requirements and not just score high in the test. For example, if the candidate score 90 and does not have access to a laptop, they will not be eligible

DIFFERENCE BETWEEN && AND ||
&& requires all expression conditions to be true for the whole statement to be true.
|| requires at least one condition to be true for the overall statement to be true. It only fails if every single part of the condition is false.

BUG I ENCOUNTERED
The order of the condition I initially used was wrong. I initially checked for candidates scoring 60 and higher first in the code before checking for the candidates that scored 85 and above. I fixed it by checking for priority candidates first before checking for eligibility requirement 