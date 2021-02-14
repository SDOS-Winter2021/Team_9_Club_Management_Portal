# **Club Management Portal**

## **1 Introduction**

At IIITD, Clubs help engage students in discussion and activities across various disciplines. Presently, there are more than 20 clubs which plan out weekly activities for all the students on the campus. Clubs host several competitions and provide prize money to the winners among other prizes.

1.1 Purpose

Currently, each club needs to send a proposal to the admin for approval of events and funds. After getting approval, event organisers send an email to the club coordinator who forwards a weekly plan for events to students and send reminders to students as well.

Currently everything mentioned above is done using mails and is neither streamlined nor tedious. Students are bombarded with a lot of emails for events which they are not interested in and keeping track of funds and requirements for an event over email is very difficult for event organisers.

The allocation of these funds is a time-consuming process involving a lot of the administration.

To streamline the process especially for smaller events, there is a need for an interface which would allow events to be added by the club coordinators and the administrators can easily view and respond to it. The interface would also help track previous events and their transactions. Apart from this, this interface would act as a calendar for students to view upcoming events and be notified of the ones they are interested in.

1.2 Classes of users:

1) Students: IIITD students who are looking to attend club events and want to get notified for the same in a structured manner.

2) Clubs: Any club at IIITD which is looking to structure their activities.

3) Admin: SA office, Finance department, Faculty coordinator, DoSA.

1.4 Definitions and Acronyms

| IIITD | Indraprastha Institute of Information Technology Delhi |
| --- | --- |
| SA | Student Affairs |
| DoSA | Department of Student Affairs |
| UI | User Interface |
|
-
 | Functionalities visible to everyone |
|
-
 | Functionalities visible to club coordinators and Admin |
|
-
 | Functionalities visible to Admin |
|
-
 | Dependencies |
| HP | High Priority |
| MP | Medium Priority |
| LP | Low Priority |

## **2. Overall Description:**

2.1 User Needs

1. Students -
  - Friendly UI
  - Reminders for Events
  - Concise details for the upcoming events organised by different clubs.

1. Club Coordinators -
  - Send an event proposal to the administration for approval .
  - After getting approval, convey relevant details about the event like location ,time,etc to students
  - Apply for reimbursements through the interface, by providing receipts for expenditure.
  - Get statistics related to attendance of students in events and history of past events.

1. Administrators -
  - A better interface than emails to view, approve events and communicate with coordinators.
  - View pending payments.
  - Monitor previous events and reimbursements.

2.2 Assumptions and Dependencies

- The administrators and the club coordinators would only need to contact each other regarding to be or already approved events.
- Notification will be sent only if the user is online.
- Users allow necessary permissions required for uploading, scanning or notification features.
- Google Sign In API ( ID:DP01 )
- Google Calendar API ( ID:DP02 )
- Chat System (ID:DP03)
- QR Code API (ID:DP04)

## **3. System Features and Requirements**

3.1 Functional Requirements

1. General -

- View and select events to be notified about.
- Permissions are assigned on GoogleID.

  - Propose upcoming events.

  - View previous events and payments.

1. Landing Page (ID:FR01)-

- Dependency: Google-Sign-in API ( ID:DP01 )

- Login using GoogleID: Users are asked to enter their gmail id and password. (HP)
- Using the Google sign in API if the credentials are authenticated then users move to the next page else an error message is shown. (HP)

1. Home Page (ID:FR02)-

- A section with the name of upcoming events in this week as a list where an event name will be a hyperlink to an event description page. (HP)
- List of clubs as a card which can be clicked on to visit the club page. (HP)

1. Club Page (ID:FR03)-
  - A header section displaying the name of the club, links to websites(if any) ,social media(if any) handles and contact details about club organisers. (HP)
  - List of upcoming events and /history of the past events. (HP)

- An Option to propose new events which would be sent to the admin for approval and after approval posted on the club page.(HP)
- A floating button to chat with the admin or club coordinator regarding proposals and payments.(LP)
- See statistics for attendance in previous events.(MP)

1. Events Page (ID:FR04)-

- Dependency:Google Calendar API ( ID:DP02 )

- Event Name
- Organizing Club.
- Provide a brief description.
- Location and Time.
- Poster/ Attachment.
- Notify me Button (HP)

- Button to open the Upload receipts window (MP)
- Approval status for event (LP)

  - Button to approve event (LP)

1. Notifications and chat system (ID:FR05)-

- Dependency: Chat system (ID:DP03)

- Reminder/updates for the event

- Event approval notification (MP)
- Payment completed notification (MP)
- Contact admin or club coordinator through chat (LP)

- Reimbursement payment notification (MP)
- Redirect to the particular event page from the notification (MP)

1. Attendance system (ID:FR06) -
  - Dependency:QR Code API ( ID:DP04 )

- Scan QR code present wherever event is being held and get confirmation (LP)

- See the number of attendees on a card in the event page (MP)

1. Payments system (ID:FR07)-

- Request for payment by uploading the scanned receipt from the event page (MP)
- Be able to see the receipts of the reimbursements (MP)

- Get notification for a payment request (MP)
- Share the receipt or screenshot as image to the club coordinators (MP)

1. Upload receipts page (ID:FR08) -

- Upload receipts to respective folders for club coordinators or admins (MP)

3.2 External Interface Requirements

1. G Sync - Using Google API&#39;s, event notifications will be added to the user&#39;s Google Calendar.
2. QR Code from OSA &amp; Camera - Generation of a unique QR code is required for each event for the purpose of taking attendance of students.
3. Authentication - Google&#39;s API will be used to enable logging into the interface through a Google Account.
4. React-chat-plugin from NPM - A chat communication interface between the administrators - club admins and students - club coordinators to facilitate further communication regarding event reimbursements, event feedbacks.

3.3 Performance Requirements

1. UI response time
  1. ID:PR01
  2. METRIC : Measurement obtained from 100 searches during testing
  3. MUST: less than 2 second, 95% of time
  4. WISH: less than 1 second, 100% of time
2. Database response time
  1. ID:PR02
  2. METRIC : Measurement obtained from 100 request made during testing
  3. MUST:less than 4 seconds, 95% of time
  4. WSH: less than 2 seconds, 100% of time

3.4 Design constraints

- Our web application is part of an umbrella ecosystem which is being created by other developers. To accommodate our application with others, we had to create a web application instead of native application.
- Stack:
  - Frontend - React JS
  - Backend - Django
  - Database - MongoDB
- QR code functionality integration:
  - Scan and read the QR code generated by the OSA app for each event.

3.5 Non-functional Requirements

1. Cross-platform - The interface needs to be accessible from all platforms and the functionality should be maintained across all platforms.
2. Interactive and Intuitive UI for all concerned parties.
3. Application should be easy to extend and integrate under the OSA application.

## **4. Initial WireFrames**

![](RackMultipart20210214-4-16smb6l_html_75be1d3f9444f365.png) ![](RackMultipart20210214-4-16smb6l_html_5e6688b7dd034d7a.png)

![](RackMultipart20210214-4-16smb6l_html_d9d6d2c08fa19402.png) ![](RackMultipart20210214-4-16smb6l_html_544a7426f4157ee2.png)

## **5. Weekly Plan over the course of 10 weeks**

Week 7 - Week 16 from the IIITD Academic calendar

| ID | Functionality | Week |
| --- | --- | --- |
| FR01 | Landing Page | 7 |
| FR02 | Home Page | 9 |
| FR03 | Club Page (Only HP) | 9 |
| FR04 | Events Page (Only HP) | 10 |
| FR05 | Notifications System | 10 |
| FR08 | Receipts Uploading Page | 10 |
| FR07 | Payment System | 12 |
| FR06 | Attendance System | 13 |
| FR06 | Attendance Statistics | 14 |
| FR04 | Events Approval | 14 |
| FR05 | Chat System | 15 |
| FR06 | Attendance using QR Code | 16 |

## **6. Acceptance Criteria**

1. Landing Page
2. Home Page
3. Club Page (Only HP)
4. Event Page
5. Propose event page
6. Notification system

## **7. Summary of Meetings with Users/Sponsors**

7.1 Meeting 1

Date - 30/01/2021

Attendees - Team Members, Ravi Bhasin(S), Jagadanand Dwivedi(S), [Tanuj Dabas](mailto:tanuj17118@iiitd.ac.in), Nikhil Chauhan, Sehaj Singh, Kartikeya Verma

Duration - 40 min

Main points of discussion: Scope of the project, Tools to be used,

An estimate of how much of the duration the sponsor/users spoke in the meeting: 20 min

An estimate of how much of the duration you/your team members spoke in the meeting: 20 min

7.2 Meeting 2

Date - 06/02/2021

Attendees - Team Members, Nikhil Chauhan, Sehaj Singh, Kartikeya Verma

Duration - 40 min

Main points of discussion: Frameworks to be used, Specifics of some requirements

An estimate of how much of the duration the sponsor/users spoke in the meeting: 20 min

An estimate of how much of the duration you/your team members spoke in the meeting: 20 min

7.3 Meeting 3

Date - 11/02/2021

Attendees - Team Members, Nikhil Chauhan, Sehaj Singh

Duration - 20 min

Main points of discussion: Specifics of some requirements, SRS Discussion

An estimate of how much of the duration the sponsor/users spoke in the meeting: 10 min

An estimate of how much of the duration you/your team members spoke in the meeting: 10 min