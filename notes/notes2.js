const s = `
Field Value 
Application Name PBINPODL 
Generation Number 292 
Job Name PBIN261DU 
State COMPLETE 
Job ID 33293332 
Job Type UNIX 
Predecessors PBFN16AU 
Successors PBIN265DU 
Start Time Wed 19 May 2021 23:00:00 PDT 
End Time Wed 19 May 2021 23:00:07 PDT 
Agent Name PSRCC003V113 
Average Execution Time 7 secs 
Anticipated End Time Wed 19 May 2021 23:00:07 PDT 
Completion Code 0 
Submission Count 1 
Run a script /home/apps/td/bin/source/PBIN261U.ksh 
Arguments to pass prd TSKUD_BRD_SKU_DIM 
User ID pbin001 
`
undefined
s.split("\n")

(35) ["Field Value", "", "Application Name PBSLEURF", "", "Generation Number 1988", "", "Job Name PBSL141U", "", "Qualifier EGI", "", "State FAILED", "", "Job ID 4720044", "", "Job Type UNIX", "", "Predecessors PBSL140U.EGI,PBIN025U.EGI", "", "Successors PBSL143U.EGI", "", "Start Time Fri 20 Dec 2019 19:02:39 PST", "", "End Time Fri 20 Dec 2019 19:02:48 PST", "", "Agent Name PSRCC003V113", "", "Completion Code 99", "", "Submission Count 1", "", "Run a script /home/apps/td/bsl/source/PBSL141U.ksh", "", "Arguments to pass prd egi", "", "User ID pbsl001"]
var new = s.split("\n")
VM381:1 Uncaught SyntaxError: Unexpected token 'new'

var n = s.split("\n")

undefined
n
(35) ["Field Value", "", "Application Name PBSLEURF", "", "Generation Number 1988", "", "Job Name PBSL141U", "", "Qualifier EGI", "", "State FAILED", "", "Job ID 4720044", "", "Job Type UNIX", "", "Predecessors PBSL140U.EGI,PBIN025U.EGI", "", "Successors PBSL143U.EGI", "", "Start Time Fri 20 Dec 2019 19:02:39 PST", "", "End Time Fri 20 Dec 2019 19:02:48 PST", "", "Agent Name PSRCC003V113", "", "Completion Code 99", "", "Submission Count 1", "", "Run a script /home/apps/td/bsl/source/PBSL141U.ksh", "", "Arguments to pass prd egi", "", "User ID pbsl001"]
var x= n.split("");
VM538:1 Uncaught TypeError: n.split is not a function
    at <anonymous>:1:10
(anonymous) @ VM538:1
n.filter(a => a !== "")
(18) ["Field Value", "Application Name PBSLEURF", "Generation Number 1988", "Job Name PBSL141U", "Qualifier EGI", "State FAILED", "Job ID 4720044", "Job Type UNIX", "Predecessors PBSL140U.EGI,PBIN025U.EGI", "Successors PBSL143U.EGI", "Start Time Fri 20 Dec 2019 19:02:39 PST", "End Time Fri 20 Dec 2019 19:02:48 PST", "Agent Name PSRCC003V113", "Completion Code 99", "Submission Count 1", "Run a script /home/apps/td/bsl/source/PBSL141U.ksh", "Arguments to pass prd egi", "User ID pbsl001"]
var removed_space = n.filter(a => a !== "")
undefined
removed_space.splice(0,1)
["Field Value"]
removed_space
(17) ["Application Name PBSLEURF", "Generation Number 1988", "Job Name PBSL141U", "Qualifier EGI", "State FAILED", "Job ID 4720044", "Job Type UNIX", "Predecessors PBSL140U.EGI,PBIN025U.EGI", "Successors PBSL143U.EGI", "Start Time Fri 20 Dec 2019 19:02:39 PST", "End Time Fri 20 Dec 2019 19:02:48 PST", "Agent Name PSRCC003V113", "Completion Code 99", "Submission Count 1", "Run a script /home/apps/td/bsl/source/PBSL141U.ksh", "Arguments to pass prd egi", "User ID pbsl001"]
removed_space.map(a=>a.split(" "))
(17) [Array(3), Array(3), Array(3), Array(2), Array(2), Array(3), Array(3), Array(2), Array(2), Array(8), Array(8), Array(3), Array(3), Array(3), Array(4), Array(5), Array(3)]0: (3) ["Application", "Name", "PBSLEURF"]1: (3) ["Generation", "Number", "1988"]2: (3) ["Job", "Name", "PBSL141U"]3: (2) ["Qualifier", "EGI"]4: (2) ["State", "FAILED"]5: (3) ["Job", "ID", "4720044"]6: (3) ["Job", "Type", "UNIX"]7: (2) ["Predecessors", "PBSL140U.EGI,PBIN025U.EGI"]8: (2) ["Successors", "PBSL143U.EGI"]9: (8) ["Start", "Time", "Fri", "20", "Dec", "2019", "19:02:39", "PST"]10: (8) ["End", "Time", "Fri", "20", "Dec", "2019", "19:02:48", "PST"]11: (3) ["Agent", "Name", "PSRCC003V113"]12: (3) ["Completion", "Code", "99"]13: (3) ["Submission", "Count", "1"]14: (4) ["Run", "a", "script", "/home/apps/td/bsl/source/PBSL141U.ksh"]15: (5) ["Arguments", "to", "pass", "prd", "egi"]16: (3) ["User", "ID", "pbsl001"]length: 17__proto__: Array(0)
removed_space.map(a=>a.split(" ").splice(-1))
(17) [Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1)]0: ["PBSLEURF"]1: ["1988"]2: ["PBSL141U"]3: ["EGI"]4: ["FAILED"]5: ["4720044"]6: ["UNIX"]7: ["PBSL140U.EGI,PBIN025U.EGI"]8: ["PBSL143U.EGI"]9: ["PST"]10: ["PST"]11: ["PSRCC003V113"]12: ["99"]13: ["1"]14: ["/home/apps/td/bsl/source/PBSL141U.ksh"]15: ["egi"]16: ["pbsl001"]length: 17__proto__: Array(0)

removed_space.map(a=>a.split(" ").slice(-1))

removed_space.map(a=>a.split(" ").splice(-1))

// (17) [Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1)]0: ["PBSLEURF"]1: ["1988"]2: ["PBSL141U"]3: ["EGI"]4: ["FAILED"]5: ["4720044"]6: ["UNIX"]7: ["PBSL140U.EGI,PBIN025U.EGI"]8: ["PBSL143U.EGI"]9: ["PST"]10: ["PST"]11: ["PSRCC003V113"]12: ["99"]13: ["1"]14: ["/home/apps/td/bsl/source/PBSL141U.ksh"]15: ["egi"]16: ["pbsl001"]length: 17__proto__: Array(0)
removed_space
// (17) ["Application Name PBSLEURF", "Generation Number 1988", "Job Name PBSL141U", "Qualifier EGI", "State FAILED", "Job ID 4720044", "Job Type UNIX", "Predecessors PBSL140U.EGI,PBIN025U.EGI", "Successors PBSL143U.EGI", "Start Time Fri 20 Dec 2019 19:02:39 PST", "End Time Fri 20 Dec 2019 19:02:48 PST", "Agent Name PSRCC003V113", "Completion Code 99", "Submission Count 1", "Run a script /home/apps/td/bsl/source/PBSL141U.ksh", "Arguments to pass prd egi", "User ID pbsl001"]
var data = removed_space.map(a=>a.split(" ").splice(-1))
// undefined
removed_space.map(a=>a.split(" ").slice(-1))
(17) [Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1), Array(1)]0: ["PBSLEURF"]1: ["1988"]2: ["PBSL141U"]3: ["EGI"]4: ["FAILED"]5: ["4720044"]6: ["UNIX"]7: ["PBSL140U.EGI,PBIN025U.EGI"]8: ["PBSL143U.EGI"]9: ["PST"]10: ["PST"]11: ["PSRCC003V113"]12: ["99"]13: ["1"]14: ["/home/apps/td/bsl/source/PBSL141U.ksh"]15: ["egi"]16: ["pbsl001"]length: 17__proto__: Array(0)

var data = removed_space.map(a=>a.split(" ").slice(0,-1))
(17) [Array(2), Array(2), Array(2), Array(1), Array(1), Array(2), Array(2), Array(1), Array(1), Array(7), Array(7), Array(2), Array(2), Array(2), Array(3), Array(4), Array(2)]0: (2) ["Application", "Name"]1: (2) ["Generation", "Number"]2: (2) ["Job", "Name"]3: ["Qualifier"]4: ["State"]5: (2) ["Job", "ID"]6: (2) ["Job", "Type"]7: ["Predecessors"]8: ["Successors"]9: (7) ["Start", "Time", "Fri", "20", "Dec", "2019", "19:02:39"]10: (7) ["End", "Time", "Fri", "20", "Dec", "2019", "19:02:48"]11: (2) ["Agent", "Name"]12: (2) ["Completion", "Code"]13: (2) ["Submission", "Count"]14: (3) ["Run", "a", "script"]15: (4) ["Arguments", "to", "pass", "prd"]16: (2) ["User", "ID"]length: 17__proto__: Array(0)

var headers= removed_space.map(a=>a.split(" ").slice(0,-1).join(" "))
(17) ["ApplicationName", "GenerationNumber", "JobName", "Qualifier", "State", "JobID", "JobType", "Predecessors", "Successors", "StartTimeFri20Dec201919:02:39", "EndTimeFri20Dec201919:02:48", "AgentName", "CompletionCode", "SubmissionCount", "Runascript", "Argumentstopassprd", "UserID"]
