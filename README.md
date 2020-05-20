# itemkuXarjun
Solution for Online test of Itemku (Five Jack) Company

## Question 1

There is an open chat.

When a person enters the chat, the following message is displayed.
"[Nickname] came in."

When a person leaves the chat, the following message is displayed.
"[Nickname] has left."

There are two ways to change nicknames in a chat:
After leaving the chat, you can re-enter with the new nickname.
Change nickname in a chat.

When changing a nickname, the nickname of the previous messages displayed in the chat is also changed.

For example, if a person uses the nickname "Muzi" and "Prodo" in the chat in order, the following message is displayed in the chat.

"Muzi came in." "Prodo came in."

When “Muzi” leaves the room, the following message is left.
"Muzi came in." "Prodo came in." "Muzi has left."

When Muzi comes back in again with the new nickname, Prodo, the previous messages are changed to Prodo as follows.

"Prodo came in." "Prodo came in." "Prodo has left." "Prodo came in."

Since the chat allows duplicate nicknames, there are currently two people in the chat who use the nickname, Prodo. Now, when Prodo (the second person) changes his nickname to Ryan, the chat message is changed as follows.

"Prodo came in." "Ryan came in." "Prodo has left." "Prodo came in."

Complete the function that returns the entire chat messages.

### Limitations
Record is an array containing the following strings and its length is 1 ~ 100,000.

Here is a description of the string in the record.
- All users are separated by [user ID].
- [User ID] enters the chat with [Nickname] - "Enter [User ID] [Nickname]" (ex. "Enter uid1234 Muzi")
- [User ID] leaves the chat - "Leave [User ID]" (ex. "Leave uid1234")
- [User ID] changes nickname to [Nickname] - "Change [User ID] [Nickname]" (ex. "Change uid1234 Muzi")
- The first word is either Enter, Leave, or Change.
- Each word is separated by a space and consists of only uppercase letters, lowercase letters, and numbers.
- The user ID and nickname distinguish between uppercase and lowercase letters.
- The length of the user ID and nickname is 1 ~ 10.
- There is no wrong input such as an user who left the chat is changing their nickname.

### Input and output examples
record:
["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]

answer:
["Prodo came in.", "Ryan came in.", "Prodo has left.", "Prodo came in."]

## Question 2

There is a mobile game with stage. We wanna get the failure rate of each stage.

The failure rate is defined as follows;
Number of players who have reached the stage but have not yet cleared / Number of players who have reached the stage.

Complete the function to return an array containing the number of the stage in descending order of the highest failure rate, when total stages N, an array users containing the stage in which the game user is currently playing are given as a parameter.

### Limitations
- N, total stages: 1 ~ 500
- users:
  The length of array users: 1 ~ 200,000
  users contain numbers 1 ~ N + 1.
- Each number in users represents the stage that the user is currently playing.
- Where (N + 1) represents the user who cleared the last stage (Nth stage).
- If there is a stage with the same failure rate, the smaller number of stages should be placed first.
- If there is no user who reaches the stage, the failure rate of the stage is 0.

### Input and output examples
N: 5
users: [2,1,2,6,2,4,3,3]
answer: [3,4,2,1,5]

A total 8 users played stage one, and one of them was not clear the stage yet. Therefore, the failure rate of stage 1 is as follows.
Stage 1 failure rate: 1/8

A total 7 users played stage 2, 3 of which were not clear the stage yet. Therefore, the failure rate of stage 2 is as follows.
Stage 2 failure rate: 3/7

Likewise, the failure rates of the remaining stages are as follows.
Stage 3 failure rate: 2/4
Stage 4 failure rate: 1/2
Stage 5 failure rate: 0/1

Sort the number of stages by failure rate in descending order: [3,4,2,1,5]

N: 4
users: [4,4,4,4,4]
answer: [4,1,2,3]

Since all users are in the last stage, the failure rate of stage 4 is 1 and the failure rate of the remaining stages is 0.
If the failure rate is same, then the smaller number of stages should come first.

## Question 3

A Candidate Key is an attribute or a set of attributes that can uniquely identify a tuple of a relation in the relational database and satisfies the following two properties.

- Uniqueness: The relation does not have two distinct tuples (i.e. rows or records in common database language) with the same values for these attributes.
- Minimality: There should no subset of these attributes satisfy uniqueness, which means if we exclude one of these attributes, then uniqueness will be broken.

[Student number, Name, Major, Grade]

[100,”ryan”,”music”,2]
[200,”apeach”,”math”,2]
[300,”tube”,”computer”,3]
[400,”con”,”computer”,4]
[500,”muzi”,”music”,3]
[600,”apeach”,”music”,2]

In the above example, each student has a unique "student number".
Thus, the ["student number"] can be the candidate key of the relation.

Then, because there are students who use the same name ("apeach") for "name", "name" can not be a candidate key.

However, if you use ["name", "major"] together, all the tuples of the relation can be uniquely identified, so they can become candidate keys.

Of course, it is possible to uniquely identify all tuples in a relation using ["name", "major", "grade"], but it can not be a candidate key because it does not satisfy the minimum.

Therefore, the candidate key of the input above is ["student number"], ["name", "major"].

Find how many candidate keys are there for given array relation.

### Limitations
- relation is a two-dimensional string array.
- The length of the relation column is 1 ~ 8, and each column indicates the attribute of the relation.
- The length of the row of relation is 1 ~ 20, and each row represents a tuple of relations.
- The length of all strings in relation is 1 ~ 8, and consists of only lowercase letters and numbers.
- All tuples of relation are uniquely identifiable (ie, there are no duplicate tuples).

### Input and output examples
relation: 
[[“100”,”ryan”,”music”,”2”],[“200”,”apeach”,”math”,”2”],[“300”,”tube”,”computer”,”3”],[“400”,”con”,”computer”,”4”],[“500”,”muzi”,”music”,”3”],[“600”,”apeach”,”music”,”2”]]

answer: 2
