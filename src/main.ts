import {getInput, setFailed} from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    // eslint-disable-next-line no-console
    console.log('RUNNING OUR ACTION?')
    const context = github.context

    // eslint-disable-next-line no-console
    console.log('CONTEXT', context)

    // only works for PRs
    if (!context.payload.pull_request) return
    if (context.eventName !== 'opened') return

    const token = getInput('token', {required: true})
    const octokit = github.getOctokit(token)

    await octokit.rest.pulls.createReviewComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      pull_number: context.payload.pull_request.number,
      body: `Hey! You! Click [this link](https://uplift.ltd) to let us know that your PR is ready to review.`
    })
  } catch (error) {
    if (error instanceof Error) setFailed(error.message)
    // eslint-disable-next-line no-console
    console.error(error)
  }
}

run()
