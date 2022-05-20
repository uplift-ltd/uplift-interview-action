import {getInput, setFailed} from '@actions/core'
import github from '@actions/github'

const TOKEN_NAME = 'GITHUB_TOKEN'

async function run(): Promise<void> {
  try {
    const context = github.context

    // only works for PRs
    if (!context.payload.pull_request) return
    if (context.eventName !== 'opened') return

    const token = getInput(TOKEN_NAME)
    const octokit = github.getOctokit(token)

    octokit.rest.pulls.createReviewComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      pull_number: context.payload.pull_request.number,
      body: `Hey! You! Click [this link](https://uplift.ltd) to let us know that your PR is ready to review.`
    })
  } catch (error) {
    if (error instanceof Error) setFailed(error.message)
  }
}

run()
