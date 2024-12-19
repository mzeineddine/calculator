# calculator
Calculator
Welcome to the Calculator project! This calculator supports three different notations: prefix and postfix. The calculator is designed to handle basic arithmetic operations using these notations, making it a versatile tool for various computational tasks.

prefix notation example: + 3 / * 4 2 - 1 5
                       : 3 + (4 * 2) / (1 - 5)
                       : 1 
postfix notation example: 3 4 2 * 1 5 - / +
                        : 3 + (4 * 2) / (1 - 5)
                        : 1
prefix test cases:
    Basic Operations
    + 3 4 = 7 
    - 10 5 = 5 
    * 2 3 = 6 
    / 8 2 = 4

    Mixed Operations
    + 9 * 2 3 = 15
    - / 10 5 + 1 1 = 0
    * + 1 2 3 = 9
    / * 4 3 - 10 5 = 2.4

    Complex Expressions
    + * 3 + 2 1 4 = 13
    * + 4 5 + 6 7 = 117
    - + * 5 6 7 8 = 29
    + - 4 2 / 8 4 = 4

    Negative Numbers
    - 0 3 = -3
    + -5 + 2 3 = 0
    * -2 + 3 2 = -10
    / -8 4 = -2

    Single Operand
    5 = 5

postfix test cases:
    Basic Operations
    3 4 + = 7
    10 5 - = 5
    2 3 * = 6
    8 2 / = 4

    Mixed Operations
    9 2 3 * + = 15
    10 5 / 1 1 + - = 0
    1 2 + 3 * = 9
    4 3 * 10 5 - / = 2.4

    Complex Expressions
    3 2 1 + * 4 + = 13
    4 5 + 6 7 + * = 117
    5 6 * 7 + 8 - = 29
    4 2 - 8 4 / + = 4

    Negative Numbers
    0 3 - = -3
    -5 2 3 + + = 0
    -2 3 2 + * = -10
    -8 4 / = -2

    Single Operand
    5 = 5





