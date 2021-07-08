const {expect, test} = require('@oclif/test')
describe('goodmorning', () => {
  test
  .stdout()
  .command(['goodmorning'])
  .it('runs goodmorning', ctx => {
    expect(ctx.stdout).to.contain('Goodmorning in english')
  })

  test
  .stdout()
  .command(['goodmorning', '--lang', 'Igbo'])
  .it('runs goodmorning --lang Igbo', ctx => {
    expect(ctx.stdout).to.contain('Goodmorning in Igbo')
  })
})
