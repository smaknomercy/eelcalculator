import eel
sign_replacement_map = {
    '−': '-',
    '×': '*',
    '÷': '/',
    '^': '**',
    '∙': '.',
}
def exp_fix(exp):
    for k in sign_replacement_map:
        exp = exp.replace(k, sign_replacement_map[k])
    return exp
eel.init('web')
@eel.expose
def solve(exp):
    print('received data from JS:', exp)
    result = eval( exp_fix(exp) )
    print('result:', result)
    return result
eel.start('index.html', size=(500, 720))
