import { getTaskTotalHours, getTaskTotalValue, getTotalHours, getTotalValue } from './task-service'

const _generateHeader = (project, tasks) => `
# Invoice

## Details

Generated in ${new Date().toLocaleString()}

- *Name:* ${project.name}
- *Description:* ${project.description}
- *Value per Hour:* ${project.valuePerHour}
- *Number of Requirements:* ${tasks.length} 

${_generateTasksTable(project, tasks)}
`

const _tableHeader = `
| Requirement | Discounted? | Total Hours | Total Value |
|:------------|:-----------:|:-----------:|------------:|`

const _tableFooter = (project, tasks) => `
|**Total:**| &nbsp; | ${getTotalHours(tasks)} hours | R$ ${getTotalValue(tasks, project.valuePerHour)} |
`

const _generateTasksTable = (project, tasks) => {
  let tasksRows = tasks.map(task => _generateTaskRow(project, task)).join("")
  let footer = _tableFooter(project, tasks)

  return _tableHeader.concat(tasksRows).concat(footer)
}

const _generateTaskRow = (project, task) => `
| ${task.title} | ${ task.discounted ? 'Yes' : 'No' } | ${getTaskTotalHours(task)} hours | R$ ${ task.discounted ? 0 : getTaskTotalValue(project.valuePerHour, task)} |` 

const _generateTaskBody = (project, task) => `
### ${task.title}
  - Description: ${task.description}
  - Discounted? ${task.discounted ? "Yes." : "No."}
  - Analysis: ${task.analysis_duration} hours
  - Testing: ${task.testing_duration} hours
  - Development: ${task.development_duration} hours

**Task Total Hours:** ${getTaskTotalHours(task)} hours

**Task Total Value:** R$ ${ task.discounted ? 0 : getTaskTotalValue(project.valuePerHour, task) }
`

const _generateBody = (project, tasks) => {
  let title = `## Requirements`
  let tasksAsString = tasks.map(task => _generateTaskBody(project, task)).join("")

  return title.concat(tasksAsString)
}

const _generateFooter = (project, tasks) => ``

const GenerateMarkdown = (project, tasks) => `
${_generateHeader(project, tasks)}
${_generateBody(project, tasks)}
${_generateFooter(project, tasks)}
`

export default GenerateMarkdown