# Situation

- 경매 시스템을 만들고 있는 중
- 경매 상품이 end_date가 되어 경매가 종료되었을 때, 경매에 참여한 유저들에게 알림을 보내줘야 함.
- cron이나 scheduler library를 사용하기에는 event자체가 정기적이지 않고, 예약된 시간에만 특정 api를 사용하면 되었음.
- 방법을 찾던 중 **_ RabbitMQ _** 를 통해, 예약된 작업을 실행시킬 수 있다고 확인했음

# Problem

- 예약된 일을 예약된 시간에 실행시켜야 함.

# Solution

- 작업 대기열 또는 메시지 큐 시스템을 사용하여 예약된 작업을 처리할 수 있음.
- 대표적인 예로 AWS의 SQS, RabbitMQ, Apache Kafka 등이 있음.
- 예약된 작업을 작업 대기열에 추가하고, 컨슈머가 해당 작업을 처리하는 방식으로 작업 예약 및 처리를 구현할 수 있음.

# Study 내용

## RabbitMQ basic concept

- open-source and lightweight message broker which supports multiple messaging protocols
  - message broker :
  - messaging protocols :
