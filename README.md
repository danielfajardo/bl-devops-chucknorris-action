# Get custom Chuck Norris facts

This action prints and returns a joke for the GitHub actor. This was just developed for the Lemoncode DevOps bootcamp.

## Inputs

This action does not use any input.

## Outputs

### `joke`

The Chuck Norris' custom joke.

## Example usage
```yaml
name: Get custom Chuck Norris facts

on:
    issues:
        types:
            - labeled

jobs:
    add-comment-job:
        if: github.event.label.name == 'joke'
        runs-on: ubuntu-latest
        
        permissions:
            issues: write
        
        steps:
            - name: Get custom Chuck Norris joke
              id: joke
              uses: danielfajardo/bl-devops-chucknorris-action@1.0.0

            - name: Add comment in issue
              run: gh issue comment "$NUMBER" --body "$BODY"
              env:
                GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
                GH_REPO: ${{ github.repository }}
                NUMBER: ${{ github.event.issue.number }}
                BODY: ${{ steps.joke.outputs.joke }}
```