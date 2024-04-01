export const requestSyntax = `curl -X POST https://{SERVER_URL}/predictions/KcELECTRA \\
-H "Content-Type: application/json" \\
-d '{"text": "메시지 내용"}'`;
export const responseSyntax =
    `[
    "0.9997372031211853",
    "4.3749314500018954e-05",
    "9.505049092695117e-05",
    "0.0001239777193404734",
    "\\uc548\\ub155\\ud558\\uc138\\uc694"
]`;
export const serverURL = `https://{SERVER_URL}/predictions/KcELECTRA`;
