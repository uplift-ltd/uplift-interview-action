# Uplift Interview PR Action

Posts a comment to encourage the User to let us know when the PR is ready for review.

## Validate

You can now validate the action by referencing `./` in a workflow in your repo (see [test.yml](.github/workflows/test.yml))

```yaml
uses: ./
with:
  # optional body, otherwise will use the default
  body: 'Custom message for the PR'
```

## Usage:

After testing you can [create a v1 tag](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md) to reference the stable and latest V1 action

### TEST
