# InternBit-Assesment

Summary Document of Logging Strategy

The logging system captures all runtime errors including 1.Network Failures, 2.Invalid Response, 3.Unexpected Data formats. Each log entry is timestamped using ISO format and includes the error context with route/method and message. Logs are stored in logs.error.log(file in a Folder), enabling quick debugging and monitoring. This Strategy ensures visibility into hidden failures during real world API Integration.