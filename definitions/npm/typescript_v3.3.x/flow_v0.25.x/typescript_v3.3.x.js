declare module "typescript" {
  declare type MapLike<T> = {
    [index: string]: T
  };

  declare class SortedReadonlyArray<T> extends $ReadOnlyArray<T> {

    __sortedArrayBrand: any
  }

  declare class SortedArray<T> extends Array<T> {
    __sortedArrayBrand: any
  }

  declare class ReadonlyMap<T> {
    get(key: string): T | void,
    has(key: string): boolean,
    forEach(action: (value: T, key: string) => void): void,
    size: number,
    keys(): Iterator<string>,
    values(): Iterator<T>,
    entries(): Iterator<[string, T]>
  }

  declare class Map<T> extends ReadonlyMap<T> {
    set(key: string, value: T): this,
    delete(key: string): boolean,
    clear(): void
  }

  declare type Iterator<T> = {
    next():
      | {
          value: T,
          done: false
        }
      | {
          value: empty,
          done: true
        }
  };

  declare type Push<T> = {
    push(...values: T[]): void
  };

  declare type Path = string & {
    __pathBrand: any
  };
  declare type TextRange = {
    pos: number,
    end: number
  };

  declare type JsDocSyntaxKind =
    | SyntaxKind.EndOfFileToken
    | SyntaxKind.WhitespaceTrivia
    | SyntaxKind.AtToken
    | SyntaxKind.NewLineTrivia
    | SyntaxKind.AsteriskToken
    | SyntaxKind.OpenBraceToken
    | SyntaxKind.CloseBraceToken
    | SyntaxKind.LessThanToken
    | SyntaxKind.OpenBracketToken
    | SyntaxKind.CloseBracketToken
    | SyntaxKind.EqualsToken
    | SyntaxKind.CommaToken
    | SyntaxKind.DotToken
    | SyntaxKind.Identifier
    | SyntaxKind.NoSubstitutionTemplateLiteral
    | SyntaxKind.Unknown
    | KeywordSyntaxKind;
  declare type KeywordSyntaxKind =
    | SyntaxKind.AbstractKeyword
    | SyntaxKind.AnyKeyword
    | SyntaxKind.AsKeyword
    | SyntaxKind.BigIntKeyword
    | SyntaxKind.BooleanKeyword
    | SyntaxKind.BreakKeyword
    | SyntaxKind.CaseKeyword
    | SyntaxKind.CatchKeyword
    | SyntaxKind.ClassKeyword
    | SyntaxKind.ContinueKeyword
    | SyntaxKind.ConstKeyword
    | SyntaxKind.ConstructorKeyword
    | SyntaxKind.DebuggerKeyword
    | SyntaxKind.DeclareKeyword
    | SyntaxKind.DefaultKeyword
    | SyntaxKind.DeleteKeyword
    | SyntaxKind.DoKeyword
    | SyntaxKind.ElseKeyword
    | SyntaxKind.EnumKeyword
    | SyntaxKind.ExportKeyword
    | SyntaxKind.ExtendsKeyword
    | SyntaxKind.FalseKeyword
    | SyntaxKind.FinallyKeyword
    | SyntaxKind.ForKeyword
    | SyntaxKind.FromKeyword
    | SyntaxKind.FunctionKeyword
    | SyntaxKind.GetKeyword
    | SyntaxKind.IfKeyword
    | SyntaxKind.ImplementsKeyword
    | SyntaxKind.ImportKeyword
    | SyntaxKind.InKeyword
    | SyntaxKind.InferKeyword
    | SyntaxKind.InstanceOfKeyword
    | SyntaxKind.InterfaceKeyword
    | SyntaxKind.IsKeyword
    | SyntaxKind.KeyOfKeyword
    | SyntaxKind.LetKeyword
    | SyntaxKind.ModuleKeyword
    | SyntaxKind.NamespaceKeyword
    | SyntaxKind.NeverKeyword
    | SyntaxKind.NewKeyword
    | SyntaxKind.NullKeyword
    | SyntaxKind.NumberKeyword
    | SyntaxKind.ObjectKeyword
    | SyntaxKind.PackageKeyword
    | SyntaxKind.PrivateKeyword
    | SyntaxKind.ProtectedKeyword
    | SyntaxKind.PublicKeyword
    | SyntaxKind.ReadonlyKeyword
    | SyntaxKind.RequireKeyword
    | SyntaxKind.GlobalKeyword
    | SyntaxKind.ReturnKeyword
    | SyntaxKind.SetKeyword
    | SyntaxKind.StaticKeyword
    | SyntaxKind.StringKeyword
    | SyntaxKind.SuperKeyword
    | SyntaxKind.SwitchKeyword
    | SyntaxKind.SymbolKeyword
    | SyntaxKind.ThisKeyword
    | SyntaxKind.ThrowKeyword
    | SyntaxKind.TrueKeyword
    | SyntaxKind.TryKeyword
    | SyntaxKind.TypeKeyword
    | SyntaxKind.TypeOfKeyword
    | SyntaxKind.UndefinedKeyword
    | SyntaxKind.UniqueKeyword
    | SyntaxKind.UnknownKeyword
    | SyntaxKind.VarKeyword
    | SyntaxKind.VoidKeyword
    | SyntaxKind.WhileKeyword
    | SyntaxKind.WithKeyword
    | SyntaxKind.YieldKeyword
    | SyntaxKind.AsyncKeyword
    | SyntaxKind.AwaitKeyword
    | SyntaxKind.OfKeyword;
  declare type JsxTokenSyntaxKind =
    | SyntaxKind.LessThanSlashToken
    | SyntaxKind.EndOfFileToken
    | SyntaxKind.ConflictMarkerTrivia
    | SyntaxKind.JsxText
    | SyntaxKind.JsxTextAllWhiteSpaces
    | SyntaxKind.OpenBraceToken
    | SyntaxKind.LessThanToken;
  declare class SyntaxKind {
    static +Unknown: Class<SyntaxKind__Unknown> & SyntaxKind__Unknown & 0; // 0
    static +EndOfFileToken: Class<SyntaxKind__EndOfFileToken> &
      SyntaxKind__EndOfFileToken &
      1; // 1
    static +SingleLineCommentTrivia: Class<SyntaxKind__SingleLineCommentTrivia> &
      SyntaxKind__SingleLineCommentTrivia &
      2; // 2
    static +MultiLineCommentTrivia: Class<SyntaxKind__MultiLineCommentTrivia> &
      SyntaxKind__MultiLineCommentTrivia &
      3; // 3
    static +NewLineTrivia: Class<SyntaxKind__NewLineTrivia> &
      SyntaxKind__NewLineTrivia &
      4; // 4
    static +WhitespaceTrivia: Class<SyntaxKind__WhitespaceTrivia> &
      SyntaxKind__WhitespaceTrivia &
      5; // 5
    static +ShebangTrivia: Class<SyntaxKind__ShebangTrivia> &
      SyntaxKind__ShebangTrivia &
      6; // 6
    static +ConflictMarkerTrivia: Class<SyntaxKind__ConflictMarkerTrivia> &
      SyntaxKind__ConflictMarkerTrivia &
      7; // 7
    static +NumericLiteral: Class<SyntaxKind__NumericLiteral> &
      SyntaxKind__NumericLiteral &
      8; // 8
    static +BigIntLiteral: Class<SyntaxKind__BigIntLiteral> &
      SyntaxKind__BigIntLiteral &
      9; // 9
    static +StringLiteral: Class<SyntaxKind__StringLiteral> &
      SyntaxKind__StringLiteral &
      10; // 10
    static +JsxText: Class<SyntaxKind__JsxText> & SyntaxKind__JsxText & 11; // 11
    static +JsxTextAllWhiteSpaces: Class<SyntaxKind__JsxTextAllWhiteSpaces> &
      SyntaxKind__JsxTextAllWhiteSpaces &
      12; // 12
    static +RegularExpressionLiteral: Class<SyntaxKind__RegularExpressionLiteral> &
      SyntaxKind__RegularExpressionLiteral &
      13; // 13
    static +NoSubstitutionTemplateLiteral: Class<SyntaxKind__NoSubstitutionTemplateLiteral> &
      SyntaxKind__NoSubstitutionTemplateLiteral &
      14; // 14
    static +TemplateHead: Class<SyntaxKind__TemplateHead> &
      SyntaxKind__TemplateHead &
      15; // 15
    static +TemplateMiddle: Class<SyntaxKind__TemplateMiddle> &
      SyntaxKind__TemplateMiddle &
      16; // 16
    static +TemplateTail: Class<SyntaxKind__TemplateTail> &
      SyntaxKind__TemplateTail &
      17; // 17
    static +OpenBraceToken: Class<SyntaxKind__OpenBraceToken> &
      SyntaxKind__OpenBraceToken &
      18; // 18
    static +CloseBraceToken: Class<SyntaxKind__CloseBraceToken> &
      SyntaxKind__CloseBraceToken &
      19; // 19
    static +OpenParenToken: Class<SyntaxKind__OpenParenToken> &
      SyntaxKind__OpenParenToken &
      20; // 20
    static +CloseParenToken: Class<SyntaxKind__CloseParenToken> &
      SyntaxKind__CloseParenToken &
      21; // 21
    static +OpenBracketToken: Class<SyntaxKind__OpenBracketToken> &
      SyntaxKind__OpenBracketToken &
      22; // 22
    static +CloseBracketToken: Class<SyntaxKind__CloseBracketToken> &
      SyntaxKind__CloseBracketToken &
      23; // 23
    static +DotToken: Class<SyntaxKind__DotToken> & SyntaxKind__DotToken & 24; // 24
    static +DotDotDotToken: Class<SyntaxKind__DotDotDotToken> &
      SyntaxKind__DotDotDotToken &
      25; // 25
    static +SemicolonToken: Class<SyntaxKind__SemicolonToken> &
      SyntaxKind__SemicolonToken &
      26; // 26
    static +CommaToken: Class<SyntaxKind__CommaToken> &
      SyntaxKind__CommaToken &
      27; // 27
    static +LessThanToken: Class<SyntaxKind__LessThanToken> &
      SyntaxKind__LessThanToken &
      28; // 28
    static +LessThanSlashToken: Class<SyntaxKind__LessThanSlashToken> &
      SyntaxKind__LessThanSlashToken &
      29; // 29
    static +GreaterThanToken: Class<SyntaxKind__GreaterThanToken> &
      SyntaxKind__GreaterThanToken &
      30; // 30
    static +LessThanEqualsToken: Class<SyntaxKind__LessThanEqualsToken> &
      SyntaxKind__LessThanEqualsToken &
      31; // 31
    static +GreaterThanEqualsToken: Class<SyntaxKind__GreaterThanEqualsToken> &
      SyntaxKind__GreaterThanEqualsToken &
      32; // 32
    static +EqualsEqualsToken: Class<SyntaxKind__EqualsEqualsToken> &
      SyntaxKind__EqualsEqualsToken &
      33; // 33
    static +ExclamationEqualsToken: Class<SyntaxKind__ExclamationEqualsToken> &
      SyntaxKind__ExclamationEqualsToken &
      34; // 34
    static +EqualsEqualsEqualsToken: Class<SyntaxKind__EqualsEqualsEqualsToken> &
      SyntaxKind__EqualsEqualsEqualsToken &
      35; // 35
    static +ExclamationEqualsEqualsToken: Class<SyntaxKind__ExclamationEqualsEqualsToken> &
      SyntaxKind__ExclamationEqualsEqualsToken &
      36; // 36
    static +EqualsGreaterThanToken: Class<SyntaxKind__EqualsGreaterThanToken> &
      SyntaxKind__EqualsGreaterThanToken &
      37; // 37
    static +PlusToken: Class<SyntaxKind__PlusToken> &
      SyntaxKind__PlusToken &
      38; // 38
    static +MinusToken: Class<SyntaxKind__MinusToken> &
      SyntaxKind__MinusToken &
      39; // 39
    static +AsteriskToken: Class<SyntaxKind__AsteriskToken> &
      SyntaxKind__AsteriskToken &
      40; // 40
    static +AsteriskAsteriskToken: Class<SyntaxKind__AsteriskAsteriskToken> &
      SyntaxKind__AsteriskAsteriskToken &
      41; // 41
    static +SlashToken: Class<SyntaxKind__SlashToken> &
      SyntaxKind__SlashToken &
      42; // 42
    static +PercentToken: Class<SyntaxKind__PercentToken> &
      SyntaxKind__PercentToken &
      43; // 43
    static +PlusPlusToken: Class<SyntaxKind__PlusPlusToken> &
      SyntaxKind__PlusPlusToken &
      44; // 44
    static +MinusMinusToken: Class<SyntaxKind__MinusMinusToken> &
      SyntaxKind__MinusMinusToken &
      45; // 45
    static +LessThanLessThanToken: Class<SyntaxKind__LessThanLessThanToken> &
      SyntaxKind__LessThanLessThanToken &
      46; // 46
    static +GreaterThanGreaterThanToken: Class<SyntaxKind__GreaterThanGreaterThanToken> &
      SyntaxKind__GreaterThanGreaterThanToken &
      47; // 47
    static +GreaterThanGreaterThanGreaterThanToken: Class<SyntaxKind__GreaterThanGreaterThanGreaterThanToken> &
      SyntaxKind__GreaterThanGreaterThanGreaterThanToken &
      48; // 48
    static +AmpersandToken: Class<SyntaxKind__AmpersandToken> &
      SyntaxKind__AmpersandToken &
      49; // 49
    static +BarToken: Class<SyntaxKind__BarToken> & SyntaxKind__BarToken & 50; // 50
    static +CaretToken: Class<SyntaxKind__CaretToken> &
      SyntaxKind__CaretToken &
      51; // 51
    static +ExclamationToken: Class<SyntaxKind__ExclamationToken> &
      SyntaxKind__ExclamationToken &
      52; // 52
    static +TildeToken: Class<SyntaxKind__TildeToken> &
      SyntaxKind__TildeToken &
      53; // 53
    static +AmpersandAmpersandToken: Class<SyntaxKind__AmpersandAmpersandToken> &
      SyntaxKind__AmpersandAmpersandToken &
      54; // 54
    static +BarBarToken: Class<SyntaxKind__BarBarToken> &
      SyntaxKind__BarBarToken &
      55; // 55
    static +QuestionToken: Class<SyntaxKind__QuestionToken> &
      SyntaxKind__QuestionToken &
      56; // 56
    static +ColonToken: Class<SyntaxKind__ColonToken> &
      SyntaxKind__ColonToken &
      57; // 57
    static +AtToken: Class<SyntaxKind__AtToken> & SyntaxKind__AtToken & 58; // 58
    static +EqualsToken: Class<SyntaxKind__EqualsToken> &
      SyntaxKind__EqualsToken &
      59; // 59
    static +PlusEqualsToken: Class<SyntaxKind__PlusEqualsToken> &
      SyntaxKind__PlusEqualsToken &
      60; // 60
    static +MinusEqualsToken: Class<SyntaxKind__MinusEqualsToken> &
      SyntaxKind__MinusEqualsToken &
      61; // 61
    static +AsteriskEqualsToken: Class<SyntaxKind__AsteriskEqualsToken> &
      SyntaxKind__AsteriskEqualsToken &
      62; // 62
    static +AsteriskAsteriskEqualsToken: Class<SyntaxKind__AsteriskAsteriskEqualsToken> &
      SyntaxKind__AsteriskAsteriskEqualsToken &
      63; // 63
    static +SlashEqualsToken: Class<SyntaxKind__SlashEqualsToken> &
      SyntaxKind__SlashEqualsToken &
      64; // 64
    static +PercentEqualsToken: Class<SyntaxKind__PercentEqualsToken> &
      SyntaxKind__PercentEqualsToken &
      65; // 65
    static +LessThanLessThanEqualsToken: Class<SyntaxKind__LessThanLessThanEqualsToken> &
      SyntaxKind__LessThanLessThanEqualsToken &
      66; // 66
    static +GreaterThanGreaterThanEqualsToken: Class<SyntaxKind__GreaterThanGreaterThanEqualsToken> &
      SyntaxKind__GreaterThanGreaterThanEqualsToken &
      67; // 67
    static +GreaterThanGreaterThanGreaterThanEqualsToken: Class<SyntaxKind__GreaterThanGreaterThanGreaterThanEqualsToken> &
      SyntaxKind__GreaterThanGreaterThanGreaterThanEqualsToken &
      68; // 68
    static +AmpersandEqualsToken: Class<SyntaxKind__AmpersandEqualsToken> &
      SyntaxKind__AmpersandEqualsToken &
      69; // 69
    static +BarEqualsToken: Class<SyntaxKind__BarEqualsToken> &
      SyntaxKind__BarEqualsToken &
      70; // 70
    static +CaretEqualsToken: Class<SyntaxKind__CaretEqualsToken> &
      SyntaxKind__CaretEqualsToken &
      71; // 71
    static +Identifier: Class<SyntaxKind__Identifier> &
      SyntaxKind__Identifier &
      72; // 72
    static +BreakKeyword: Class<SyntaxKind__BreakKeyword> &
      SyntaxKind__BreakKeyword &
      73; // 73
    static +CaseKeyword: Class<SyntaxKind__CaseKeyword> &
      SyntaxKind__CaseKeyword &
      74; // 74
    static +CatchKeyword: Class<SyntaxKind__CatchKeyword> &
      SyntaxKind__CatchKeyword &
      75; // 75
    static +ClassKeyword: Class<SyntaxKind__ClassKeyword> &
      SyntaxKind__ClassKeyword &
      76; // 76
    static +ConstKeyword: Class<SyntaxKind__ConstKeyword> &
      SyntaxKind__ConstKeyword &
      77; // 77
    static +ContinueKeyword: Class<SyntaxKind__ContinueKeyword> &
      SyntaxKind__ContinueKeyword &
      78; // 78
    static +DebuggerKeyword: Class<SyntaxKind__DebuggerKeyword> &
      SyntaxKind__DebuggerKeyword &
      79; // 79
    static +DefaultKeyword: Class<SyntaxKind__DefaultKeyword> &
      SyntaxKind__DefaultKeyword &
      80; // 80
    static +DeleteKeyword: Class<SyntaxKind__DeleteKeyword> &
      SyntaxKind__DeleteKeyword &
      81; // 81
    static +DoKeyword: Class<SyntaxKind__DoKeyword> &
      SyntaxKind__DoKeyword &
      82; // 82
    static +ElseKeyword: Class<SyntaxKind__ElseKeyword> &
      SyntaxKind__ElseKeyword &
      83; // 83
    static +EnumKeyword: Class<SyntaxKind__EnumKeyword> &
      SyntaxKind__EnumKeyword &
      84; // 84
    static +ExportKeyword: Class<SyntaxKind__ExportKeyword> &
      SyntaxKind__ExportKeyword &
      85; // 85
    static +ExtendsKeyword: Class<SyntaxKind__ExtendsKeyword> &
      SyntaxKind__ExtendsKeyword &
      86; // 86
    static +FalseKeyword: Class<SyntaxKind__FalseKeyword> &
      SyntaxKind__FalseKeyword &
      87; // 87
    static +FinallyKeyword: Class<SyntaxKind__FinallyKeyword> &
      SyntaxKind__FinallyKeyword &
      88; // 88
    static +ForKeyword: Class<SyntaxKind__ForKeyword> &
      SyntaxKind__ForKeyword &
      89; // 89
    static +FunctionKeyword: Class<SyntaxKind__FunctionKeyword> &
      SyntaxKind__FunctionKeyword &
      90; // 90
    static +IfKeyword: Class<SyntaxKind__IfKeyword> &
      SyntaxKind__IfKeyword &
      91; // 91
    static +ImportKeyword: Class<SyntaxKind__ImportKeyword> &
      SyntaxKind__ImportKeyword &
      92; // 92
    static +InKeyword: Class<SyntaxKind__InKeyword> &
      SyntaxKind__InKeyword &
      93; // 93
    static +InstanceOfKeyword: Class<SyntaxKind__InstanceOfKeyword> &
      SyntaxKind__InstanceOfKeyword &
      94; // 94
    static +NewKeyword: Class<SyntaxKind__NewKeyword> &
      SyntaxKind__NewKeyword &
      95; // 95
    static +NullKeyword: Class<SyntaxKind__NullKeyword> &
      SyntaxKind__NullKeyword &
      96; // 96
    static +ReturnKeyword: Class<SyntaxKind__ReturnKeyword> &
      SyntaxKind__ReturnKeyword &
      97; // 97
    static +SuperKeyword: Class<SyntaxKind__SuperKeyword> &
      SyntaxKind__SuperKeyword &
      98; // 98
    static +SwitchKeyword: Class<SyntaxKind__SwitchKeyword> &
      SyntaxKind__SwitchKeyword &
      99; // 99
    static +ThisKeyword: Class<SyntaxKind__ThisKeyword> &
      SyntaxKind__ThisKeyword &
      100; // 100
    static +ThrowKeyword: Class<SyntaxKind__ThrowKeyword> &
      SyntaxKind__ThrowKeyword &
      101; // 101
    static +TrueKeyword: Class<SyntaxKind__TrueKeyword> &
      SyntaxKind__TrueKeyword &
      102; // 102
    static +TryKeyword: Class<SyntaxKind__TryKeyword> &
      SyntaxKind__TryKeyword &
      103; // 103
    static +TypeOfKeyword: Class<SyntaxKind__TypeOfKeyword> &
      SyntaxKind__TypeOfKeyword &
      104; // 104
    static +VarKeyword: Class<SyntaxKind__VarKeyword> &
      SyntaxKind__VarKeyword &
      105; // 105
    static +VoidKeyword: Class<SyntaxKind__VoidKeyword> &
      SyntaxKind__VoidKeyword &
      106; // 106
    static +WhileKeyword: Class<SyntaxKind__WhileKeyword> &
      SyntaxKind__WhileKeyword &
      107; // 107
    static +WithKeyword: Class<SyntaxKind__WithKeyword> &
      SyntaxKind__WithKeyword &
      108; // 108
    static +ImplementsKeyword: Class<SyntaxKind__ImplementsKeyword> &
      SyntaxKind__ImplementsKeyword &
      109; // 109
    static +InterfaceKeyword: Class<SyntaxKind__InterfaceKeyword> &
      SyntaxKind__InterfaceKeyword &
      110; // 110
    static +LetKeyword: Class<SyntaxKind__LetKeyword> &
      SyntaxKind__LetKeyword &
      111; // 111
    static +PackageKeyword: Class<SyntaxKind__PackageKeyword> &
      SyntaxKind__PackageKeyword &
      112; // 112
    static +PrivateKeyword: Class<SyntaxKind__PrivateKeyword> &
      SyntaxKind__PrivateKeyword &
      113; // 113
    static +ProtectedKeyword: Class<SyntaxKind__ProtectedKeyword> &
      SyntaxKind__ProtectedKeyword &
      114; // 114
    static +PublicKeyword: Class<SyntaxKind__PublicKeyword> &
      SyntaxKind__PublicKeyword &
      115; // 115
    static +StaticKeyword: Class<SyntaxKind__StaticKeyword> &
      SyntaxKind__StaticKeyword &
      116; // 116
    static +YieldKeyword: Class<SyntaxKind__YieldKeyword> &
      SyntaxKind__YieldKeyword &
      117; // 117
    static +AbstractKeyword: Class<SyntaxKind__AbstractKeyword> &
      SyntaxKind__AbstractKeyword &
      118; // 118
    static +AsKeyword: Class<SyntaxKind__AsKeyword> &
      SyntaxKind__AsKeyword &
      119; // 119
    static +AnyKeyword: Class<SyntaxKind__AnyKeyword> &
      SyntaxKind__AnyKeyword &
      120; // 120
    static +AsyncKeyword: Class<SyntaxKind__AsyncKeyword> &
      SyntaxKind__AsyncKeyword &
      121; // 121
    static +AwaitKeyword: Class<SyntaxKind__AwaitKeyword> &
      SyntaxKind__AwaitKeyword &
      122; // 122
    static +BooleanKeyword: Class<SyntaxKind__BooleanKeyword> &
      SyntaxKind__BooleanKeyword &
      123; // 123
    static +ConstructorKeyword: Class<SyntaxKind__ConstructorKeyword> &
      SyntaxKind__ConstructorKeyword &
      124; // 124
    static +DeclareKeyword: Class<SyntaxKind__DeclareKeyword> &
      SyntaxKind__DeclareKeyword &
      125; // 125
    static +GetKeyword: Class<SyntaxKind__GetKeyword> &
      SyntaxKind__GetKeyword &
      126; // 126
    static +InferKeyword: Class<SyntaxKind__InferKeyword> &
      SyntaxKind__InferKeyword &
      127; // 127
    static +IsKeyword: Class<SyntaxKind__IsKeyword> &
      SyntaxKind__IsKeyword &
      128; // 128
    static +KeyOfKeyword: Class<SyntaxKind__KeyOfKeyword> &
      SyntaxKind__KeyOfKeyword &
      129; // 129
    static +ModuleKeyword: Class<SyntaxKind__ModuleKeyword> &
      SyntaxKind__ModuleKeyword &
      130; // 130
    static +NamespaceKeyword: Class<SyntaxKind__NamespaceKeyword> &
      SyntaxKind__NamespaceKeyword &
      131; // 131
    static +NeverKeyword: Class<SyntaxKind__NeverKeyword> &
      SyntaxKind__NeverKeyword &
      132; // 132
    static +ReadonlyKeyword: Class<SyntaxKind__ReadonlyKeyword> &
      SyntaxKind__ReadonlyKeyword &
      133; // 133
    static +RequireKeyword: Class<SyntaxKind__RequireKeyword> &
      SyntaxKind__RequireKeyword &
      134; // 134
    static +NumberKeyword: Class<SyntaxKind__NumberKeyword> &
      SyntaxKind__NumberKeyword &
      135; // 135
    static +ObjectKeyword: Class<SyntaxKind__ObjectKeyword> &
      SyntaxKind__ObjectKeyword &
      136; // 136
    static +SetKeyword: Class<SyntaxKind__SetKeyword> &
      SyntaxKind__SetKeyword &
      137; // 137
    static +StringKeyword: Class<SyntaxKind__StringKeyword> &
      SyntaxKind__StringKeyword &
      138; // 138
    static +SymbolKeyword: Class<SyntaxKind__SymbolKeyword> &
      SyntaxKind__SymbolKeyword &
      139; // 139
    static +TypeKeyword: Class<SyntaxKind__TypeKeyword> &
      SyntaxKind__TypeKeyword &
      140; // 140
    static +UndefinedKeyword: Class<SyntaxKind__UndefinedKeyword> &
      SyntaxKind__UndefinedKeyword &
      141; // 141
    static +UniqueKeyword: Class<SyntaxKind__UniqueKeyword> &
      SyntaxKind__UniqueKeyword &
      142; // 142
    static +UnknownKeyword: Class<SyntaxKind__UnknownKeyword> &
      SyntaxKind__UnknownKeyword &
      143; // 143
    static +FromKeyword: Class<SyntaxKind__FromKeyword> &
      SyntaxKind__FromKeyword &
      144; // 144
    static +GlobalKeyword: Class<SyntaxKind__GlobalKeyword> &
      SyntaxKind__GlobalKeyword &
      145; // 145
    static +BigIntKeyword: Class<SyntaxKind__BigIntKeyword> &
      SyntaxKind__BigIntKeyword &
      146; // 146
    static +OfKeyword: Class<SyntaxKind__OfKeyword> &
      SyntaxKind__OfKeyword &
      147; // 147
    static +QualifiedName: Class<SyntaxKind__QualifiedName> &
      SyntaxKind__QualifiedName &
      148; // 148
    static +ComputedPropertyName: Class<SyntaxKind__ComputedPropertyName> &
      SyntaxKind__ComputedPropertyName &
      149; // 149
    static +TypeParameter: Class<SyntaxKind__TypeParameter> &
      SyntaxKind__TypeParameter &
      150; // 150
    static +Parameter: Class<SyntaxKind__Parameter> &
      SyntaxKind__Parameter &
      151; // 151
    static +Decorator: Class<SyntaxKind__Decorator> &
      SyntaxKind__Decorator &
      152; // 152
    static +PropertySignature: Class<SyntaxKind__PropertySignature> &
      SyntaxKind__PropertySignature &
      153; // 153
    static +PropertyDeclaration: Class<SyntaxKind__PropertyDeclaration> &
      SyntaxKind__PropertyDeclaration &
      154; // 154
    static +MethodSignature: Class<SyntaxKind__MethodSignature> &
      SyntaxKind__MethodSignature &
      155; // 155
    static +MethodDeclaration: Class<SyntaxKind__MethodDeclaration> &
      SyntaxKind__MethodDeclaration &
      156; // 156
    static +Constructor: Class<SyntaxKind__Constructor> &
      SyntaxKind__Constructor &
      157; // 157
    static +GetAccessor: Class<SyntaxKind__GetAccessor> &
      SyntaxKind__GetAccessor &
      158; // 158
    static +SetAccessor: Class<SyntaxKind__SetAccessor> &
      SyntaxKind__SetAccessor &
      159; // 159
    static +CallSignature: Class<SyntaxKind__CallSignature> &
      SyntaxKind__CallSignature &
      160; // 160
    static +ConstructSignature: Class<SyntaxKind__ConstructSignature> &
      SyntaxKind__ConstructSignature &
      161; // 161
    static +IndexSignature: Class<SyntaxKind__IndexSignature> &
      SyntaxKind__IndexSignature &
      162; // 162
    static +TypePredicate: Class<SyntaxKind__TypePredicate> &
      SyntaxKind__TypePredicate &
      163; // 163
    static +TypeReference: Class<SyntaxKind__TypeReference> &
      SyntaxKind__TypeReference &
      164; // 164
    static +FunctionType: Class<SyntaxKind__FunctionType> &
      SyntaxKind__FunctionType &
      165; // 165
    static +ConstructorType: Class<SyntaxKind__ConstructorType> &
      SyntaxKind__ConstructorType &
      166; // 166
    static +TypeQuery: Class<SyntaxKind__TypeQuery> &
      SyntaxKind__TypeQuery &
      167; // 167
    static +TypeLiteral: Class<SyntaxKind__TypeLiteral> &
      SyntaxKind__TypeLiteral &
      168; // 168
    static +ArrayType: Class<SyntaxKind__ArrayType> &
      SyntaxKind__ArrayType &
      169; // 169
    static +TupleType: Class<SyntaxKind__TupleType> &
      SyntaxKind__TupleType &
      170; // 170
    static +OptionalType: Class<SyntaxKind__OptionalType> &
      SyntaxKind__OptionalType &
      171; // 171
    static +RestType: Class<SyntaxKind__RestType> & SyntaxKind__RestType & 172; // 172
    static +UnionType: Class<SyntaxKind__UnionType> &
      SyntaxKind__UnionType &
      173; // 173
    static +IntersectionType: Class<SyntaxKind__IntersectionType> &
      SyntaxKind__IntersectionType &
      174; // 174
    static +ConditionalType: Class<SyntaxKind__ConditionalType> &
      SyntaxKind__ConditionalType &
      175; // 175
    static +InferType: Class<SyntaxKind__InferType> &
      SyntaxKind__InferType &
      176; // 176
    static +ParenthesizedType: Class<SyntaxKind__ParenthesizedType> &
      SyntaxKind__ParenthesizedType &
      177; // 177
    static +ThisType: Class<SyntaxKind__ThisType> & SyntaxKind__ThisType & 178; // 178
    static +TypeOperator: Class<SyntaxKind__TypeOperator> &
      SyntaxKind__TypeOperator &
      179; // 179
    static +IndexedAccessType: Class<SyntaxKind__IndexedAccessType> &
      SyntaxKind__IndexedAccessType &
      180; // 180
    static +MappedType: Class<SyntaxKind__MappedType> &
      SyntaxKind__MappedType &
      181; // 181
    static +LiteralType: Class<SyntaxKind__LiteralType> &
      SyntaxKind__LiteralType &
      182; // 182
    static +ImportType: Class<SyntaxKind__ImportType> &
      SyntaxKind__ImportType &
      183; // 183
    static +ObjectBindingPattern: Class<SyntaxKind__ObjectBindingPattern> &
      SyntaxKind__ObjectBindingPattern &
      184; // 184
    static +ArrayBindingPattern: Class<SyntaxKind__ArrayBindingPattern> &
      SyntaxKind__ArrayBindingPattern &
      185; // 185
    static +BindingElement: Class<SyntaxKind__BindingElement> &
      SyntaxKind__BindingElement &
      186; // 186
    static +ArrayLiteralExpression: Class<SyntaxKind__ArrayLiteralExpression> &
      SyntaxKind__ArrayLiteralExpression &
      187; // 187
    static +ObjectLiteralExpression: Class<SyntaxKind__ObjectLiteralExpression> &
      SyntaxKind__ObjectLiteralExpression &
      188; // 188
    static +PropertyAccessExpression: Class<SyntaxKind__PropertyAccessExpression> &
      SyntaxKind__PropertyAccessExpression &
      189; // 189
    static +ElementAccessExpression: Class<SyntaxKind__ElementAccessExpression> &
      SyntaxKind__ElementAccessExpression &
      190; // 190
    static +CallExpression: Class<SyntaxKind__CallExpression> &
      SyntaxKind__CallExpression &
      191; // 191
    static +NewExpression: Class<SyntaxKind__NewExpression> &
      SyntaxKind__NewExpression &
      192; // 192
    static +TaggedTemplateExpression: Class<SyntaxKind__TaggedTemplateExpression> &
      SyntaxKind__TaggedTemplateExpression &
      193; // 193
    static +TypeAssertionExpression: Class<SyntaxKind__TypeAssertionExpression> &
      SyntaxKind__TypeAssertionExpression &
      194; // 194
    static +ParenthesizedExpression: Class<SyntaxKind__ParenthesizedExpression> &
      SyntaxKind__ParenthesizedExpression &
      195; // 195
    static +FunctionExpression: Class<SyntaxKind__FunctionExpression> &
      SyntaxKind__FunctionExpression &
      196; // 196
    static +ArrowFunction: Class<SyntaxKind__ArrowFunction> &
      SyntaxKind__ArrowFunction &
      197; // 197
    static +DeleteExpression: Class<SyntaxKind__DeleteExpression> &
      SyntaxKind__DeleteExpression &
      198; // 198
    static +TypeOfExpression: Class<SyntaxKind__TypeOfExpression> &
      SyntaxKind__TypeOfExpression &
      199; // 199
    static +VoidExpression: Class<SyntaxKind__VoidExpression> &
      SyntaxKind__VoidExpression &
      200; // 200
    static +AwaitExpression: Class<SyntaxKind__AwaitExpression> &
      SyntaxKind__AwaitExpression &
      201; // 201
    static +PrefixUnaryExpression: Class<SyntaxKind__PrefixUnaryExpression> &
      SyntaxKind__PrefixUnaryExpression &
      202; // 202
    static +PostfixUnaryExpression: Class<SyntaxKind__PostfixUnaryExpression> &
      SyntaxKind__PostfixUnaryExpression &
      203; // 203
    static +BinaryExpression: Class<SyntaxKind__BinaryExpression> &
      SyntaxKind__BinaryExpression &
      204; // 204
    static +ConditionalExpression: Class<SyntaxKind__ConditionalExpression> &
      SyntaxKind__ConditionalExpression &
      205; // 205
    static +TemplateExpression: Class<SyntaxKind__TemplateExpression> &
      SyntaxKind__TemplateExpression &
      206; // 206
    static +YieldExpression: Class<SyntaxKind__YieldExpression> &
      SyntaxKind__YieldExpression &
      207; // 207
    static +SpreadElement: Class<SyntaxKind__SpreadElement> &
      SyntaxKind__SpreadElement &
      208; // 208
    static +ClassExpression: Class<SyntaxKind__ClassExpression> &
      SyntaxKind__ClassExpression &
      209; // 209
    static +OmittedExpression: Class<SyntaxKind__OmittedExpression> &
      SyntaxKind__OmittedExpression &
      210; // 210
    static +ExpressionWithTypeArguments: Class<SyntaxKind__ExpressionWithTypeArguments> &
      SyntaxKind__ExpressionWithTypeArguments &
      211; // 211
    static +AsExpression: Class<SyntaxKind__AsExpression> &
      SyntaxKind__AsExpression &
      212; // 212
    static +NonNullExpression: Class<SyntaxKind__NonNullExpression> &
      SyntaxKind__NonNullExpression &
      213; // 213
    static +MetaProperty: Class<SyntaxKind__MetaProperty> &
      SyntaxKind__MetaProperty &
      214; // 214
    static +SyntheticExpression: Class<SyntaxKind__SyntheticExpression> &
      SyntaxKind__SyntheticExpression &
      215; // 215
    static +TemplateSpan: Class<SyntaxKind__TemplateSpan> &
      SyntaxKind__TemplateSpan &
      216; // 216
    static +SemicolonClassElement: Class<SyntaxKind__SemicolonClassElement> &
      SyntaxKind__SemicolonClassElement &
      217; // 217
    static +Block: Class<SyntaxKind__Block> & SyntaxKind__Block & 218; // 218
    static +VariableStatement: Class<SyntaxKind__VariableStatement> &
      SyntaxKind__VariableStatement &
      219; // 219
    static +EmptyStatement: Class<SyntaxKind__EmptyStatement> &
      SyntaxKind__EmptyStatement &
      220; // 220
    static +ExpressionStatement: Class<SyntaxKind__ExpressionStatement> &
      SyntaxKind__ExpressionStatement &
      221; // 221
    static +IfStatement: Class<SyntaxKind__IfStatement> &
      SyntaxKind__IfStatement &
      222; // 222
    static +DoStatement: Class<SyntaxKind__DoStatement> &
      SyntaxKind__DoStatement &
      223; // 223
    static +WhileStatement: Class<SyntaxKind__WhileStatement> &
      SyntaxKind__WhileStatement &
      224; // 224
    static +ForStatement: Class<SyntaxKind__ForStatement> &
      SyntaxKind__ForStatement &
      225; // 225
    static +ForInStatement: Class<SyntaxKind__ForInStatement> &
      SyntaxKind__ForInStatement &
      226; // 226
    static +ForOfStatement: Class<SyntaxKind__ForOfStatement> &
      SyntaxKind__ForOfStatement &
      227; // 227
    static +ContinueStatement: Class<SyntaxKind__ContinueStatement> &
      SyntaxKind__ContinueStatement &
      228; // 228
    static +BreakStatement: Class<SyntaxKind__BreakStatement> &
      SyntaxKind__BreakStatement &
      229; // 229
    static +ReturnStatement: Class<SyntaxKind__ReturnStatement> &
      SyntaxKind__ReturnStatement &
      230; // 230
    static +WithStatement: Class<SyntaxKind__WithStatement> &
      SyntaxKind__WithStatement &
      231; // 231
    static +SwitchStatement: Class<SyntaxKind__SwitchStatement> &
      SyntaxKind__SwitchStatement &
      232; // 232
    static +LabeledStatement: Class<SyntaxKind__LabeledStatement> &
      SyntaxKind__LabeledStatement &
      233; // 233
    static +ThrowStatement: Class<SyntaxKind__ThrowStatement> &
      SyntaxKind__ThrowStatement &
      234; // 234
    static +TryStatement: Class<SyntaxKind__TryStatement> &
      SyntaxKind__TryStatement &
      235; // 235
    static +DebuggerStatement: Class<SyntaxKind__DebuggerStatement> &
      SyntaxKind__DebuggerStatement &
      236; // 236
    static +VariableDeclaration: Class<SyntaxKind__VariableDeclaration> &
      SyntaxKind__VariableDeclaration &
      237; // 237
    static +VariableDeclarationList: Class<SyntaxKind__VariableDeclarationList> &
      SyntaxKind__VariableDeclarationList &
      238; // 238
    static +FunctionDeclaration: Class<SyntaxKind__FunctionDeclaration> &
      SyntaxKind__FunctionDeclaration &
      239; // 239
    static +ClassDeclaration: Class<SyntaxKind__ClassDeclaration> &
      SyntaxKind__ClassDeclaration &
      240; // 240
    static +InterfaceDeclaration: Class<SyntaxKind__InterfaceDeclaration> &
      SyntaxKind__InterfaceDeclaration &
      241; // 241
    static +TypeAliasDeclaration: Class<SyntaxKind__TypeAliasDeclaration> &
      SyntaxKind__TypeAliasDeclaration &
      242; // 242
    static +EnumDeclaration: Class<SyntaxKind__EnumDeclaration> &
      SyntaxKind__EnumDeclaration &
      243; // 243
    static +ModuleDeclaration: Class<SyntaxKind__ModuleDeclaration> &
      SyntaxKind__ModuleDeclaration &
      244; // 244
    static +ModuleBlock: Class<SyntaxKind__ModuleBlock> &
      SyntaxKind__ModuleBlock &
      245; // 245
    static +CaseBlock: Class<SyntaxKind__CaseBlock> &
      SyntaxKind__CaseBlock &
      246; // 246
    static +NamespaceExportDeclaration: Class<SyntaxKind__NamespaceExportDeclaration> &
      SyntaxKind__NamespaceExportDeclaration &
      247; // 247
    static +ImportEqualsDeclaration: Class<SyntaxKind__ImportEqualsDeclaration> &
      SyntaxKind__ImportEqualsDeclaration &
      248; // 248
    static +ImportDeclaration: Class<SyntaxKind__ImportDeclaration> &
      SyntaxKind__ImportDeclaration &
      249; // 249
    static +ImportClause: Class<SyntaxKind__ImportClause> &
      SyntaxKind__ImportClause &
      250; // 250
    static +NamespaceImport: Class<SyntaxKind__NamespaceImport> &
      SyntaxKind__NamespaceImport &
      251; // 251
    static +NamedImports: Class<SyntaxKind__NamedImports> &
      SyntaxKind__NamedImports &
      252; // 252
    static +ImportSpecifier: Class<SyntaxKind__ImportSpecifier> &
      SyntaxKind__ImportSpecifier &
      253; // 253
    static +ExportAssignment: Class<SyntaxKind__ExportAssignment> &
      SyntaxKind__ExportAssignment &
      254; // 254
    static +ExportDeclaration: Class<SyntaxKind__ExportDeclaration> &
      SyntaxKind__ExportDeclaration &
      255; // 255
    static +NamedExports: Class<SyntaxKind__NamedExports> &
      SyntaxKind__NamedExports &
      256; // 256
    static +ExportSpecifier: Class<SyntaxKind__ExportSpecifier> &
      SyntaxKind__ExportSpecifier &
      257; // 257
    static +MissingDeclaration: Class<SyntaxKind__MissingDeclaration> &
      SyntaxKind__MissingDeclaration &
      258; // 258
    static +ExternalModuleReference: Class<SyntaxKind__ExternalModuleReference> &
      SyntaxKind__ExternalModuleReference &
      259; // 259
    static +JsxElement: Class<SyntaxKind__JsxElement> &
      SyntaxKind__JsxElement &
      260; // 260
    static +JsxSelfClosingElement: Class<SyntaxKind__JsxSelfClosingElement> &
      SyntaxKind__JsxSelfClosingElement &
      261; // 261
    static +JsxOpeningElement: Class<SyntaxKind__JsxOpeningElement> &
      SyntaxKind__JsxOpeningElement &
      262; // 262
    static +JsxClosingElement: Class<SyntaxKind__JsxClosingElement> &
      SyntaxKind__JsxClosingElement &
      263; // 263
    static +JsxFragment: Class<SyntaxKind__JsxFragment> &
      SyntaxKind__JsxFragment &
      264; // 264
    static +JsxOpeningFragment: Class<SyntaxKind__JsxOpeningFragment> &
      SyntaxKind__JsxOpeningFragment &
      265; // 265
    static +JsxClosingFragment: Class<SyntaxKind__JsxClosingFragment> &
      SyntaxKind__JsxClosingFragment &
      266; // 266
    static +JsxAttribute: Class<SyntaxKind__JsxAttribute> &
      SyntaxKind__JsxAttribute &
      267; // 267
    static +JsxAttributes: Class<SyntaxKind__JsxAttributes> &
      SyntaxKind__JsxAttributes &
      268; // 268
    static +JsxSpreadAttribute: Class<SyntaxKind__JsxSpreadAttribute> &
      SyntaxKind__JsxSpreadAttribute &
      269; // 269
    static +JsxExpression: Class<SyntaxKind__JsxExpression> &
      SyntaxKind__JsxExpression &
      270; // 270
    static +CaseClause: Class<SyntaxKind__CaseClause> &
      SyntaxKind__CaseClause &
      271; // 271
    static +DefaultClause: Class<SyntaxKind__DefaultClause> &
      SyntaxKind__DefaultClause &
      272; // 272
    static +HeritageClause: Class<SyntaxKind__HeritageClause> &
      SyntaxKind__HeritageClause &
      273; // 273
    static +CatchClause: Class<SyntaxKind__CatchClause> &
      SyntaxKind__CatchClause &
      274; // 274
    static +PropertyAssignment: Class<SyntaxKind__PropertyAssignment> &
      SyntaxKind__PropertyAssignment &
      275; // 275
    static +ShorthandPropertyAssignment: Class<SyntaxKind__ShorthandPropertyAssignment> &
      SyntaxKind__ShorthandPropertyAssignment &
      276; // 276
    static +SpreadAssignment: Class<SyntaxKind__SpreadAssignment> &
      SyntaxKind__SpreadAssignment &
      277; // 277
    static +EnumMember: Class<SyntaxKind__EnumMember> &
      SyntaxKind__EnumMember &
      278; // 278
    static +SourceFile: Class<SyntaxKind__SourceFile> &
      SyntaxKind__SourceFile &
      279; // 279
    static +Bundle: Class<SyntaxKind__Bundle> & SyntaxKind__Bundle & 280; // 280
    static +UnparsedSource: Class<SyntaxKind__UnparsedSource> &
      SyntaxKind__UnparsedSource &
      281; // 281
    static +InputFiles: Class<SyntaxKind__InputFiles> &
      SyntaxKind__InputFiles &
      282; // 282
    static +JSDocTypeExpression: Class<SyntaxKind__JSDocTypeExpression> &
      SyntaxKind__JSDocTypeExpression &
      283; // 283
    static +JSDocAllType: Class<SyntaxKind__JSDocAllType> &
      SyntaxKind__JSDocAllType &
      284; // 284
    static +JSDocUnknownType: Class<SyntaxKind__JSDocUnknownType> &
      SyntaxKind__JSDocUnknownType &
      285; // 285
    static +JSDocNullableType: Class<SyntaxKind__JSDocNullableType> &
      SyntaxKind__JSDocNullableType &
      286; // 286
    static +JSDocNonNullableType: Class<SyntaxKind__JSDocNonNullableType> &
      SyntaxKind__JSDocNonNullableType &
      287; // 287
    static +JSDocOptionalType: Class<SyntaxKind__JSDocOptionalType> &
      SyntaxKind__JSDocOptionalType &
      288; // 288
    static +JSDocFunctionType: Class<SyntaxKind__JSDocFunctionType> &
      SyntaxKind__JSDocFunctionType &
      289; // 289
    static +JSDocVariadicType: Class<SyntaxKind__JSDocVariadicType> &
      SyntaxKind__JSDocVariadicType &
      290; // 290
    static +JSDocComment: Class<SyntaxKind__JSDocComment> &
      SyntaxKind__JSDocComment &
      291; // 291
    static +JSDocTypeLiteral: Class<SyntaxKind__JSDocTypeLiteral> &
      SyntaxKind__JSDocTypeLiteral &
      292; // 292
    static +JSDocSignature: Class<SyntaxKind__JSDocSignature> &
      SyntaxKind__JSDocSignature &
      293; // 293
    static +JSDocTag: Class<SyntaxKind__JSDocTag> & SyntaxKind__JSDocTag & 294; // 294
    static +JSDocAugmentsTag: Class<SyntaxKind__JSDocAugmentsTag> &
      SyntaxKind__JSDocAugmentsTag &
      295; // 295
    static +JSDocClassTag: Class<SyntaxKind__JSDocClassTag> &
      SyntaxKind__JSDocClassTag &
      296; // 296
    static +JSDocCallbackTag: Class<SyntaxKind__JSDocCallbackTag> &
      SyntaxKind__JSDocCallbackTag &
      297; // 297
    static +JSDocEnumTag: Class<SyntaxKind__JSDocEnumTag> &
      SyntaxKind__JSDocEnumTag &
      298; // 298
    static +JSDocParameterTag: Class<SyntaxKind__JSDocParameterTag> &
      SyntaxKind__JSDocParameterTag &
      299; // 299
    static +JSDocReturnTag: Class<SyntaxKind__JSDocReturnTag> &
      SyntaxKind__JSDocReturnTag &
      300; // 300
    static +JSDocThisTag: Class<SyntaxKind__JSDocThisTag> &
      SyntaxKind__JSDocThisTag &
      301; // 301
    static +JSDocTypeTag: Class<SyntaxKind__JSDocTypeTag> &
      SyntaxKind__JSDocTypeTag &
      302; // 302
    static +JSDocTemplateTag: Class<SyntaxKind__JSDocTemplateTag> &
      SyntaxKind__JSDocTemplateTag &
      303; // 303
    static +JSDocTypedefTag: Class<SyntaxKind__JSDocTypedefTag> &
      SyntaxKind__JSDocTypedefTag &
      304; // 304
    static +JSDocPropertyTag: Class<SyntaxKind__JSDocPropertyTag> &
      SyntaxKind__JSDocPropertyTag &
      305; // 305
    static +SyntaxList: Class<SyntaxKind__SyntaxList> &
      SyntaxKind__SyntaxList &
      306; // 306
    static +NotEmittedStatement: Class<SyntaxKind__NotEmittedStatement> &
      SyntaxKind__NotEmittedStatement &
      307; // 307
    static +PartiallyEmittedExpression: Class<SyntaxKind__PartiallyEmittedExpression> &
      SyntaxKind__PartiallyEmittedExpression &
      308; // 308
    static +CommaListExpression: Class<SyntaxKind__CommaListExpression> &
      SyntaxKind__CommaListExpression &
      309; // 309
    static +MergeDeclarationMarker: Class<SyntaxKind__MergeDeclarationMarker> &
      SyntaxKind__MergeDeclarationMarker &
      310; // 310
    static +EndOfDeclarationMarker: Class<SyntaxKind__EndOfDeclarationMarker> &
      SyntaxKind__EndOfDeclarationMarker &
      311; // 311
    static +Count: Class<SyntaxKind__Count> & SyntaxKind__Count & 312; // 312
    static +FirstAssignment: Class<SyntaxKind__FirstAssignment> &
      SyntaxKind__FirstAssignment &
      59; // 59
    static +LastAssignment: Class<SyntaxKind__LastAssignment> &
      SyntaxKind__LastAssignment &
      71; // 71
    static +FirstCompoundAssignment: Class<SyntaxKind__FirstCompoundAssignment> &
      SyntaxKind__FirstCompoundAssignment &
      60; // 60
    static +LastCompoundAssignment: Class<SyntaxKind__LastCompoundAssignment> &
      SyntaxKind__LastCompoundAssignment &
      71; // 71
    static +FirstReservedWord: Class<SyntaxKind__FirstReservedWord> &
      SyntaxKind__FirstReservedWord &
      73; // 73
    static +LastReservedWord: Class<SyntaxKind__LastReservedWord> &
      SyntaxKind__LastReservedWord &
      108; // 108
    static +FirstKeyword: Class<SyntaxKind__FirstKeyword> &
      SyntaxKind__FirstKeyword &
      73; // 73
    static +LastKeyword: Class<SyntaxKind__LastKeyword> &
      SyntaxKind__LastKeyword &
      147; // 147
    static +FirstFutureReservedWord: Class<SyntaxKind__FirstFutureReservedWord> &
      SyntaxKind__FirstFutureReservedWord &
      109; // 109
    static +LastFutureReservedWord: Class<SyntaxKind__LastFutureReservedWord> &
      SyntaxKind__LastFutureReservedWord &
      117; // 117
    static +FirstTypeNode: Class<SyntaxKind__FirstTypeNode> &
      SyntaxKind__FirstTypeNode &
      163; // 163
    static +LastTypeNode: Class<SyntaxKind__LastTypeNode> &
      SyntaxKind__LastTypeNode &
      183; // 183
    static +FirstPunctuation: Class<SyntaxKind__FirstPunctuation> &
      SyntaxKind__FirstPunctuation &
      18; // 18
    static +LastPunctuation: Class<SyntaxKind__LastPunctuation> &
      SyntaxKind__LastPunctuation &
      71; // 71
    static +FirstToken: Class<SyntaxKind__FirstToken> &
      SyntaxKind__FirstToken &
      0; // 0
    static +LastToken: Class<SyntaxKind__LastToken> &
      SyntaxKind__LastToken &
      147; // 147
    static +FirstTriviaToken: Class<SyntaxKind__FirstTriviaToken> &
      SyntaxKind__FirstTriviaToken &
      2; // 2
    static +LastTriviaToken: Class<SyntaxKind__LastTriviaToken> &
      SyntaxKind__LastTriviaToken &
      7; // 7
    static +FirstLiteralToken: Class<SyntaxKind__FirstLiteralToken> &
      SyntaxKind__FirstLiteralToken &
      8; // 8
    static +LastLiteralToken: Class<SyntaxKind__LastLiteralToken> &
      SyntaxKind__LastLiteralToken &
      14; // 14
    static +FirstTemplateToken: Class<SyntaxKind__FirstTemplateToken> &
      SyntaxKind__FirstTemplateToken &
      14; // 14
    static +LastTemplateToken: Class<SyntaxKind__LastTemplateToken> &
      SyntaxKind__LastTemplateToken &
      17; // 17
    static +FirstBinaryOperator: Class<SyntaxKind__FirstBinaryOperator> &
      SyntaxKind__FirstBinaryOperator &
      28; // 28
    static +LastBinaryOperator: Class<SyntaxKind__LastBinaryOperator> &
      SyntaxKind__LastBinaryOperator &
      71; // 71
    static +FirstNode: Class<SyntaxKind__FirstNode> &
      SyntaxKind__FirstNode &
      148; // 148
    static +FirstJSDocNode: Class<SyntaxKind__FirstJSDocNode> &
      SyntaxKind__FirstJSDocNode &
      283; // 283
    static +LastJSDocNode: Class<SyntaxKind__LastJSDocNode> &
      SyntaxKind__LastJSDocNode &
      305; // 305
    static +FirstJSDocTagNode: Class<SyntaxKind__FirstJSDocTagNode> &
      SyntaxKind__FirstJSDocTagNode &
      294; // 294
    static +LastJSDocTagNode: Class<SyntaxKind__LastJSDocTagNode> &
      SyntaxKind__LastJSDocTagNode &
      305; // 305
  }

  declare class SyntaxKind__Unknown mixins SyntaxKind {}
  declare class SyntaxKind__EndOfFileToken mixins SyntaxKind {}
  declare class SyntaxKind__SingleLineCommentTrivia mixins SyntaxKind {}
  declare class SyntaxKind__MultiLineCommentTrivia mixins SyntaxKind {}
  declare class SyntaxKind__NewLineTrivia mixins SyntaxKind {}
  declare class SyntaxKind__WhitespaceTrivia mixins SyntaxKind {}
  declare class SyntaxKind__ShebangTrivia mixins SyntaxKind {}
  declare class SyntaxKind__ConflictMarkerTrivia mixins SyntaxKind {}
  declare class SyntaxKind__NumericLiteral mixins SyntaxKind {}
  declare class SyntaxKind__BigIntLiteral mixins SyntaxKind {}
  declare class SyntaxKind__StringLiteral mixins SyntaxKind {}
  declare class SyntaxKind__JsxText mixins SyntaxKind {}
  declare class SyntaxKind__JsxTextAllWhiteSpaces mixins SyntaxKind {}
  declare class SyntaxKind__RegularExpressionLiteral mixins SyntaxKind {}
  declare class SyntaxKind__NoSubstitutionTemplateLiteral mixins SyntaxKind {}
  declare class SyntaxKind__TemplateHead mixins SyntaxKind {}
  declare class SyntaxKind__TemplateMiddle mixins SyntaxKind {}
  declare class SyntaxKind__TemplateTail mixins SyntaxKind {}
  declare class SyntaxKind__OpenBraceToken mixins SyntaxKind {}
  declare class SyntaxKind__CloseBraceToken mixins SyntaxKind {}
  declare class SyntaxKind__OpenParenToken mixins SyntaxKind {}
  declare class SyntaxKind__CloseParenToken mixins SyntaxKind {}
  declare class SyntaxKind__OpenBracketToken mixins SyntaxKind {}
  declare class SyntaxKind__CloseBracketToken mixins SyntaxKind {}
  declare class SyntaxKind__DotToken mixins SyntaxKind {}
  declare class SyntaxKind__DotDotDotToken mixins SyntaxKind {}
  declare class SyntaxKind__SemicolonToken mixins SyntaxKind {}
  declare class SyntaxKind__CommaToken mixins SyntaxKind {}
  declare class SyntaxKind__LessThanToken mixins SyntaxKind {}
  declare class SyntaxKind__LessThanSlashToken mixins SyntaxKind {}
  declare class SyntaxKind__GreaterThanToken mixins SyntaxKind {}
  declare class SyntaxKind__LessThanEqualsToken mixins SyntaxKind {}
  declare class SyntaxKind__GreaterThanEqualsToken mixins SyntaxKind {}
  declare class SyntaxKind__EqualsEqualsToken mixins SyntaxKind {}
  declare class SyntaxKind__ExclamationEqualsToken mixins SyntaxKind {}
  declare class SyntaxKind__EqualsEqualsEqualsToken mixins SyntaxKind {}
  declare class SyntaxKind__ExclamationEqualsEqualsToken mixins SyntaxKind {}
  declare class SyntaxKind__EqualsGreaterThanToken mixins SyntaxKind {}
  declare class SyntaxKind__PlusToken mixins SyntaxKind {}
  declare class SyntaxKind__MinusToken mixins SyntaxKind {}
  declare class SyntaxKind__AsteriskToken mixins SyntaxKind {}
  declare class SyntaxKind__AsteriskAsteriskToken mixins SyntaxKind {}
  declare class SyntaxKind__SlashToken mixins SyntaxKind {}
  declare class SyntaxKind__PercentToken mixins SyntaxKind {}
  declare class SyntaxKind__PlusPlusToken mixins SyntaxKind {}
  declare class SyntaxKind__MinusMinusToken mixins SyntaxKind {}
  declare class SyntaxKind__LessThanLessThanToken mixins SyntaxKind {}
  declare class SyntaxKind__GreaterThanGreaterThanToken mixins SyntaxKind {}
  declare class SyntaxKind__GreaterThanGreaterThanGreaterThanToken
    mixins SyntaxKind {}
  declare class SyntaxKind__AmpersandToken mixins SyntaxKind {}
  declare class SyntaxKind__BarToken mixins SyntaxKind {}
  declare class SyntaxKind__CaretToken mixins SyntaxKind {}
  declare class SyntaxKind__ExclamationToken mixins SyntaxKind {}
  declare class SyntaxKind__TildeToken mixins SyntaxKind {}
  declare class SyntaxKind__AmpersandAmpersandToken mixins SyntaxKind {}
  declare class SyntaxKind__BarBarToken mixins SyntaxKind {}
  declare class SyntaxKind__QuestionToken mixins SyntaxKind {}
  declare class SyntaxKind__ColonToken mixins SyntaxKind {}
  declare class SyntaxKind__AtToken mixins SyntaxKind {}
  declare class SyntaxKind__EqualsToken mixins SyntaxKind {}
  declare class SyntaxKind__PlusEqualsToken mixins SyntaxKind {}
  declare class SyntaxKind__MinusEqualsToken mixins SyntaxKind {}
  declare class SyntaxKind__AsteriskEqualsToken mixins SyntaxKind {}
  declare class SyntaxKind__AsteriskAsteriskEqualsToken mixins SyntaxKind {}
  declare class SyntaxKind__SlashEqualsToken mixins SyntaxKind {}
  declare class SyntaxKind__PercentEqualsToken mixins SyntaxKind {}
  declare class SyntaxKind__LessThanLessThanEqualsToken mixins SyntaxKind {}
  declare class SyntaxKind__GreaterThanGreaterThanEqualsToken
    mixins SyntaxKind {}
  declare class SyntaxKind__GreaterThanGreaterThanGreaterThanEqualsToken
    mixins SyntaxKind {}
  declare class SyntaxKind__AmpersandEqualsToken mixins SyntaxKind {}
  declare class SyntaxKind__BarEqualsToken mixins SyntaxKind {}
  declare class SyntaxKind__CaretEqualsToken mixins SyntaxKind {}
  declare class SyntaxKind__Identifier mixins SyntaxKind {}
  declare class SyntaxKind__BreakKeyword mixins SyntaxKind {}
  declare class SyntaxKind__CaseKeyword mixins SyntaxKind {}
  declare class SyntaxKind__CatchKeyword mixins SyntaxKind {}
  declare class SyntaxKind__ClassKeyword mixins SyntaxKind {}
  declare class SyntaxKind__ConstKeyword mixins SyntaxKind {}
  declare class SyntaxKind__ContinueKeyword mixins SyntaxKind {}
  declare class SyntaxKind__DebuggerKeyword mixins SyntaxKind {}
  declare class SyntaxKind__DefaultKeyword mixins SyntaxKind {}
  declare class SyntaxKind__DeleteKeyword mixins SyntaxKind {}
  declare class SyntaxKind__DoKeyword mixins SyntaxKind {}
  declare class SyntaxKind__ElseKeyword mixins SyntaxKind {}
  declare class SyntaxKind__EnumKeyword mixins SyntaxKind {}
  declare class SyntaxKind__ExportKeyword mixins SyntaxKind {}
  declare class SyntaxKind__ExtendsKeyword mixins SyntaxKind {}
  declare class SyntaxKind__FalseKeyword mixins SyntaxKind {}
  declare class SyntaxKind__FinallyKeyword mixins SyntaxKind {}
  declare class SyntaxKind__ForKeyword mixins SyntaxKind {}
  declare class SyntaxKind__FunctionKeyword mixins SyntaxKind {}
  declare class SyntaxKind__IfKeyword mixins SyntaxKind {}
  declare class SyntaxKind__ImportKeyword mixins SyntaxKind {}
  declare class SyntaxKind__InKeyword mixins SyntaxKind {}
  declare class SyntaxKind__InstanceOfKeyword mixins SyntaxKind {}
  declare class SyntaxKind__NewKeyword mixins SyntaxKind {}
  declare class SyntaxKind__NullKeyword mixins SyntaxKind {}
  declare class SyntaxKind__ReturnKeyword mixins SyntaxKind {}
  declare class SyntaxKind__SuperKeyword mixins SyntaxKind {}
  declare class SyntaxKind__SwitchKeyword mixins SyntaxKind {}
  declare class SyntaxKind__ThisKeyword mixins SyntaxKind {}
  declare class SyntaxKind__ThrowKeyword mixins SyntaxKind {}
  declare class SyntaxKind__TrueKeyword mixins SyntaxKind {}
  declare class SyntaxKind__TryKeyword mixins SyntaxKind {}
  declare class SyntaxKind__TypeOfKeyword mixins SyntaxKind {}
  declare class SyntaxKind__VarKeyword mixins SyntaxKind {}
  declare class SyntaxKind__VoidKeyword mixins SyntaxKind {}
  declare class SyntaxKind__WhileKeyword mixins SyntaxKind {}
  declare class SyntaxKind__WithKeyword mixins SyntaxKind {}
  declare class SyntaxKind__ImplementsKeyword mixins SyntaxKind {}
  declare class SyntaxKind__InterfaceKeyword mixins SyntaxKind {}
  declare class SyntaxKind__LetKeyword mixins SyntaxKind {}
  declare class SyntaxKind__PackageKeyword mixins SyntaxKind {}
  declare class SyntaxKind__PrivateKeyword mixins SyntaxKind {}
  declare class SyntaxKind__ProtectedKeyword mixins SyntaxKind {}
  declare class SyntaxKind__PublicKeyword mixins SyntaxKind {}
  declare class SyntaxKind__StaticKeyword mixins SyntaxKind {}
  declare class SyntaxKind__YieldKeyword mixins SyntaxKind {}
  declare class SyntaxKind__AbstractKeyword mixins SyntaxKind {}
  declare class SyntaxKind__AsKeyword mixins SyntaxKind {}
  declare class SyntaxKind__AnyKeyword mixins SyntaxKind {}
  declare class SyntaxKind__AsyncKeyword mixins SyntaxKind {}
  declare class SyntaxKind__AwaitKeyword mixins SyntaxKind {}
  declare class SyntaxKind__BooleanKeyword mixins SyntaxKind {}
  declare class SyntaxKind__ConstructorKeyword mixins SyntaxKind {}
  declare class SyntaxKind__DeclareKeyword mixins SyntaxKind {}
  declare class SyntaxKind__GetKeyword mixins SyntaxKind {}
  declare class SyntaxKind__InferKeyword mixins SyntaxKind {}
  declare class SyntaxKind__IsKeyword mixins SyntaxKind {}
  declare class SyntaxKind__KeyOfKeyword mixins SyntaxKind {}
  declare class SyntaxKind__ModuleKeyword mixins SyntaxKind {}
  declare class SyntaxKind__NamespaceKeyword mixins SyntaxKind {}
  declare class SyntaxKind__NeverKeyword mixins SyntaxKind {}
  declare class SyntaxKind__ReadonlyKeyword mixins SyntaxKind {}
  declare class SyntaxKind__RequireKeyword mixins SyntaxKind {}
  declare class SyntaxKind__NumberKeyword mixins SyntaxKind {}
  declare class SyntaxKind__ObjectKeyword mixins SyntaxKind {}
  declare class SyntaxKind__SetKeyword mixins SyntaxKind {}
  declare class SyntaxKind__StringKeyword mixins SyntaxKind {}
  declare class SyntaxKind__SymbolKeyword mixins SyntaxKind {}
  declare class SyntaxKind__TypeKeyword mixins SyntaxKind {}
  declare class SyntaxKind__UndefinedKeyword mixins SyntaxKind {}
  declare class SyntaxKind__UniqueKeyword mixins SyntaxKind {}
  declare class SyntaxKind__UnknownKeyword mixins SyntaxKind {}
  declare class SyntaxKind__FromKeyword mixins SyntaxKind {}
  declare class SyntaxKind__GlobalKeyword mixins SyntaxKind {}
  declare class SyntaxKind__BigIntKeyword mixins SyntaxKind {}
  declare class SyntaxKind__OfKeyword mixins SyntaxKind {}
  declare class SyntaxKind__QualifiedName mixins SyntaxKind {}
  declare class SyntaxKind__ComputedPropertyName mixins SyntaxKind {}
  declare class SyntaxKind__TypeParameter mixins SyntaxKind {}
  declare class SyntaxKind__Parameter mixins SyntaxKind {}
  declare class SyntaxKind__Decorator mixins SyntaxKind {}
  declare class SyntaxKind__PropertySignature mixins SyntaxKind {}
  declare class SyntaxKind__PropertyDeclaration mixins SyntaxKind {}
  declare class SyntaxKind__MethodSignature mixins SyntaxKind {}
  declare class SyntaxKind__MethodDeclaration mixins SyntaxKind {}
  declare class SyntaxKind__Constructor mixins SyntaxKind {}
  declare class SyntaxKind__GetAccessor mixins SyntaxKind {}
  declare class SyntaxKind__SetAccessor mixins SyntaxKind {}
  declare class SyntaxKind__CallSignature mixins SyntaxKind {}
  declare class SyntaxKind__ConstructSignature mixins SyntaxKind {}
  declare class SyntaxKind__IndexSignature mixins SyntaxKind {}
  declare class SyntaxKind__TypePredicate mixins SyntaxKind {}
  declare class SyntaxKind__TypeReference mixins SyntaxKind {}
  declare class SyntaxKind__FunctionType mixins SyntaxKind {}
  declare class SyntaxKind__ConstructorType mixins SyntaxKind {}
  declare class SyntaxKind__TypeQuery mixins SyntaxKind {}
  declare class SyntaxKind__TypeLiteral mixins SyntaxKind {}
  declare class SyntaxKind__ArrayType mixins SyntaxKind {}
  declare class SyntaxKind__TupleType mixins SyntaxKind {}
  declare class SyntaxKind__OptionalType mixins SyntaxKind {}
  declare class SyntaxKind__RestType mixins SyntaxKind {}
  declare class SyntaxKind__UnionType mixins SyntaxKind {}
  declare class SyntaxKind__IntersectionType mixins SyntaxKind {}
  declare class SyntaxKind__ConditionalType mixins SyntaxKind {}
  declare class SyntaxKind__InferType mixins SyntaxKind {}
  declare class SyntaxKind__ParenthesizedType mixins SyntaxKind {}
  declare class SyntaxKind__ThisType mixins SyntaxKind {}
  declare class SyntaxKind__TypeOperator mixins SyntaxKind {}
  declare class SyntaxKind__IndexedAccessType mixins SyntaxKind {}
  declare class SyntaxKind__MappedType mixins SyntaxKind {}
  declare class SyntaxKind__LiteralType mixins SyntaxKind {}
  declare class SyntaxKind__ImportType mixins SyntaxKind {}
  declare class SyntaxKind__ObjectBindingPattern mixins SyntaxKind {}
  declare class SyntaxKind__ArrayBindingPattern mixins SyntaxKind {}
  declare class SyntaxKind__BindingElement mixins SyntaxKind {}
  declare class SyntaxKind__ArrayLiteralExpression mixins SyntaxKind {}
  declare class SyntaxKind__ObjectLiteralExpression mixins SyntaxKind {}
  declare class SyntaxKind__PropertyAccessExpression mixins SyntaxKind {}
  declare class SyntaxKind__ElementAccessExpression mixins SyntaxKind {}
  declare class SyntaxKind__CallExpression mixins SyntaxKind {}
  declare class SyntaxKind__NewExpression mixins SyntaxKind {}
  declare class SyntaxKind__TaggedTemplateExpression mixins SyntaxKind {}
  declare class SyntaxKind__TypeAssertionExpression mixins SyntaxKind {}
  declare class SyntaxKind__ParenthesizedExpression mixins SyntaxKind {}
  declare class SyntaxKind__FunctionExpression mixins SyntaxKind {}
  declare class SyntaxKind__ArrowFunction mixins SyntaxKind {}
  declare class SyntaxKind__DeleteExpression mixins SyntaxKind {}
  declare class SyntaxKind__TypeOfExpression mixins SyntaxKind {}
  declare class SyntaxKind__VoidExpression mixins SyntaxKind {}
  declare class SyntaxKind__AwaitExpression mixins SyntaxKind {}
  declare class SyntaxKind__PrefixUnaryExpression mixins SyntaxKind {}
  declare class SyntaxKind__PostfixUnaryExpression mixins SyntaxKind {}
  declare class SyntaxKind__BinaryExpression mixins SyntaxKind {}
  declare class SyntaxKind__ConditionalExpression mixins SyntaxKind {}
  declare class SyntaxKind__TemplateExpression mixins SyntaxKind {}
  declare class SyntaxKind__YieldExpression mixins SyntaxKind {}
  declare class SyntaxKind__SpreadElement mixins SyntaxKind {}
  declare class SyntaxKind__ClassExpression mixins SyntaxKind {}
  declare class SyntaxKind__OmittedExpression mixins SyntaxKind {}
  declare class SyntaxKind__ExpressionWithTypeArguments mixins SyntaxKind {}
  declare class SyntaxKind__AsExpression mixins SyntaxKind {}
  declare class SyntaxKind__NonNullExpression mixins SyntaxKind {}
  declare class SyntaxKind__MetaProperty mixins SyntaxKind {}
  declare class SyntaxKind__SyntheticExpression mixins SyntaxKind {}
  declare class SyntaxKind__TemplateSpan mixins SyntaxKind {}
  declare class SyntaxKind__SemicolonClassElement mixins SyntaxKind {}
  declare class SyntaxKind__Block mixins SyntaxKind {}
  declare class SyntaxKind__VariableStatement mixins SyntaxKind {}
  declare class SyntaxKind__EmptyStatement mixins SyntaxKind {}
  declare class SyntaxKind__ExpressionStatement mixins SyntaxKind {}
  declare class SyntaxKind__IfStatement mixins SyntaxKind {}
  declare class SyntaxKind__DoStatement mixins SyntaxKind {}
  declare class SyntaxKind__WhileStatement mixins SyntaxKind {}
  declare class SyntaxKind__ForStatement mixins SyntaxKind {}
  declare class SyntaxKind__ForInStatement mixins SyntaxKind {}
  declare class SyntaxKind__ForOfStatement mixins SyntaxKind {}
  declare class SyntaxKind__ContinueStatement mixins SyntaxKind {}
  declare class SyntaxKind__BreakStatement mixins SyntaxKind {}
  declare class SyntaxKind__ReturnStatement mixins SyntaxKind {}
  declare class SyntaxKind__WithStatement mixins SyntaxKind {}
  declare class SyntaxKind__SwitchStatement mixins SyntaxKind {}
  declare class SyntaxKind__LabeledStatement mixins SyntaxKind {}
  declare class SyntaxKind__ThrowStatement mixins SyntaxKind {}
  declare class SyntaxKind__TryStatement mixins SyntaxKind {}
  declare class SyntaxKind__DebuggerStatement mixins SyntaxKind {}
  declare class SyntaxKind__VariableDeclaration mixins SyntaxKind {}
  declare class SyntaxKind__VariableDeclarationList mixins SyntaxKind {}
  declare class SyntaxKind__FunctionDeclaration mixins SyntaxKind {}
  declare class SyntaxKind__ClassDeclaration mixins SyntaxKind {}
  declare class SyntaxKind__InterfaceDeclaration mixins SyntaxKind {}
  declare class SyntaxKind__TypeAliasDeclaration mixins SyntaxKind {}
  declare class SyntaxKind__EnumDeclaration mixins SyntaxKind {}
  declare class SyntaxKind__ModuleDeclaration mixins SyntaxKind {}
  declare class SyntaxKind__ModuleBlock mixins SyntaxKind {}
  declare class SyntaxKind__CaseBlock mixins SyntaxKind {}
  declare class SyntaxKind__NamespaceExportDeclaration mixins SyntaxKind {}
  declare class SyntaxKind__ImportEqualsDeclaration mixins SyntaxKind {}
  declare class SyntaxKind__ImportDeclaration mixins SyntaxKind {}
  declare class SyntaxKind__ImportClause mixins SyntaxKind {}
  declare class SyntaxKind__NamespaceImport mixins SyntaxKind {}
  declare class SyntaxKind__NamedImports mixins SyntaxKind {}
  declare class SyntaxKind__ImportSpecifier mixins SyntaxKind {}
  declare class SyntaxKind__ExportAssignment mixins SyntaxKind {}
  declare class SyntaxKind__ExportDeclaration mixins SyntaxKind {}
  declare class SyntaxKind__NamedExports mixins SyntaxKind {}
  declare class SyntaxKind__ExportSpecifier mixins SyntaxKind {}
  declare class SyntaxKind__MissingDeclaration mixins SyntaxKind {}
  declare class SyntaxKind__ExternalModuleReference mixins SyntaxKind {}
  declare class SyntaxKind__JsxElement mixins SyntaxKind {}
  declare class SyntaxKind__JsxSelfClosingElement mixins SyntaxKind {}
  declare class SyntaxKind__JsxOpeningElement mixins SyntaxKind {}
  declare class SyntaxKind__JsxClosingElement mixins SyntaxKind {}
  declare class SyntaxKind__JsxFragment mixins SyntaxKind {}
  declare class SyntaxKind__JsxOpeningFragment mixins SyntaxKind {}
  declare class SyntaxKind__JsxClosingFragment mixins SyntaxKind {}
  declare class SyntaxKind__JsxAttribute mixins SyntaxKind {}
  declare class SyntaxKind__JsxAttributes mixins SyntaxKind {}
  declare class SyntaxKind__JsxSpreadAttribute mixins SyntaxKind {}
  declare class SyntaxKind__JsxExpression mixins SyntaxKind {}
  declare class SyntaxKind__CaseClause mixins SyntaxKind {}
  declare class SyntaxKind__DefaultClause mixins SyntaxKind {}
  declare class SyntaxKind__HeritageClause mixins SyntaxKind {}
  declare class SyntaxKind__CatchClause mixins SyntaxKind {}
  declare class SyntaxKind__PropertyAssignment mixins SyntaxKind {}
  declare class SyntaxKind__ShorthandPropertyAssignment mixins SyntaxKind {}
  declare class SyntaxKind__SpreadAssignment mixins SyntaxKind {}
  declare class SyntaxKind__EnumMember mixins SyntaxKind {}
  declare class SyntaxKind__SourceFile mixins SyntaxKind {}
  declare class SyntaxKind__Bundle mixins SyntaxKind {}
  declare class SyntaxKind__UnparsedSource mixins SyntaxKind {}
  declare class SyntaxKind__InputFiles mixins SyntaxKind {}
  declare class SyntaxKind__JSDocTypeExpression mixins SyntaxKind {}
  declare class SyntaxKind__JSDocAllType mixins SyntaxKind {}
  declare class SyntaxKind__JSDocUnknownType mixins SyntaxKind {}
  declare class SyntaxKind__JSDocNullableType mixins SyntaxKind {}
  declare class SyntaxKind__JSDocNonNullableType mixins SyntaxKind {}
  declare class SyntaxKind__JSDocOptionalType mixins SyntaxKind {}
  declare class SyntaxKind__JSDocFunctionType mixins SyntaxKind {}
  declare class SyntaxKind__JSDocVariadicType mixins SyntaxKind {}
  declare class SyntaxKind__JSDocComment mixins SyntaxKind {}
  declare class SyntaxKind__JSDocTypeLiteral mixins SyntaxKind {}
  declare class SyntaxKind__JSDocSignature mixins SyntaxKind {}
  declare class SyntaxKind__JSDocTag mixins SyntaxKind {}
  declare class SyntaxKind__JSDocAugmentsTag mixins SyntaxKind {}
  declare class SyntaxKind__JSDocClassTag mixins SyntaxKind {}
  declare class SyntaxKind__JSDocCallbackTag mixins SyntaxKind {}
  declare class SyntaxKind__JSDocEnumTag mixins SyntaxKind {}
  declare class SyntaxKind__JSDocParameterTag mixins SyntaxKind {}
  declare class SyntaxKind__JSDocReturnTag mixins SyntaxKind {}
  declare class SyntaxKind__JSDocThisTag mixins SyntaxKind {}
  declare class SyntaxKind__JSDocTypeTag mixins SyntaxKind {}
  declare class SyntaxKind__JSDocTemplateTag mixins SyntaxKind {}
  declare class SyntaxKind__JSDocTypedefTag mixins SyntaxKind {}
  declare class SyntaxKind__JSDocPropertyTag mixins SyntaxKind {}
  declare class SyntaxKind__SyntaxList mixins SyntaxKind {}
  declare class SyntaxKind__NotEmittedStatement mixins SyntaxKind {}
  declare class SyntaxKind__PartiallyEmittedExpression mixins SyntaxKind {}
  declare class SyntaxKind__CommaListExpression mixins SyntaxKind {}
  declare class SyntaxKind__MergeDeclarationMarker mixins SyntaxKind {}
  declare class SyntaxKind__EndOfDeclarationMarker mixins SyntaxKind {}
  declare class SyntaxKind__Count mixins SyntaxKind {}
  declare class SyntaxKind__FirstAssignment mixins SyntaxKind {}
  declare class SyntaxKind__LastAssignment mixins SyntaxKind {}
  declare class SyntaxKind__FirstCompoundAssignment mixins SyntaxKind {}
  declare class SyntaxKind__LastCompoundAssignment mixins SyntaxKind {}
  declare class SyntaxKind__FirstReservedWord mixins SyntaxKind {}
  declare class SyntaxKind__LastReservedWord mixins SyntaxKind {}
  declare class SyntaxKind__FirstKeyword mixins SyntaxKind {}
  declare class SyntaxKind__LastKeyword mixins SyntaxKind {}
  declare class SyntaxKind__FirstFutureReservedWord mixins SyntaxKind {}
  declare class SyntaxKind__LastFutureReservedWord mixins SyntaxKind {}
  declare class SyntaxKind__FirstTypeNode mixins SyntaxKind {}
  declare class SyntaxKind__LastTypeNode mixins SyntaxKind {}
  declare class SyntaxKind__FirstPunctuation mixins SyntaxKind {}
  declare class SyntaxKind__LastPunctuation mixins SyntaxKind {}
  declare class SyntaxKind__FirstToken mixins SyntaxKind {}
  declare class SyntaxKind__LastToken mixins SyntaxKind {}
  declare class SyntaxKind__FirstTriviaToken mixins SyntaxKind {}
  declare class SyntaxKind__LastTriviaToken mixins SyntaxKind {}
  declare class SyntaxKind__FirstLiteralToken mixins SyntaxKind {}
  declare class SyntaxKind__LastLiteralToken mixins SyntaxKind {}
  declare class SyntaxKind__FirstTemplateToken mixins SyntaxKind {}
  declare class SyntaxKind__LastTemplateToken mixins SyntaxKind {}
  declare class SyntaxKind__FirstBinaryOperator mixins SyntaxKind {}
  declare class SyntaxKind__LastBinaryOperator mixins SyntaxKind {}
  declare class SyntaxKind__FirstNode mixins SyntaxKind {}
  declare class SyntaxKind__FirstJSDocNode mixins SyntaxKind {}
  declare class SyntaxKind__LastJSDocNode mixins SyntaxKind {}
  declare class SyntaxKind__FirstJSDocTagNode mixins SyntaxKind {}
  declare class SyntaxKind__LastJSDocTagNode mixins SyntaxKind {}

  declare class NodeFlags {
    static +None: Class<NodeFlags__None> & NodeFlags__None & 0; // 0
    static +Let: Class<NodeFlags__Let> & NodeFlags__Let & 1; // 1
    static +Const: Class<NodeFlags__Const> & NodeFlags__Const & 2; // 2
    static +NestedNamespace: Class<NodeFlags__NestedNamespace> &
      NodeFlags__NestedNamespace &
      4; // 4
    static +Synthesized: Class<NodeFlags__Synthesized> &
      NodeFlags__Synthesized &
      8; // 8
    static +Namespace: Class<NodeFlags__Namespace> & NodeFlags__Namespace & 16; // 16
    static +ExportContext: Class<NodeFlags__ExportContext> &
      NodeFlags__ExportContext &
      32; // 32
    static +ContainsThis: Class<NodeFlags__ContainsThis> &
      NodeFlags__ContainsThis &
      64; // 64
    static +HasImplicitReturn: Class<NodeFlags__HasImplicitReturn> &
      NodeFlags__HasImplicitReturn &
      128; // 128
    static +HasExplicitReturn: Class<NodeFlags__HasExplicitReturn> &
      NodeFlags__HasExplicitReturn &
      256; // 256
    static +GlobalAugmentation: Class<NodeFlags__GlobalAugmentation> &
      NodeFlags__GlobalAugmentation &
      512; // 512
    static +HasAsyncFunctions: Class<NodeFlags__HasAsyncFunctions> &
      NodeFlags__HasAsyncFunctions &
      1024; // 1024
    static +DisallowInContext: Class<NodeFlags__DisallowInContext> &
      NodeFlags__DisallowInContext &
      2048; // 2048
    static +YieldContext: Class<NodeFlags__YieldContext> &
      NodeFlags__YieldContext &
      4096; // 4096
    static +DecoratorContext: Class<NodeFlags__DecoratorContext> &
      NodeFlags__DecoratorContext &
      8192; // 8192
    static +AwaitContext: Class<NodeFlags__AwaitContext> &
      NodeFlags__AwaitContext &
      16384; // 16384
    static +ThisNodeHasError: Class<NodeFlags__ThisNodeHasError> &
      NodeFlags__ThisNodeHasError &
      32768; // 32768
    static +JavaScriptFile: Class<NodeFlags__JavaScriptFile> &
      NodeFlags__JavaScriptFile &
      65536; // 65536
    static +ThisNodeOrAnySubNodesHasError: Class<NodeFlags__ThisNodeOrAnySubNodesHasError> &
      NodeFlags__ThisNodeOrAnySubNodesHasError &
      131072; // 131072
    static +HasAggregatedChildData: Class<NodeFlags__HasAggregatedChildData> &
      NodeFlags__HasAggregatedChildData &
      262144; // 262144
    static +JSDoc: Class<NodeFlags__JSDoc> & NodeFlags__JSDoc & 2097152; // 2097152
    static +JsonFile: Class<NodeFlags__JsonFile> &
      NodeFlags__JsonFile &
      16777216; // 16777216
    static +BlockScoped: Class<NodeFlags__BlockScoped> &
      NodeFlags__BlockScoped &
      3; // 3
    static +ReachabilityCheckFlags: Class<NodeFlags__ReachabilityCheckFlags> &
      NodeFlags__ReachabilityCheckFlags &
      384; // 384
    static +ReachabilityAndEmitFlags: Class<NodeFlags__ReachabilityAndEmitFlags> &
      NodeFlags__ReachabilityAndEmitFlags &
      1408; // 1408
    static +ContextFlags: Class<NodeFlags__ContextFlags> &
      NodeFlags__ContextFlags &
      12679168; // 12679168
    static +TypeExcludesFlags: Class<NodeFlags__TypeExcludesFlags> &
      NodeFlags__TypeExcludesFlags &
      20480; // 20480
  }

  declare class NodeFlags__None mixins NodeFlags {}
  declare class NodeFlags__Let mixins NodeFlags {}
  declare class NodeFlags__Const mixins NodeFlags {}
  declare class NodeFlags__NestedNamespace mixins NodeFlags {}
  declare class NodeFlags__Synthesized mixins NodeFlags {}
  declare class NodeFlags__Namespace mixins NodeFlags {}
  declare class NodeFlags__ExportContext mixins NodeFlags {}
  declare class NodeFlags__ContainsThis mixins NodeFlags {}
  declare class NodeFlags__HasImplicitReturn mixins NodeFlags {}
  declare class NodeFlags__HasExplicitReturn mixins NodeFlags {}
  declare class NodeFlags__GlobalAugmentation mixins NodeFlags {}
  declare class NodeFlags__HasAsyncFunctions mixins NodeFlags {}
  declare class NodeFlags__DisallowInContext mixins NodeFlags {}
  declare class NodeFlags__YieldContext mixins NodeFlags {}
  declare class NodeFlags__DecoratorContext mixins NodeFlags {}
  declare class NodeFlags__AwaitContext mixins NodeFlags {}
  declare class NodeFlags__ThisNodeHasError mixins NodeFlags {}
  declare class NodeFlags__JavaScriptFile mixins NodeFlags {}
  declare class NodeFlags__ThisNodeOrAnySubNodesHasError mixins NodeFlags {}
  declare class NodeFlags__HasAggregatedChildData mixins NodeFlags {}
  declare class NodeFlags__JSDoc mixins NodeFlags {}
  declare class NodeFlags__JsonFile mixins NodeFlags {}
  declare class NodeFlags__BlockScoped mixins NodeFlags {}
  declare class NodeFlags__ReachabilityCheckFlags mixins NodeFlags {}
  declare class NodeFlags__ReachabilityAndEmitFlags mixins NodeFlags {}
  declare class NodeFlags__ContextFlags mixins NodeFlags {}
  declare class NodeFlags__TypeExcludesFlags mixins NodeFlags {}

  declare class ModifierFlags {
    static +None: Class<ModifierFlags__None> & ModifierFlags__None & 0; // 0
    static +Export: Class<ModifierFlags__Export> & ModifierFlags__Export & 1; // 1
    static +Ambient: Class<ModifierFlags__Ambient> & ModifierFlags__Ambient & 2; // 2
    static +Public: Class<ModifierFlags__Public> & ModifierFlags__Public & 4; // 4
    static +Private: Class<ModifierFlags__Private> & ModifierFlags__Private & 8; // 8
    static +Protected: Class<ModifierFlags__Protected> &
      ModifierFlags__Protected &
      16; // 16
    static +Static: Class<ModifierFlags__Static> & ModifierFlags__Static & 32; // 32
    static +Readonly: Class<ModifierFlags__Readonly> &
      ModifierFlags__Readonly &
      64; // 64
    static +Abstract: Class<ModifierFlags__Abstract> &
      ModifierFlags__Abstract &
      128; // 128
    static +Async: Class<ModifierFlags__Async> & ModifierFlags__Async & 256; // 256
    static +Default: Class<ModifierFlags__Default> &
      ModifierFlags__Default &
      512; // 512
    static +Const: Class<ModifierFlags__Const> & ModifierFlags__Const & 2048; // 2048
    static +HasComputedFlags: Class<ModifierFlags__HasComputedFlags> &
      ModifierFlags__HasComputedFlags &
      536870912; // 536870912
    static +AccessibilityModifier: Class<ModifierFlags__AccessibilityModifier> &
      ModifierFlags__AccessibilityModifier &
      28; // 28
    static +ParameterPropertyModifier: Class<ModifierFlags__ParameterPropertyModifier> &
      ModifierFlags__ParameterPropertyModifier &
      92; // 92
    static +NonPublicAccessibilityModifier: Class<ModifierFlags__NonPublicAccessibilityModifier> &
      ModifierFlags__NonPublicAccessibilityModifier &
      24; // 24
    static +TypeScriptModifier: Class<ModifierFlags__TypeScriptModifier> &
      ModifierFlags__TypeScriptModifier &
      2270; // 2270
    static +ExportDefault: Class<ModifierFlags__ExportDefault> &
      ModifierFlags__ExportDefault &
      513; // 513
    static +All: Class<ModifierFlags__All> & ModifierFlags__All & 3071; // 3071
  }

  declare class ModifierFlags__None mixins ModifierFlags {}
  declare class ModifierFlags__Export mixins ModifierFlags {}
  declare class ModifierFlags__Ambient mixins ModifierFlags {}
  declare class ModifierFlags__Public mixins ModifierFlags {}
  declare class ModifierFlags__Private mixins ModifierFlags {}
  declare class ModifierFlags__Protected mixins ModifierFlags {}
  declare class ModifierFlags__Static mixins ModifierFlags {}
  declare class ModifierFlags__Readonly mixins ModifierFlags {}
  declare class ModifierFlags__Abstract mixins ModifierFlags {}
  declare class ModifierFlags__Async mixins ModifierFlags {}
  declare class ModifierFlags__Default mixins ModifierFlags {}
  declare class ModifierFlags__Const mixins ModifierFlags {}
  declare class ModifierFlags__HasComputedFlags mixins ModifierFlags {}
  declare class ModifierFlags__AccessibilityModifier mixins ModifierFlags {}
  declare class ModifierFlags__ParameterPropertyModifier mixins ModifierFlags {}
  declare class ModifierFlags__NonPublicAccessibilityModifier
    mixins ModifierFlags {}
  declare class ModifierFlags__TypeScriptModifier mixins ModifierFlags {}
  declare class ModifierFlags__ExportDefault mixins ModifierFlags {}
  declare class ModifierFlags__All mixins ModifierFlags {}

  declare class JsxFlags {
    static +None: Class<JsxFlags__None> & JsxFlags__None & 0; // 0
    static +IntrinsicNamedElement: Class<JsxFlags__IntrinsicNamedElement> &
      JsxFlags__IntrinsicNamedElement &
      1; // 1
    static +IntrinsicIndexedElement: Class<JsxFlags__IntrinsicIndexedElement> &
      JsxFlags__IntrinsicIndexedElement &
      2; // 2
    static +IntrinsicElement: Class<JsxFlags__IntrinsicElement> &
      JsxFlags__IntrinsicElement &
      3; // 3
  }

  declare class JsxFlags__None mixins JsxFlags {}
  declare class JsxFlags__IntrinsicNamedElement mixins JsxFlags {}
  declare class JsxFlags__IntrinsicIndexedElement mixins JsxFlags {}
  declare class JsxFlags__IntrinsicElement mixins JsxFlags {}

  declare type Node = {
    ...$Exact<TextRange>,

    kind: SyntaxKind,
    flags: NodeFlags,
    decorators?: NodeArray<Decorator>,
    modifiers?: ModifiersArray,
    parent: any,
    getSourceFile(): SourceFile,
    getChildCount(sourceFile?: SourceFile): number,
    getChildAt(index: number, sourceFile?: SourceFile): Node,
    getChildren(sourceFile?: SourceFile): Node[],
    getStart(sourceFile?: SourceFile, includeJsDocComment?: boolean): number,
    getFullStart(): number,
    getEnd(): number,
    getWidth(sourceFile?: SourceFileLike): number,
    getFullWidth(): number,
    getLeadingTriviaWidth(sourceFile?: SourceFile): number,
    getFullText(sourceFile?: SourceFile): string,
    getText(sourceFile?: SourceFile): string,
    getFirstToken(sourceFile?: SourceFile): Node | void,
    getLastToken(sourceFile?: SourceFile): Node | void,
    forEachChild<T>(
      cbNode: (node: Node) => T | void,
      cbNodeArray?: (nodes: NodeArray<Node>) => T | void
    ): T | void
  };

  declare type JSDocContainer = {};

  declare type HasJSDoc =
    | ParameterDeclaration
    | CallSignatureDeclaration
    | ConstructSignatureDeclaration
    | MethodSignature
    | PropertySignature
    | ArrowFunction
    | ParenthesizedExpression
    | SpreadAssignment
    | ShorthandPropertyAssignment
    | PropertyAssignment
    | FunctionExpression
    | LabeledStatement
    | ExpressionStatement
    | VariableStatement
    | FunctionDeclaration
    | ConstructorDeclaration
    | MethodDeclaration
    | PropertyDeclaration
    | AccessorDeclaration
    | ClassLikeDeclaration
    | InterfaceDeclaration
    | TypeAliasDeclaration
    | EnumMember
    | EnumDeclaration
    | ModuleDeclaration
    | ImportEqualsDeclaration
    | IndexSignatureDeclaration
    | FunctionTypeNode
    | ConstructorTypeNode
    | JSDocFunctionType
    | ExportDeclaration
    | EndOfFileToken;
  declare type HasType =
    | SignatureDeclaration
    | VariableDeclaration
    | ParameterDeclaration
    | PropertySignature
    | PropertyDeclaration
    | TypePredicateNode
    | ParenthesizedTypeNode
    | TypeOperatorNode
    | MappedTypeNode
    | AssertionExpression
    | TypeAliasDeclaration
    | JSDocTypeExpression
    | JSDocNonNullableType
    | JSDocNullableType
    | JSDocOptionalType
    | JSDocVariadicType;
  declare type HasInitializer =
    | HasExpressionInitializer
    | ForStatement
    | ForInStatement
    | ForOfStatement
    | JsxAttribute;
  declare type HasExpressionInitializer =
    | VariableDeclaration
    | ParameterDeclaration
    | BindingElement
    | PropertySignature
    | PropertyDeclaration
    | PropertyAssignment
    | EnumMember;
  declare type NodeArray<T: $ReadOnly<Node>> = {
    ...$Exact<TextRange>,

    hasTrailingComma?: boolean
  } & $ReadOnlyArray<T>;

  declare type Token<TKind: SyntaxKind> = {
    ...$Exact<Node>,

    kind: TKind
  };

  declare type DotDotDotToken = Token<SyntaxKind.DotDotDotToken>;
  declare type QuestionToken = Token<SyntaxKind.QuestionToken>;
  declare type ExclamationToken = Token<SyntaxKind.ExclamationToken>;
  declare type ColonToken = Token<SyntaxKind.ColonToken>;
  declare type EqualsToken = Token<SyntaxKind.EqualsToken>;
  declare type AsteriskToken = Token<SyntaxKind.AsteriskToken>;
  declare type EqualsGreaterThanToken = Token<SyntaxKind.EqualsGreaterThanToken>;
  declare type EndOfFileToken = Token<SyntaxKind.EndOfFileToken> &
    JSDocContainer;
  declare type ReadonlyToken = Token<SyntaxKind.ReadonlyKeyword>;
  declare type AwaitKeywordToken = Token<SyntaxKind.AwaitKeyword>;
  declare type PlusToken = Token<SyntaxKind.PlusToken>;
  declare type MinusToken = Token<SyntaxKind.MinusToken>;
  declare type Modifier =
    | Token<SyntaxKind.AbstractKeyword>
    | Token<SyntaxKind.AsyncKeyword>
    | Token<SyntaxKind.ConstKeyword>
    | Token<SyntaxKind.DeclareKeyword>
    | Token<SyntaxKind.DefaultKeyword>
    | Token<SyntaxKind.ExportKeyword>
    | Token<SyntaxKind.PublicKeyword>
    | Token<SyntaxKind.PrivateKeyword>
    | Token<SyntaxKind.ProtectedKeyword>
    | Token<SyntaxKind.ReadonlyKeyword>
    | Token<SyntaxKind.StaticKeyword>;
  declare type ModifiersArray = NodeArray<Modifier>;
  declare type Identifier = {
    ...$Exact<PrimaryExpression>,
    ...$Exact<Declaration>,

    kind: SyntaxKind.Identifier,
    escapedText: __String,
    originalKeywordKind?: SyntaxKind,
    isInJSDocNamespace?: boolean,
    text: string
  };

  declare type TransientIdentifier = {
    ...$Exact<Identifier>,

    resolvedSymbol: Symbol
  };

  declare type QualifiedName = {
    ...$Exact<Node>,

    kind: SyntaxKind.QualifiedName,
    left: EntityName,
    right: Identifier
  };

  declare type EntityName = Identifier | QualifiedName;
  declare type PropertyName =
    | Identifier
    | StringLiteral
    | NumericLiteral
    | ComputedPropertyName;
  declare type DeclarationName =
    | Identifier
    | StringLiteralLike
    | NumericLiteral
    | ComputedPropertyName
    | BindingPattern;
  declare type Declaration = {
    ...$Exact<Node>,

    _declarationBrand: any
  };

  declare type NamedDeclaration = {
    ...$Exact<Declaration>,

    name?: DeclarationName
  };

  declare type DeclarationStatement = {
    ...$Exact<NamedDeclaration>,
    ...$Exact<Statement>,

    name?: Identifier | StringLiteral | NumericLiteral
  };

  declare type ComputedPropertyName = {
    ...$Exact<Node>,

    parent: Declaration,
    kind: SyntaxKind.ComputedPropertyName,
    expression: Expression
  };

  declare type Decorator = {
    ...$Exact<Node>,

    kind: SyntaxKind.Decorator,
    parent: NamedDeclaration,
    expression: LeftHandSideExpression
  };

  declare type TypeParameterDeclaration = {
    ...$Exact<NamedDeclaration>,

    kind: SyntaxKind.TypeParameter,
    parent: DeclarationWithTypeParameterChildren | InferTypeNode,
    name: Identifier,
    constraint?: TypeNode,
    default?: TypeNode,
    expression?: Expression
  };

  declare type SignatureDeclarationBase = {
    ...$Exact<NamedDeclaration>,
    ...$Exact<JSDocContainer>,

    kind: $ElementType<SignatureDeclaration, "kind">,
    name?: PropertyName,
    typeParameters?: NodeArray<TypeParameterDeclaration>,
    parameters: NodeArray<ParameterDeclaration>,
    type?: TypeNode
  };

  declare type SignatureDeclaration =
    | CallSignatureDeclaration
    | ConstructSignatureDeclaration
    | MethodSignature
    | IndexSignatureDeclaration
    | FunctionTypeNode
    | ConstructorTypeNode
    | JSDocFunctionType
    | FunctionDeclaration
    | MethodDeclaration
    | ConstructorDeclaration
    | AccessorDeclaration
    | FunctionExpression
    | ArrowFunction;
  declare type CallSignatureDeclaration = {
    ...$Exact<SignatureDeclarationBase>,
    ...$Exact<TypeElement>,

    kind: SyntaxKind.CallSignature
  };

  declare type ConstructSignatureDeclaration = {
    ...$Exact<SignatureDeclarationBase>,
    ...$Exact<TypeElement>,

    kind: SyntaxKind.ConstructSignature
  };

  declare type BindingName = Identifier | BindingPattern;
  declare type VariableDeclaration = {
    ...$Exact<NamedDeclaration>,

    kind: SyntaxKind.VariableDeclaration,
    parent: VariableDeclarationList | CatchClause,
    name: BindingName,
    exclamationToken?: ExclamationToken,
    type?: TypeNode,
    initializer?: Expression
  };

  declare type VariableDeclarationList = {
    ...$Exact<Node>,

    kind: SyntaxKind.VariableDeclarationList,
    parent: VariableStatement | ForStatement | ForOfStatement | ForInStatement,
    declarations: NodeArray<VariableDeclaration>
  };

  declare type ParameterDeclaration = {
    ...$Exact<NamedDeclaration>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.Parameter,
    parent: SignatureDeclaration,
    dotDotDotToken?: DotDotDotToken,
    name: BindingName,
    questionToken?: QuestionToken,
    type?: TypeNode,
    initializer?: Expression
  };

  declare type BindingElement = {
    ...$Exact<NamedDeclaration>,

    kind: SyntaxKind.BindingElement,
    parent: BindingPattern,
    propertyName?: PropertyName,
    dotDotDotToken?: DotDotDotToken,
    name: BindingName,
    initializer?: Expression
  };

  declare type PropertySignature = {
    ...$Exact<TypeElement>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.PropertySignature,
    name: PropertyName,
    questionToken?: QuestionToken,
    type?: TypeNode,
    initializer?: Expression
  };

  declare type PropertyDeclaration = {
    ...$Exact<ClassElement>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.PropertyDeclaration,
    parent: ClassLikeDeclaration,
    name: PropertyName,
    questionToken?: QuestionToken,
    exclamationToken?: ExclamationToken,
    type?: TypeNode,
    initializer?: Expression
  };

  declare type ObjectLiteralElement = {
    ...$Exact<NamedDeclaration>,

    _objectLiteralBrandBrand: any,
    name?: PropertyName
  };

  declare type ObjectLiteralElementLike =
    | PropertyAssignment
    | ShorthandPropertyAssignment
    | SpreadAssignment
    | MethodDeclaration
    | AccessorDeclaration;
  declare type PropertyAssignment = {
    ...$Exact<ObjectLiteralElement>,
    ...$Exact<JSDocContainer>,

    parent: ObjectLiteralExpression,
    kind: SyntaxKind.PropertyAssignment,
    name: PropertyName,
    questionToken?: QuestionToken,
    initializer: Expression
  };

  declare type ShorthandPropertyAssignment = {
    ...$Exact<ObjectLiteralElement>,
    ...$Exact<JSDocContainer>,

    parent: ObjectLiteralExpression,
    kind: SyntaxKind.ShorthandPropertyAssignment,
    name: Identifier,
    questionToken?: QuestionToken,
    exclamationToken?: ExclamationToken,
    equalsToken?: Token<SyntaxKind.EqualsToken>,
    objectAssignmentInitializer?: Expression
  };

  declare type SpreadAssignment = {
    ...$Exact<ObjectLiteralElement>,
    ...$Exact<JSDocContainer>,

    parent: ObjectLiteralExpression,
    kind: SyntaxKind.SpreadAssignment,
    expression: Expression
  };

  declare type VariableLikeDeclaration =
    | VariableDeclaration
    | ParameterDeclaration
    | BindingElement
    | PropertyDeclaration
    | PropertyAssignment
    | PropertySignature
    | JsxAttribute
    | ShorthandPropertyAssignment
    | EnumMember
    | JSDocPropertyTag
    | JSDocParameterTag;
  declare type PropertyLikeDeclaration = {
    ...$Exact<NamedDeclaration>,

    name: PropertyName
  };

  declare type ObjectBindingPattern = {
    ...$Exact<Node>,

    kind: SyntaxKind.ObjectBindingPattern,
    parent: VariableDeclaration | ParameterDeclaration | BindingElement,
    elements: NodeArray<BindingElement>
  };

  declare type ArrayBindingPattern = {
    ...$Exact<Node>,

    kind: SyntaxKind.ArrayBindingPattern,
    parent: VariableDeclaration | ParameterDeclaration | BindingElement,
    elements: NodeArray<ArrayBindingElement>
  };

  declare type BindingPattern = ObjectBindingPattern | ArrayBindingPattern;
  declare type ArrayBindingElement = BindingElement | OmittedExpression;
  declare type FunctionLikeDeclarationBase = {
    ...$Exact<SignatureDeclarationBase>,

    _functionLikeDeclarationBrand: any,
    asteriskToken?: AsteriskToken,
    questionToken?: QuestionToken,
    exclamationToken?: ExclamationToken,
    body?: Block | Expression
  };

  declare type FunctionLikeDeclaration =
    | FunctionDeclaration
    | MethodDeclaration
    | GetAccessorDeclaration
    | SetAccessorDeclaration
    | ConstructorDeclaration
    | FunctionExpression
    | ArrowFunction;
  declare type FunctionLike = SignatureDeclaration;
  declare type FunctionDeclaration = {
    ...$Exact<FunctionLikeDeclarationBase>,
    ...$Exact<DeclarationStatement>,

    kind: SyntaxKind.FunctionDeclaration,
    name?: Identifier,
    body?: FunctionBody
  };

  declare type MethodSignature = {
    ...$Exact<SignatureDeclarationBase>,
    ...$Exact<TypeElement>,

    kind: SyntaxKind.MethodSignature,
    parent: ObjectTypeDeclaration,
    name: PropertyName
  };

  declare type MethodDeclaration = {
    ...$Exact<FunctionLikeDeclarationBase>,
    ...$Exact<ClassElement>,
    ...$Exact<ObjectLiteralElement>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.MethodDeclaration,
    parent: ClassLikeDeclaration | ObjectLiteralExpression,
    name: PropertyName,
    body?: FunctionBody
  };

  declare type ConstructorDeclaration = {
    ...$Exact<FunctionLikeDeclarationBase>,
    ...$Exact<ClassElement>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.Constructor,
    parent: ClassLikeDeclaration,
    body?: FunctionBody
  };

  declare type SemicolonClassElement = {
    ...$Exact<ClassElement>,

    kind: SyntaxKind.SemicolonClassElement,
    parent: ClassLikeDeclaration
  };

  declare type GetAccessorDeclaration = {
    ...$Exact<FunctionLikeDeclarationBase>,
    ...$Exact<ClassElement>,
    ...$Exact<ObjectLiteralElement>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.GetAccessor,
    parent: ClassLikeDeclaration | ObjectLiteralExpression,
    name: PropertyName,
    body?: FunctionBody
  };

  declare type SetAccessorDeclaration = {
    ...$Exact<FunctionLikeDeclarationBase>,
    ...$Exact<ClassElement>,
    ...$Exact<ObjectLiteralElement>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.SetAccessor,
    parent: ClassLikeDeclaration | ObjectLiteralExpression,
    name: PropertyName,
    body?: FunctionBody
  };

  declare type AccessorDeclaration =
    | GetAccessorDeclaration
    | SetAccessorDeclaration;
  declare type IndexSignatureDeclaration = {
    ...$Exact<SignatureDeclarationBase>,
    ...$Exact<ClassElement>,
    ...$Exact<TypeElement>,

    kind: SyntaxKind.IndexSignature,
    parent: ObjectTypeDeclaration
  };

  declare type TypeNode = {
    ...$Exact<Node>,

    _typeNodeBrand: any
  };

  declare type KeywordTypeNode = {
    ...$Exact<TypeNode>,

    kind:
      | SyntaxKind.AnyKeyword
      | SyntaxKind.UnknownKeyword
      | SyntaxKind.NumberKeyword
      | SyntaxKind.BigIntKeyword
      | SyntaxKind.ObjectKeyword
      | SyntaxKind.BooleanKeyword
      | SyntaxKind.StringKeyword
      | SyntaxKind.SymbolKeyword
      | SyntaxKind.ThisKeyword
      | SyntaxKind.VoidKeyword
      | SyntaxKind.UndefinedKeyword
      | SyntaxKind.NullKeyword
      | SyntaxKind.NeverKeyword
  };

  declare type ImportTypeNode = {
    ...$Exact<NodeWithTypeArguments>,

    kind: SyntaxKind.ImportType,
    isTypeOf?: boolean,
    argument: TypeNode,
    qualifier?: EntityName
  };

  declare type ThisTypeNode = {
    ...$Exact<TypeNode>,

    kind: SyntaxKind.ThisType
  };

  declare type FunctionOrConstructorTypeNode =
    | FunctionTypeNode
    | ConstructorTypeNode;
  declare type FunctionOrConstructorTypeNodeBase = {
    ...$Exact<TypeNode>,
    ...$Exact<SignatureDeclarationBase>,

    kind: SyntaxKind.FunctionType | SyntaxKind.ConstructorType,
    type: TypeNode
  };

  declare type FunctionTypeNode = {
    ...$Exact<FunctionOrConstructorTypeNodeBase>,

    kind: SyntaxKind.FunctionType
  };

  declare type ConstructorTypeNode = {
    ...$Exact<FunctionOrConstructorTypeNodeBase>,

    kind: SyntaxKind.ConstructorType
  };

  declare type NodeWithTypeArguments = {
    ...$Exact<TypeNode>,

    typeArguments?: NodeArray<TypeNode>
  };

  declare type TypeReferenceType =
    | TypeReferenceNode
    | ExpressionWithTypeArguments;
  declare type TypeReferenceNode = {
    ...$Exact<NodeWithTypeArguments>,

    kind: SyntaxKind.TypeReference,
    typeName: EntityName
  };

  declare type TypePredicateNode = {
    ...$Exact<TypeNode>,

    kind: SyntaxKind.TypePredicate,
    parent: SignatureDeclaration | JSDocTypeExpression,
    parameterName: Identifier | ThisTypeNode,
    type: TypeNode
  };

  declare type TypeQueryNode = {
    ...$Exact<TypeNode>,

    kind: SyntaxKind.TypeQuery,
    exprName: EntityName
  };

  declare type TypeLiteralNode = {
    ...$Exact<TypeNode>,
    ...$Exact<Declaration>,

    kind: SyntaxKind.TypeLiteral,
    members: NodeArray<TypeElement>
  };

  declare type ArrayTypeNode = {
    ...$Exact<TypeNode>,

    kind: SyntaxKind.ArrayType,
    elementType: TypeNode
  };

  declare type TupleTypeNode = {
    ...$Exact<TypeNode>,

    kind: SyntaxKind.TupleType,
    elementTypes: NodeArray<TypeNode>
  };

  declare type OptionalTypeNode = {
    ...$Exact<TypeNode>,

    kind: SyntaxKind.OptionalType,
    type: TypeNode
  };

  declare type RestTypeNode = {
    ...$Exact<TypeNode>,

    kind: SyntaxKind.RestType,
    type: TypeNode
  };

  declare type UnionOrIntersectionTypeNode =
    | UnionTypeNode
    | IntersectionTypeNode;
  declare type UnionTypeNode = {
    ...$Exact<TypeNode>,

    kind: SyntaxKind.UnionType,
    types: NodeArray<TypeNode>
  };

  declare type IntersectionTypeNode = {
    ...$Exact<TypeNode>,

    kind: SyntaxKind.IntersectionType,
    types: NodeArray<TypeNode>
  };

  declare type ConditionalTypeNode = {
    ...$Exact<TypeNode>,

    kind: SyntaxKind.ConditionalType,
    checkType: TypeNode,
    extendsType: TypeNode,
    trueType: TypeNode,
    falseType: TypeNode
  };

  declare type InferTypeNode = {
    ...$Exact<TypeNode>,

    kind: SyntaxKind.InferType,
    typeParameter: TypeParameterDeclaration
  };

  declare type ParenthesizedTypeNode = {
    ...$Exact<TypeNode>,

    kind: SyntaxKind.ParenthesizedType,
    type: TypeNode
  };

  declare type TypeOperatorNode = {
    ...$Exact<TypeNode>,

    kind: SyntaxKind.TypeOperator,
    operator: SyntaxKind.KeyOfKeyword | SyntaxKind.UniqueKeyword,
    type: TypeNode
  };

  declare type IndexedAccessTypeNode = {
    ...$Exact<TypeNode>,

    kind: SyntaxKind.IndexedAccessType,
    objectType: TypeNode,
    indexType: TypeNode
  };

  declare type MappedTypeNode = {
    ...$Exact<TypeNode>,
    ...$Exact<Declaration>,

    kind: SyntaxKind.MappedType,
    readonlyToken?: ReadonlyToken | PlusToken | MinusToken,
    typeParameter: TypeParameterDeclaration,
    questionToken?: QuestionToken | PlusToken | MinusToken,
    type?: TypeNode
  };

  declare type LiteralTypeNode = {
    ...$Exact<TypeNode>,

    kind: SyntaxKind.LiteralType,
    literal: BooleanLiteral | LiteralExpression | PrefixUnaryExpression
  };

  declare type StringLiteral = {
    ...$Exact<LiteralExpression>,

    kind: SyntaxKind.StringLiteral
  };

  declare type StringLiteralLike =
    | StringLiteral
    | NoSubstitutionTemplateLiteral;
  declare type Expression = {
    ...$Exact<Node>,

    _expressionBrand: any
  };

  declare type OmittedExpression = {
    ...$Exact<Expression>,

    kind: SyntaxKind.OmittedExpression
  };

  declare type PartiallyEmittedExpression = {
    ...$Exact<LeftHandSideExpression>,

    kind: SyntaxKind.PartiallyEmittedExpression,
    expression: Expression
  };

  declare type UnaryExpression = {
    ...$Exact<Expression>,

    _unaryExpressionBrand: any
  };

  declare type IncrementExpression = UpdateExpression;
  declare type UpdateExpression = {
    ...$Exact<UnaryExpression>,

    _updateExpressionBrand: any
  };

  declare type PrefixUnaryOperator =
    | SyntaxKind.PlusPlusToken
    | SyntaxKind.MinusMinusToken
    | SyntaxKind.PlusToken
    | SyntaxKind.MinusToken
    | SyntaxKind.TildeToken
    | SyntaxKind.ExclamationToken;
  declare type PrefixUnaryExpression = {
    ...$Exact<UpdateExpression>,

    kind: SyntaxKind.PrefixUnaryExpression,
    operator: PrefixUnaryOperator,
    operand: UnaryExpression
  };

  declare type PostfixUnaryOperator =
    | SyntaxKind.PlusPlusToken
    | SyntaxKind.MinusMinusToken;
  declare type PostfixUnaryExpression = {
    ...$Exact<UpdateExpression>,

    kind: SyntaxKind.PostfixUnaryExpression,
    operand: LeftHandSideExpression,
    operator: PostfixUnaryOperator
  };

  declare type LeftHandSideExpression = {
    ...$Exact<UpdateExpression>,

    _leftHandSideExpressionBrand: any
  };

  declare type MemberExpression = {
    ...$Exact<LeftHandSideExpression>,

    _memberExpressionBrand: any
  };

  declare type PrimaryExpression = {
    ...$Exact<MemberExpression>,

    _primaryExpressionBrand: any
  };

  declare type NullLiteral = {
    ...$Exact<PrimaryExpression>,
    ...$Exact<TypeNode>,

    kind: SyntaxKind.NullKeyword
  };

  declare type BooleanLiteral = {
    ...$Exact<PrimaryExpression>,
    ...$Exact<TypeNode>,

    kind: SyntaxKind.TrueKeyword | SyntaxKind.FalseKeyword
  };

  declare type ThisExpression = {
    ...$Exact<PrimaryExpression>,
    ...$Exact<KeywordTypeNode>,

    kind: SyntaxKind.ThisKeyword
  };

  declare type SuperExpression = {
    ...$Exact<PrimaryExpression>,

    kind: SyntaxKind.SuperKeyword
  };

  declare type ImportExpression = {
    ...$Exact<PrimaryExpression>,

    kind: SyntaxKind.ImportKeyword
  };

  declare type DeleteExpression = {
    ...$Exact<UnaryExpression>,

    kind: SyntaxKind.DeleteExpression,
    expression: UnaryExpression
  };

  declare type TypeOfExpression = {
    ...$Exact<UnaryExpression>,

    kind: SyntaxKind.TypeOfExpression,
    expression: UnaryExpression
  };

  declare type VoidExpression = {
    ...$Exact<UnaryExpression>,

    kind: SyntaxKind.VoidExpression,
    expression: UnaryExpression
  };

  declare type AwaitExpression = {
    ...$Exact<UnaryExpression>,

    kind: SyntaxKind.AwaitExpression,
    expression: UnaryExpression
  };

  declare type YieldExpression = {
    ...$Exact<Expression>,

    kind: SyntaxKind.YieldExpression,
    asteriskToken?: AsteriskToken,
    expression?: Expression
  };

  declare type SyntheticExpression = {
    ...$Exact<Expression>,

    kind: SyntaxKind.SyntheticExpression,
    isSpread: boolean,
    type: Type
  };

  declare type ExponentiationOperator = SyntaxKind.AsteriskAsteriskToken;
  declare type MultiplicativeOperator =
    | SyntaxKind.AsteriskToken
    | SyntaxKind.SlashToken
    | SyntaxKind.PercentToken;
  declare type MultiplicativeOperatorOrHigher =
    | ExponentiationOperator
    | MultiplicativeOperator;
  declare type AdditiveOperator = SyntaxKind.PlusToken | SyntaxKind.MinusToken;
  declare type AdditiveOperatorOrHigher =
    | MultiplicativeOperatorOrHigher
    | AdditiveOperator;
  declare type ShiftOperator =
    | SyntaxKind.LessThanLessThanToken
    | SyntaxKind.GreaterThanGreaterThanToken
    | SyntaxKind.GreaterThanGreaterThanGreaterThanToken;
  declare type ShiftOperatorOrHigher = AdditiveOperatorOrHigher | ShiftOperator;
  declare type RelationalOperator =
    | SyntaxKind.LessThanToken
    | SyntaxKind.LessThanEqualsToken
    | SyntaxKind.GreaterThanToken
    | SyntaxKind.GreaterThanEqualsToken
    | SyntaxKind.InstanceOfKeyword
    | SyntaxKind.InKeyword;
  declare type RelationalOperatorOrHigher =
    | ShiftOperatorOrHigher
    | RelationalOperator;
  declare type EqualityOperator =
    | SyntaxKind.EqualsEqualsToken
    | SyntaxKind.EqualsEqualsEqualsToken
    | SyntaxKind.ExclamationEqualsEqualsToken
    | SyntaxKind.ExclamationEqualsToken;
  declare type EqualityOperatorOrHigher =
    | RelationalOperatorOrHigher
    | EqualityOperator;
  declare type BitwiseOperator =
    | SyntaxKind.AmpersandToken
    | SyntaxKind.BarToken
    | SyntaxKind.CaretToken;
  declare type BitwiseOperatorOrHigher =
    | EqualityOperatorOrHigher
    | BitwiseOperator;
  declare type LogicalOperator =
    | SyntaxKind.AmpersandAmpersandToken
    | SyntaxKind.BarBarToken;
  declare type LogicalOperatorOrHigher =
    | BitwiseOperatorOrHigher
    | LogicalOperator;
  declare type CompoundAssignmentOperator =
    | SyntaxKind.PlusEqualsToken
    | SyntaxKind.MinusEqualsToken
    | SyntaxKind.AsteriskAsteriskEqualsToken
    | SyntaxKind.AsteriskEqualsToken
    | SyntaxKind.SlashEqualsToken
    | SyntaxKind.PercentEqualsToken
    | SyntaxKind.AmpersandEqualsToken
    | SyntaxKind.BarEqualsToken
    | SyntaxKind.CaretEqualsToken
    | SyntaxKind.LessThanLessThanEqualsToken
    | SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken
    | SyntaxKind.GreaterThanGreaterThanEqualsToken;
  declare type AssignmentOperator =
    | SyntaxKind.EqualsToken
    | CompoundAssignmentOperator;
  declare type AssignmentOperatorOrHigher =
    | LogicalOperatorOrHigher
    | AssignmentOperator;
  declare type BinaryOperator =
    | AssignmentOperatorOrHigher
    | SyntaxKind.CommaToken;
  declare type BinaryOperatorToken = Token<BinaryOperator>;
  declare type BinaryExpression = {
    ...$Exact<Expression>,
    ...$Exact<Declaration>,

    kind: SyntaxKind.BinaryExpression,
    left: Expression,
    operatorToken: BinaryOperatorToken,
    right: Expression
  };

  declare type AssignmentOperatorToken = Token<AssignmentOperator>;
  declare type AssignmentExpression<TOperator: AssignmentOperatorToken> = {
    ...$Exact<BinaryExpression>,

    left: LeftHandSideExpression,
    operatorToken: TOperator
  };

  declare type ObjectDestructuringAssignment = {
    ...$Exact<AssignmentExpression<EqualsToken>>,

    left: ObjectLiteralExpression
  };

  declare type ArrayDestructuringAssignment = {
    ...$Exact<AssignmentExpression<EqualsToken>>,

    left: ArrayLiteralExpression
  };

  declare type DestructuringAssignment =
    | ObjectDestructuringAssignment
    | ArrayDestructuringAssignment;
  declare type BindingOrAssignmentElement =
    | VariableDeclaration
    | ParameterDeclaration
    | BindingElement
    | PropertyAssignment
    | ShorthandPropertyAssignment
    | SpreadAssignment
    | OmittedExpression
    | SpreadElement
    | ArrayLiteralExpression
    | ObjectLiteralExpression
    | AssignmentExpression<EqualsToken>
    | Identifier
    | PropertyAccessExpression
    | ElementAccessExpression;
  declare type BindingOrAssignmentElementRestIndicator =
    | DotDotDotToken
    | SpreadElement
    | SpreadAssignment;
  declare type BindingOrAssignmentElementTarget =
    | BindingOrAssignmentPattern
    | Identifier
    | PropertyAccessExpression
    | ElementAccessExpression
    | OmittedExpression;
  declare type ObjectBindingOrAssignmentPattern =
    | ObjectBindingPattern
    | ObjectLiteralExpression;
  declare type ArrayBindingOrAssignmentPattern =
    | ArrayBindingPattern
    | ArrayLiteralExpression;
  declare type AssignmentPattern =
    | ObjectLiteralExpression
    | ArrayLiteralExpression;
  declare type BindingOrAssignmentPattern =
    | ObjectBindingOrAssignmentPattern
    | ArrayBindingOrAssignmentPattern;
  declare type ConditionalExpression = {
    ...$Exact<Expression>,

    kind: SyntaxKind.ConditionalExpression,
    condition: Expression,
    questionToken: QuestionToken,
    whenTrue: Expression,
    colonToken: ColonToken,
    whenFalse: Expression
  };

  declare type FunctionBody = Block;
  declare type ConciseBody = FunctionBody | Expression;
  declare type FunctionExpression = {
    ...$Exact<PrimaryExpression>,
    ...$Exact<FunctionLikeDeclarationBase>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.FunctionExpression,
    name?: Identifier,
    body: FunctionBody
  };

  declare type ArrowFunction = {
    ...$Exact<Expression>,
    ...$Exact<FunctionLikeDeclarationBase>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.ArrowFunction,
    equalsGreaterThanToken: EqualsGreaterThanToken,
    body: ConciseBody,
    name: empty
  };

  declare type LiteralLikeNode = {
    ...$Exact<Node>,

    text: string,
    isUnterminated?: boolean,
    hasExtendedUnicodeEscape?: boolean
  };

  declare type LiteralExpression = {
    ...$Exact<LiteralLikeNode>,
    ...$Exact<PrimaryExpression>,

    _literalExpressionBrand: any
  };

  declare type RegularExpressionLiteral = {
    ...$Exact<LiteralExpression>,

    kind: SyntaxKind.RegularExpressionLiteral
  };

  declare type NoSubstitutionTemplateLiteral = {
    ...$Exact<LiteralExpression>,

    kind: SyntaxKind.NoSubstitutionTemplateLiteral
  };

  declare type NumericLiteral = {
    ...$Exact<LiteralExpression>,

    kind: SyntaxKind.NumericLiteral
  };

  declare type BigIntLiteral = {
    ...$Exact<LiteralExpression>,

    kind: SyntaxKind.BigIntLiteral
  };

  declare type TemplateHead = {
    ...$Exact<LiteralLikeNode>,

    kind: SyntaxKind.TemplateHead,
    parent: TemplateExpression
  };

  declare type TemplateMiddle = {
    ...$Exact<LiteralLikeNode>,

    kind: SyntaxKind.TemplateMiddle,
    parent: TemplateSpan
  };

  declare type TemplateTail = {
    ...$Exact<LiteralLikeNode>,

    kind: SyntaxKind.TemplateTail,
    parent: TemplateSpan
  };

  declare type TemplateLiteral =
    | TemplateExpression
    | NoSubstitutionTemplateLiteral;
  declare type TemplateExpression = {
    ...$Exact<PrimaryExpression>,

    kind: SyntaxKind.TemplateExpression,
    head: TemplateHead,
    templateSpans: NodeArray<TemplateSpan>
  };

  declare type TemplateSpan = {
    ...$Exact<Node>,

    kind: SyntaxKind.TemplateSpan,
    parent: TemplateExpression,
    expression: Expression,
    literal: TemplateMiddle | TemplateTail
  };

  declare type ParenthesizedExpression = {
    ...$Exact<PrimaryExpression>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.ParenthesizedExpression,
    expression: Expression
  };

  declare type ArrayLiteralExpression = {
    ...$Exact<PrimaryExpression>,

    kind: SyntaxKind.ArrayLiteralExpression,
    elements: NodeArray<Expression>
  };

  declare type SpreadElement = {
    ...$Exact<Expression>,

    kind: SyntaxKind.SpreadElement,
    parent: ArrayLiteralExpression | CallExpression | NewExpression,
    expression: Expression
  };

  declare type ObjectLiteralExpressionBase<T: ObjectLiteralElement> = {
    ...$Exact<PrimaryExpression>,
    ...$Exact<Declaration>,

    properties: NodeArray<T>
  };

  declare type ObjectLiteralExpression = {
    ...$Exact<ObjectLiteralExpressionBase<ObjectLiteralElementLike>>,

    kind: SyntaxKind.ObjectLiteralExpression
  };

  declare type EntityNameExpression =
    | Identifier
    | PropertyAccessEntityNameExpression;
  declare type EntityNameOrEntityNameExpression =
    | EntityName
    | EntityNameExpression;
  declare type PropertyAccessExpression = {
    ...$Exact<MemberExpression>,
    ...$Exact<NamedDeclaration>,

    kind: SyntaxKind.PropertyAccessExpression,
    expression: LeftHandSideExpression,
    name: Identifier
  };

  declare type SuperPropertyAccessExpression = {
    ...$Exact<PropertyAccessExpression>,

    expression: SuperExpression
  };

  declare type PropertyAccessEntityNameExpression = {
    ...$Exact<PropertyAccessExpression>,

    _propertyAccessExpressionLikeQualifiedNameBrand?: any,
    expression: EntityNameExpression
  };

  declare type ElementAccessExpression = {
    ...$Exact<MemberExpression>,

    kind: SyntaxKind.ElementAccessExpression,
    expression: LeftHandSideExpression,
    argumentExpression: Expression
  };

  declare type SuperElementAccessExpression = {
    ...$Exact<ElementAccessExpression>,

    expression: SuperExpression
  };

  declare type SuperProperty =
    | SuperPropertyAccessExpression
    | SuperElementAccessExpression;
  declare type CallExpression = {
    ...$Exact<LeftHandSideExpression>,
    ...$Exact<Declaration>,

    kind: SyntaxKind.CallExpression,
    expression: LeftHandSideExpression,
    typeArguments?: NodeArray<TypeNode>,
    arguments: NodeArray<Expression>
  };

  declare type SuperCall = {
    ...$Exact<CallExpression>,

    expression: SuperExpression
  };

  declare type ImportCall = {
    ...$Exact<CallExpression>,

    expression: ImportExpression
  };

  declare type ExpressionWithTypeArguments = {
    ...$Exact<NodeWithTypeArguments>,

    kind: SyntaxKind.ExpressionWithTypeArguments,
    parent: HeritageClause | JSDocAugmentsTag,
    expression: LeftHandSideExpression
  };

  declare type NewExpression = {
    ...$Exact<PrimaryExpression>,
    ...$Exact<Declaration>,

    kind: SyntaxKind.NewExpression,
    expression: LeftHandSideExpression,
    typeArguments?: NodeArray<TypeNode>,
    arguments?: NodeArray<Expression>
  };

  declare type TaggedTemplateExpression = {
    ...$Exact<MemberExpression>,

    kind: SyntaxKind.TaggedTemplateExpression,
    tag: LeftHandSideExpression,
    typeArguments?: NodeArray<TypeNode>,
    template: TemplateLiteral
  };

  declare type CallLikeExpression =
    | CallExpression
    | NewExpression
    | TaggedTemplateExpression
    | Decorator
    | JsxOpeningLikeElement;
  declare type AsExpression = {
    ...$Exact<Expression>,

    kind: SyntaxKind.AsExpression,
    expression: Expression,
    type: TypeNode
  };

  declare type TypeAssertion = {
    ...$Exact<UnaryExpression>,

    kind: SyntaxKind.TypeAssertionExpression,
    type: TypeNode,
    expression: UnaryExpression
  };

  declare type AssertionExpression = TypeAssertion | AsExpression;
  declare type NonNullExpression = {
    ...$Exact<LeftHandSideExpression>,

    kind: SyntaxKind.NonNullExpression,
    expression: Expression
  };

  declare type MetaProperty = {
    ...$Exact<PrimaryExpression>,

    kind: SyntaxKind.MetaProperty,
    keywordToken: SyntaxKind.NewKeyword | SyntaxKind.ImportKeyword,
    name: Identifier
  };

  declare type JsxElement = {
    ...$Exact<PrimaryExpression>,

    kind: SyntaxKind.JsxElement,
    openingElement: JsxOpeningElement,
    children: NodeArray<JsxChild>,
    closingElement: JsxClosingElement
  };

  declare type JsxOpeningLikeElement =
    | JsxSelfClosingElement
    | JsxOpeningElement;
  declare type JsxAttributeLike = JsxAttribute | JsxSpreadAttribute;
  declare type JsxTagNameExpression =
    | Identifier
    | ThisExpression
    | JsxTagNamePropertyAccess;
  declare type JsxTagNamePropertyAccess = {
    ...$Exact<PropertyAccessExpression>,

    expression: JsxTagNameExpression
  };

  declare type JsxAttributes = {
    ...$Exact<ObjectLiteralExpressionBase<JsxAttributeLike>>,

    parent: JsxOpeningLikeElement
  };

  declare type JsxOpeningElement = {
    ...$Exact<Expression>,

    kind: SyntaxKind.JsxOpeningElement,
    parent: JsxElement,
    tagName: JsxTagNameExpression,
    typeArguments?: NodeArray<TypeNode>,
    attributes: JsxAttributes
  };

  declare type JsxSelfClosingElement = {
    ...$Exact<PrimaryExpression>,

    kind: SyntaxKind.JsxSelfClosingElement,
    tagName: JsxTagNameExpression,
    typeArguments?: NodeArray<TypeNode>,
    attributes: JsxAttributes
  };

  declare type JsxFragment = {
    ...$Exact<PrimaryExpression>,

    kind: SyntaxKind.JsxFragment,
    openingFragment: JsxOpeningFragment,
    children: NodeArray<JsxChild>,
    closingFragment: JsxClosingFragment
  };

  declare type JsxOpeningFragment = {
    ...$Exact<Expression>,

    kind: SyntaxKind.JsxOpeningFragment,
    parent: JsxFragment
  };

  declare type JsxClosingFragment = {
    ...$Exact<Expression>,

    kind: SyntaxKind.JsxClosingFragment,
    parent: JsxFragment
  };

  declare type JsxAttribute = {
    ...$Exact<ObjectLiteralElement>,

    kind: SyntaxKind.JsxAttribute,
    parent: JsxAttributes,
    name: Identifier,
    initializer?: StringLiteral | JsxExpression
  };

  declare type JsxSpreadAttribute = {
    ...$Exact<ObjectLiteralElement>,

    kind: SyntaxKind.JsxSpreadAttribute,
    parent: JsxAttributes,
    expression: Expression
  };

  declare type JsxClosingElement = {
    ...$Exact<Node>,

    kind: SyntaxKind.JsxClosingElement,
    parent: JsxElement,
    tagName: JsxTagNameExpression
  };

  declare type JsxExpression = {
    ...$Exact<Expression>,

    kind: SyntaxKind.JsxExpression,
    parent: JsxElement | JsxAttributeLike,
    dotDotDotToken?: Token<SyntaxKind.DotDotDotToken>,
    expression?: Expression
  };

  declare type JsxText = {
    ...$Exact<Node>,

    kind: SyntaxKind.JsxText,
    containsOnlyWhiteSpaces: boolean,
    parent: JsxElement
  };

  declare type JsxChild =
    | JsxText
    | JsxExpression
    | JsxElement
    | JsxSelfClosingElement
    | JsxFragment;
  declare type Statement = {
    ...$Exact<Node>,

    _statementBrand: any
  };

  declare type NotEmittedStatement = {
    ...$Exact<Statement>,

    kind: SyntaxKind.NotEmittedStatement
  };

  declare type CommaListExpression = {
    ...$Exact<Expression>,

    kind: SyntaxKind.CommaListExpression,
    elements: NodeArray<Expression>
  };

  declare type EmptyStatement = {
    ...$Exact<Statement>,

    kind: SyntaxKind.EmptyStatement
  };

  declare type DebuggerStatement = {
    ...$Exact<Statement>,

    kind: SyntaxKind.DebuggerStatement
  };

  declare type MissingDeclaration = {
    ...$Exact<DeclarationStatement>,

    kind: SyntaxKind.MissingDeclaration,
    name?: Identifier
  };

  declare type BlockLike =
    | SourceFile
    | Block
    | ModuleBlock
    | CaseOrDefaultClause;
  declare type Block = {
    ...$Exact<Statement>,

    kind: SyntaxKind.Block,
    statements: NodeArray<Statement>
  };

  declare type VariableStatement = {
    ...$Exact<Statement>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.VariableStatement,
    declarationList: VariableDeclarationList
  };

  declare type ExpressionStatement = {
    ...$Exact<Statement>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.ExpressionStatement,
    expression: Expression
  };

  declare type IfStatement = {
    ...$Exact<Statement>,

    kind: SyntaxKind.IfStatement,
    expression: Expression,
    thenStatement: Statement,
    elseStatement?: Statement
  };

  declare type IterationStatement = {
    ...$Exact<Statement>,

    statement: Statement
  };

  declare type DoStatement = {
    ...$Exact<IterationStatement>,

    kind: SyntaxKind.DoStatement,
    expression: Expression
  };

  declare type WhileStatement = {
    ...$Exact<IterationStatement>,

    kind: SyntaxKind.WhileStatement,
    expression: Expression
  };

  declare type ForInitializer = VariableDeclarationList | Expression;
  declare type ForStatement = {
    ...$Exact<IterationStatement>,

    kind: SyntaxKind.ForStatement,
    initializer?: ForInitializer,
    condition?: Expression,
    incrementor?: Expression
  };

  declare type ForInOrOfStatement = ForInStatement | ForOfStatement;
  declare type ForInStatement = {
    ...$Exact<IterationStatement>,

    kind: SyntaxKind.ForInStatement,
    initializer: ForInitializer,
    expression: Expression
  };

  declare type ForOfStatement = {
    ...$Exact<IterationStatement>,

    kind: SyntaxKind.ForOfStatement,
    awaitModifier?: AwaitKeywordToken,
    initializer: ForInitializer,
    expression: Expression
  };

  declare type BreakStatement = {
    ...$Exact<Statement>,

    kind: SyntaxKind.BreakStatement,
    label?: Identifier
  };

  declare type ContinueStatement = {
    ...$Exact<Statement>,

    kind: SyntaxKind.ContinueStatement,
    label?: Identifier
  };

  declare type BreakOrContinueStatement = BreakStatement | ContinueStatement;
  declare type ReturnStatement = {
    ...$Exact<Statement>,

    kind: SyntaxKind.ReturnStatement,
    expression?: Expression
  };

  declare type WithStatement = {
    ...$Exact<Statement>,

    kind: SyntaxKind.WithStatement,
    expression: Expression,
    statement: Statement
  };

  declare type SwitchStatement = {
    ...$Exact<Statement>,

    kind: SyntaxKind.SwitchStatement,
    expression: Expression,
    caseBlock: CaseBlock,
    possiblyExhaustive?: boolean
  };

  declare type CaseBlock = {
    ...$Exact<Node>,

    kind: SyntaxKind.CaseBlock,
    parent: SwitchStatement,
    clauses: NodeArray<CaseOrDefaultClause>
  };

  declare type CaseClause = {
    ...$Exact<Node>,

    kind: SyntaxKind.CaseClause,
    parent: CaseBlock,
    expression: Expression,
    statements: NodeArray<Statement>
  };

  declare type DefaultClause = {
    ...$Exact<Node>,

    kind: SyntaxKind.DefaultClause,
    parent: CaseBlock,
    statements: NodeArray<Statement>
  };

  declare type CaseOrDefaultClause = CaseClause | DefaultClause;
  declare type LabeledStatement = {
    ...$Exact<Statement>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.LabeledStatement,
    label: Identifier,
    statement: Statement
  };

  declare type ThrowStatement = {
    ...$Exact<Statement>,

    kind: SyntaxKind.ThrowStatement,
    expression?: Expression
  };

  declare type TryStatement = {
    ...$Exact<Statement>,

    kind: SyntaxKind.TryStatement,
    tryBlock: Block,
    catchClause?: CatchClause,
    finallyBlock?: Block
  };

  declare type CatchClause = {
    ...$Exact<Node>,

    kind: SyntaxKind.CatchClause,
    parent: TryStatement,
    variableDeclaration?: VariableDeclaration,
    block: Block
  };

  declare type ObjectTypeDeclaration =
    | ClassLikeDeclaration
    | InterfaceDeclaration
    | TypeLiteralNode;
  declare type DeclarationWithTypeParameters =
    | DeclarationWithTypeParameterChildren
    | JSDocTypedefTag
    | JSDocCallbackTag
    | JSDocSignature;
  declare type DeclarationWithTypeParameterChildren =
    | SignatureDeclaration
    | ClassLikeDeclaration
    | InterfaceDeclaration
    | TypeAliasDeclaration
    | JSDocTemplateTag;
  declare type ClassLikeDeclarationBase = {
    ...$Exact<NamedDeclaration>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.ClassDeclaration | SyntaxKind.ClassExpression,
    name?: Identifier,
    typeParameters?: NodeArray<TypeParameterDeclaration>,
    heritageClauses?: NodeArray<HeritageClause>,
    members: NodeArray<ClassElement>
  };

  declare type ClassDeclaration = {
    ...$Exact<ClassLikeDeclarationBase>,
    ...$Exact<DeclarationStatement>,

    kind: SyntaxKind.ClassDeclaration,
    name?: Identifier
  };

  declare type ClassExpression = {
    ...$Exact<ClassLikeDeclarationBase>,
    ...$Exact<PrimaryExpression>,

    kind: SyntaxKind.ClassExpression
  };

  declare type ClassLikeDeclaration = ClassDeclaration | ClassExpression;
  declare type ClassElement = {
    ...$Exact<NamedDeclaration>,

    _classElementBrand: any,
    name?: PropertyName
  };

  declare type TypeElement = {
    ...$Exact<NamedDeclaration>,

    _typeElementBrand: any,
    name?: PropertyName,
    questionToken?: QuestionToken
  };

  declare type InterfaceDeclaration = {
    ...$Exact<DeclarationStatement>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.InterfaceDeclaration,
    name: Identifier,
    typeParameters?: NodeArray<TypeParameterDeclaration>,
    heritageClauses?: NodeArray<HeritageClause>,
    members: NodeArray<TypeElement>
  };

  declare type HeritageClause = {
    ...$Exact<Node>,

    kind: SyntaxKind.HeritageClause,
    parent: InterfaceDeclaration | ClassLikeDeclaration,
    token: SyntaxKind.ExtendsKeyword | SyntaxKind.ImplementsKeyword,
    types: NodeArray<ExpressionWithTypeArguments>
  };

  declare type TypeAliasDeclaration = {
    ...$Exact<DeclarationStatement>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.TypeAliasDeclaration,
    name: Identifier,
    typeParameters?: NodeArray<TypeParameterDeclaration>,
    type: TypeNode
  };

  declare type EnumMember = {
    ...$Exact<NamedDeclaration>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.EnumMember,
    parent: EnumDeclaration,
    name: PropertyName,
    initializer?: Expression
  };

  declare type EnumDeclaration = {
    ...$Exact<DeclarationStatement>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.EnumDeclaration,
    name: Identifier,
    members: NodeArray<EnumMember>
  };

  declare type ModuleName = Identifier | StringLiteral;
  declare type ModuleBody = NamespaceBody | JSDocNamespaceBody;
  declare type ModuleDeclaration = {
    ...$Exact<DeclarationStatement>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.ModuleDeclaration,
    parent: ModuleBody | SourceFile,
    name: ModuleName,
    body?: ModuleBody | JSDocNamespaceDeclaration
  };

  declare type NamespaceBody = ModuleBlock | NamespaceDeclaration;
  declare type NamespaceDeclaration = {
    ...$Exact<ModuleDeclaration>,

    name: Identifier,
    body: NamespaceBody
  };

  declare type JSDocNamespaceBody = Identifier | JSDocNamespaceDeclaration;
  declare type JSDocNamespaceDeclaration = {
    ...$Exact<ModuleDeclaration>,

    name: Identifier,
    body?: JSDocNamespaceBody
  };

  declare type ModuleBlock = {
    ...$Exact<Node>,
    ...$Exact<Statement>,

    kind: SyntaxKind.ModuleBlock,
    parent: ModuleDeclaration,
    statements: NodeArray<Statement>
  };

  declare type ModuleReference = EntityName | ExternalModuleReference;
  declare type ImportEqualsDeclaration = {
    ...$Exact<DeclarationStatement>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.ImportEqualsDeclaration,
    parent: SourceFile | ModuleBlock,
    name: Identifier,
    moduleReference: ModuleReference
  };

  declare type ExternalModuleReference = {
    ...$Exact<Node>,

    kind: SyntaxKind.ExternalModuleReference,
    parent: ImportEqualsDeclaration,
    expression: Expression
  };

  declare type ImportDeclaration = {
    ...$Exact<Statement>,

    kind: SyntaxKind.ImportDeclaration,
    parent: SourceFile | ModuleBlock,
    importClause?: ImportClause,
    moduleSpecifier: Expression
  };

  declare type NamedImportBindings = NamespaceImport | NamedImports;
  declare type ImportClause = {
    ...$Exact<NamedDeclaration>,

    kind: SyntaxKind.ImportClause,
    parent: ImportDeclaration,
    name?: Identifier,
    namedBindings?: NamedImportBindings
  };

  declare type NamespaceImport = {
    ...$Exact<NamedDeclaration>,

    kind: SyntaxKind.NamespaceImport,
    parent: ImportClause,
    name: Identifier
  };

  declare type NamespaceExportDeclaration = {
    ...$Exact<DeclarationStatement>,

    kind: SyntaxKind.NamespaceExportDeclaration,
    name: Identifier
  };

  declare type ExportDeclaration = {
    ...$Exact<DeclarationStatement>,
    ...$Exact<JSDocContainer>,

    kind: SyntaxKind.ExportDeclaration,
    parent: SourceFile | ModuleBlock,
    exportClause?: NamedExports,
    moduleSpecifier?: Expression
  };

  declare type NamedImports = {
    ...$Exact<Node>,

    kind: SyntaxKind.NamedImports,
    parent: ImportClause,
    elements: NodeArray<ImportSpecifier>
  };

  declare type NamedExports = {
    ...$Exact<Node>,

    kind: SyntaxKind.NamedExports,
    parent: ExportDeclaration,
    elements: NodeArray<ExportSpecifier>
  };

  declare type NamedImportsOrExports = NamedImports | NamedExports;
  declare type ImportSpecifier = {
    ...$Exact<NamedDeclaration>,

    kind: SyntaxKind.ImportSpecifier,
    parent: NamedImports,
    propertyName?: Identifier,
    name: Identifier
  };

  declare type ExportSpecifier = {
    ...$Exact<NamedDeclaration>,

    kind: SyntaxKind.ExportSpecifier,
    parent: NamedExports,
    propertyName?: Identifier,
    name: Identifier
  };

  declare type ImportOrExportSpecifier = ImportSpecifier | ExportSpecifier;
  declare type ExportAssignment = {
    ...$Exact<DeclarationStatement>,

    kind: SyntaxKind.ExportAssignment,
    parent: SourceFile,
    isExportEquals?: boolean,
    expression: Expression
  };

  declare type FileReference = {
    ...$Exact<TextRange>,

    fileName: string
  };

  declare type CheckJsDirective = {
    ...$Exact<TextRange>,

    enabled: boolean
  };

  declare type CommentKind =
    | SyntaxKind.SingleLineCommentTrivia
    | SyntaxKind.MultiLineCommentTrivia;
  declare type CommentRange = {
    ...$Exact<TextRange>,

    hasTrailingNewLine?: boolean,
    kind: CommentKind
  };

  declare type SynthesizedComment = {
    ...$Exact<CommentRange>,

    text: string,
    pos: -1,
    end: -1
  };

  declare type JSDocTypeExpression = {
    ...$Exact<TypeNode>,

    kind: SyntaxKind.JSDocTypeExpression,
    type: TypeNode
  };

  declare type JSDocType = {
    ...$Exact<TypeNode>,

    _jsDocTypeBrand: any
  };

  declare type JSDocAllType = {
    ...$Exact<JSDocType>,

    kind: SyntaxKind.JSDocAllType
  };

  declare type JSDocUnknownType = {
    ...$Exact<JSDocType>,

    kind: SyntaxKind.JSDocUnknownType
  };

  declare type JSDocNonNullableType = {
    ...$Exact<JSDocType>,

    kind: SyntaxKind.JSDocNonNullableType,
    type: TypeNode
  };

  declare type JSDocNullableType = {
    ...$Exact<JSDocType>,

    kind: SyntaxKind.JSDocNullableType,
    type: TypeNode
  };

  declare type JSDocOptionalType = {
    ...$Exact<JSDocType>,

    kind: SyntaxKind.JSDocOptionalType,
    type: TypeNode
  };

  declare type JSDocFunctionType = {
    ...$Exact<JSDocType>,
    ...$Exact<SignatureDeclarationBase>,

    kind: SyntaxKind.JSDocFunctionType
  };

  declare type JSDocVariadicType = {
    ...$Exact<JSDocType>,

    kind: SyntaxKind.JSDocVariadicType,
    type: TypeNode
  };

  declare type JSDocTypeReferencingNode =
    | JSDocVariadicType
    | JSDocOptionalType
    | JSDocNullableType
    | JSDocNonNullableType;
  declare type JSDoc = {
    ...$Exact<Node>,

    kind: SyntaxKind.JSDocComment,
    parent: HasJSDoc,
    tags?: NodeArray<JSDocTag>,
    comment?: string
  };

  declare type JSDocTag = {
    ...$Exact<Node>,

    parent: JSDoc | JSDocTypeLiteral,
    tagName: Identifier,
    comment?: string
  };

  declare type JSDocUnknownTag = {
    ...$Exact<JSDocTag>,

    kind: SyntaxKind.JSDocTag
  };

  declare type JSDocAugmentsTag = {
    ...$Exact<JSDocTag>,

    kind: SyntaxKind.JSDocAugmentsTag,
    class: ExpressionWithTypeArguments & {
      expression: Identifier | PropertyAccessEntityNameExpression
    }
  };

  declare type JSDocClassTag = {
    ...$Exact<JSDocTag>,

    kind: SyntaxKind.JSDocClassTag
  };

  declare type JSDocEnumTag = {
    ...$Exact<JSDocTag>,

    kind: SyntaxKind.JSDocEnumTag,
    typeExpression?: JSDocTypeExpression
  };

  declare type JSDocThisTag = {
    ...$Exact<JSDocTag>,

    kind: SyntaxKind.JSDocThisTag,
    typeExpression?: JSDocTypeExpression
  };

  declare type JSDocTemplateTag = {
    ...$Exact<JSDocTag>,

    kind: SyntaxKind.JSDocTemplateTag,
    constraint: JSDocTypeExpression | void,
    typeParameters: NodeArray<TypeParameterDeclaration>
  };

  declare type JSDocReturnTag = {
    ...$Exact<JSDocTag>,

    kind: SyntaxKind.JSDocReturnTag,
    typeExpression?: JSDocTypeExpression
  };

  declare type JSDocTypeTag = {
    ...$Exact<JSDocTag>,

    kind: SyntaxKind.JSDocTypeTag,
    typeExpression?: JSDocTypeExpression
  };

  declare type JSDocTypedefTag = {
    ...$Exact<JSDocTag>,
    ...$Exact<NamedDeclaration>,

    parent: JSDoc,
    kind: SyntaxKind.JSDocTypedefTag,
    fullName?: JSDocNamespaceDeclaration | Identifier,
    name?: Identifier,
    typeExpression?: JSDocTypeExpression | JSDocTypeLiteral
  };

  declare type JSDocCallbackTag = {
    ...$Exact<JSDocTag>,
    ...$Exact<NamedDeclaration>,

    parent: JSDoc,
    kind: SyntaxKind.JSDocCallbackTag,
    fullName?: JSDocNamespaceDeclaration | Identifier,
    name?: Identifier,
    typeExpression: JSDocSignature
  };

  declare type JSDocSignature = {
    ...$Exact<JSDocType>,
    ...$Exact<Declaration>,

    kind: SyntaxKind.JSDocSignature,
    typeParameters?: $ReadOnlyArray<JSDocTemplateTag>,
    parameters: $ReadOnlyArray<JSDocParameterTag>,
    type: JSDocReturnTag | void
  };

  declare type JSDocPropertyLikeTag = {
    ...$Exact<JSDocTag>,
    ...$Exact<Declaration>,

    parent: JSDoc,
    name: EntityName,
    typeExpression?: JSDocTypeExpression,
    isNameFirst: boolean,
    isBracketed: boolean
  };

  declare type JSDocPropertyTag = {
    ...$Exact<JSDocPropertyLikeTag>,

    kind: SyntaxKind.JSDocPropertyTag
  };

  declare type JSDocParameterTag = {
    ...$Exact<JSDocPropertyLikeTag>,

    kind: SyntaxKind.JSDocParameterTag
  };

  declare type JSDocTypeLiteral = {
    ...$Exact<JSDocType>,

    kind: SyntaxKind.JSDocTypeLiteral,
    jsDocPropertyTags?: $ReadOnlyArray<JSDocPropertyLikeTag>,
    isArrayType?: boolean
  };

  declare class FlowFlags {
    static +Unreachable: Class<FlowFlags__Unreachable> &
      FlowFlags__Unreachable &
      1; // 1
    static +Start: Class<FlowFlags__Start> & FlowFlags__Start & 2; // 2
    static +BranchLabel: Class<FlowFlags__BranchLabel> &
      FlowFlags__BranchLabel &
      4; // 4
    static +LoopLabel: Class<FlowFlags__LoopLabel> & FlowFlags__LoopLabel & 8; // 8
    static +Assignment: Class<FlowFlags__Assignment> &
      FlowFlags__Assignment &
      16; // 16
    static +TrueCondition: Class<FlowFlags__TrueCondition> &
      FlowFlags__TrueCondition &
      32; // 32
    static +FalseCondition: Class<FlowFlags__FalseCondition> &
      FlowFlags__FalseCondition &
      64; // 64
    static +SwitchClause: Class<FlowFlags__SwitchClause> &
      FlowFlags__SwitchClause &
      128; // 128
    static +ArrayMutation: Class<FlowFlags__ArrayMutation> &
      FlowFlags__ArrayMutation &
      256; // 256
    static +Referenced: Class<FlowFlags__Referenced> &
      FlowFlags__Referenced &
      512; // 512
    static +Shared: Class<FlowFlags__Shared> & FlowFlags__Shared & 1024; // 1024
    static +PreFinally: Class<FlowFlags__PreFinally> &
      FlowFlags__PreFinally &
      2048; // 2048
    static +AfterFinally: Class<FlowFlags__AfterFinally> &
      FlowFlags__AfterFinally &
      4096; // 4096
    static +Label: Class<FlowFlags__Label> & FlowFlags__Label & 12; // 12
    static +Condition: Class<FlowFlags__Condition> & FlowFlags__Condition & 96; // 96
  }

  declare class FlowFlags__Unreachable mixins FlowFlags {}
  declare class FlowFlags__Start mixins FlowFlags {}
  declare class FlowFlags__BranchLabel mixins FlowFlags {}
  declare class FlowFlags__LoopLabel mixins FlowFlags {}
  declare class FlowFlags__Assignment mixins FlowFlags {}
  declare class FlowFlags__TrueCondition mixins FlowFlags {}
  declare class FlowFlags__FalseCondition mixins FlowFlags {}
  declare class FlowFlags__SwitchClause mixins FlowFlags {}
  declare class FlowFlags__ArrayMutation mixins FlowFlags {}
  declare class FlowFlags__Referenced mixins FlowFlags {}
  declare class FlowFlags__Shared mixins FlowFlags {}
  declare class FlowFlags__PreFinally mixins FlowFlags {}
  declare class FlowFlags__AfterFinally mixins FlowFlags {}
  declare class FlowFlags__Label mixins FlowFlags {}
  declare class FlowFlags__Condition mixins FlowFlags {}

  declare type FlowLock = {
    locked?: boolean
  };

  declare type AfterFinallyFlow = {
    ...$Exact<FlowNodeBase>,
    ...$Exact<FlowLock>,

    antecedent: FlowNode
  };

  declare type PreFinallyFlow = {
    ...$Exact<FlowNodeBase>,

    antecedent: FlowNode,
    lock: FlowLock
  };

  declare type FlowNode =
    | AfterFinallyFlow
    | PreFinallyFlow
    | FlowStart
    | FlowLabel
    | FlowAssignment
    | FlowCondition
    | FlowSwitchClause
    | FlowArrayMutation;
  declare type FlowNodeBase = {
    flags: FlowFlags,
    id?: number
  };

  declare type FlowStart = {
    ...$Exact<FlowNodeBase>,

    container?: FunctionExpression | ArrowFunction | MethodDeclaration
  };

  declare type FlowLabel = {
    ...$Exact<FlowNodeBase>,

    antecedents: FlowNode[] | void
  };

  declare type FlowAssignment = {
    ...$Exact<FlowNodeBase>,

    node: Expression | VariableDeclaration | BindingElement,
    antecedent: FlowNode
  };

  declare type FlowCondition = {
    ...$Exact<FlowNodeBase>,

    expression: Expression,
    antecedent: FlowNode
  };

  declare type FlowSwitchClause = {
    ...$Exact<FlowNodeBase>,

    switchStatement: SwitchStatement,
    clauseStart: number,
    clauseEnd: number,
    antecedent: FlowNode
  };

  declare type FlowArrayMutation = {
    ...$Exact<FlowNodeBase>,

    node: CallExpression | BinaryExpression,
    antecedent: FlowNode
  };

  declare type FlowType = Type | IncompleteType;
  declare type IncompleteType = {
    flags: TypeFlags,
    type: Type
  };

  declare type AmdDependency = {
    path: string,
    name?: string
  };

  declare type SourceFile = {
    ...$Exact<Declaration>,

    kind: SyntaxKind.SourceFile,
    statements: NodeArray<Statement>,
    endOfFileToken: Token<SyntaxKind.EndOfFileToken>,
    fileName: string,
    text: string,
    amdDependencies: $ReadOnlyArray<AmdDependency>,
    moduleName?: string,
    referencedFiles: $ReadOnlyArray<FileReference>,
    typeReferenceDirectives: $ReadOnlyArray<FileReference>,
    libReferenceDirectives: $ReadOnlyArray<FileReference>,
    languageVariant: LanguageVariant,
    isDeclarationFile: boolean,
    hasNoDefaultLib: boolean,
    languageVersion: ScriptTarget,
    getLineAndCharacterOfPosition(pos: number): LineAndCharacter,
    getLineEndOfPosition(pos: number): number,
    getLineStarts(): $ReadOnlyArray<number>,
    getPositionOfLineAndCharacter(line: number, character: number): number,
    update(newText: string, textChangeRange: TextChangeRange): SourceFile
  };

  declare type Bundle = {
    ...$Exact<Node>,

    kind: SyntaxKind.Bundle,
    prepends: $ReadOnlyArray<InputFiles | UnparsedSource>,
    sourceFiles: $ReadOnlyArray<SourceFile>
  };

  declare type InputFiles = {
    ...$Exact<Node>,

    kind: SyntaxKind.InputFiles,
    javascriptPath?: string,
    javascriptText: string,
    javascriptMapPath?: string,
    javascriptMapText?: string,
    declarationPath?: string,
    declarationText: string,
    declarationMapPath?: string,
    declarationMapText?: string
  };

  declare type UnparsedSource = {
    ...$Exact<Node>,

    kind: SyntaxKind.UnparsedSource,
    fileName?: string,
    text: string,
    sourceMapPath?: string,
    sourceMapText?: string
  };

  declare type JsonSourceFile = {
    ...$Exact<SourceFile>,

    statements: NodeArray<JsonObjectExpressionStatement>
  };

  declare type TsConfigSourceFile = {
    ...$Exact<JsonSourceFile>,

    extendedSourceFiles?: string[]
  };

  declare type JsonMinusNumericLiteral = {
    ...$Exact<PrefixUnaryExpression>,

    kind: SyntaxKind.PrefixUnaryExpression,
    operator: SyntaxKind.MinusToken,
    operand: NumericLiteral
  };

  declare type JsonObjectExpressionStatement = {
    ...$Exact<ExpressionStatement>,

    expression:
      | ObjectLiteralExpression
      | ArrayLiteralExpression
      | JsonMinusNumericLiteral
      | NumericLiteral
      | StringLiteral
      | BooleanLiteral
      | NullLiteral
  };

  declare type ScriptReferenceHost = {
    getCompilerOptions(): CompilerOptions,
    getSourceFile(fileName: string): SourceFile | void,
    getSourceFileByPath(path: Path): SourceFile | void,
    getCurrentDirectory(): string
  };

  declare type ParseConfigHost = {
    useCaseSensitiveFileNames: boolean,
    readDirectory(
      rootDir: string,
      extensions: $ReadOnlyArray<string>,
      excludes: $ReadOnlyArray<string> | void,
      includes: $ReadOnlyArray<string>,
      depth?: number
    ): $ReadOnlyArray<string>,
    fileExists(path: string): boolean,
    readFile(path: string): string | void,
    trace(s: string): void
  };

  declare type ResolvedConfigFileName = string & {
    _isResolvedConfigFileName: empty
  };
  declare type WriteFileCallback = (
    fileName: string,
    data: string,
    writeByteOrderMark: boolean,
    onError?: (message: string) => void,
    sourceFiles?: $ReadOnlyArray<SourceFile>
  ) => void;
  declare class OperationCanceledException {}
  declare type CancellationToken = {
    isCancellationRequested(): boolean,
    throwIfCancellationRequested(): void
  };

  declare type Program = {
    ...$Exact<ScriptReferenceHost>,

    getRootFileNames(): $ReadOnlyArray<string>,
    getSourceFiles(): $ReadOnlyArray<SourceFile>,
    emit(
      targetSourceFile?: SourceFile,
      writeFile?: WriteFileCallback,
      cancellationToken?: CancellationToken,
      emitOnlyDtsFiles?: boolean,
      customTransformers?: CustomTransformers
    ): EmitResult,
    getOptionsDiagnostics(
      cancellationToken?: CancellationToken
    ): $ReadOnlyArray<Diagnostic>,
    getGlobalDiagnostics(
      cancellationToken?: CancellationToken
    ): $ReadOnlyArray<Diagnostic>,
    getSyntacticDiagnostics(
      sourceFile?: SourceFile,
      cancellationToken?: CancellationToken
    ): $ReadOnlyArray<DiagnosticWithLocation>,
    getSemanticDiagnostics(
      sourceFile?: SourceFile,
      cancellationToken?: CancellationToken
    ): $ReadOnlyArray<Diagnostic>,
    getDeclarationDiagnostics(
      sourceFile?: SourceFile,
      cancellationToken?: CancellationToken
    ): $ReadOnlyArray<DiagnosticWithLocation>,
    getConfigFileParsingDiagnostics(): $ReadOnlyArray<Diagnostic>,
    getTypeChecker(): TypeChecker,
    isSourceFileFromExternalLibrary(file: SourceFile): boolean,
    isSourceFileDefaultLibrary(file: SourceFile): boolean,
    getProjectReferences(): $ReadOnlyArray<ProjectReference> | void,
    getResolvedProjectReferences(): $ReadOnlyArray<ResolvedProjectReference | void> | void
  };

  declare type ResolvedProjectReference = {
    commandLine: ParsedCommandLine,
    sourceFile: SourceFile,
    references?: $ReadOnlyArray<ResolvedProjectReference | void>
  };

  declare type CustomTransformers = {
    before?: TransformerFactory<SourceFile>[],
    after?: TransformerFactory<SourceFile>[],
    afterDeclarations?: TransformerFactory<Bundle | SourceFile>[]
  };

  declare type SourceMapSpan = {
    emittedLine: number,
    emittedColumn: number,
    sourceLine: number,
    sourceColumn: number,
    nameIndex?: number,
    sourceIndex: number
  };

  declare class ExitStatus {
    static +Success: Class<ExitStatus__Success> & ExitStatus__Success & 0; // 0
    static +DiagnosticsPresent_OutputsSkipped: Class<ExitStatus__DiagnosticsPresent_OutputsSkipped> &
      ExitStatus__DiagnosticsPresent_OutputsSkipped &
      1; // 1
    static +DiagnosticsPresent_OutputsGenerated: Class<ExitStatus__DiagnosticsPresent_OutputsGenerated> &
      ExitStatus__DiagnosticsPresent_OutputsGenerated &
      2; // 2
  }

  declare class ExitStatus__Success mixins ExitStatus {}
  declare class ExitStatus__DiagnosticsPresent_OutputsSkipped
    mixins ExitStatus {}
  declare class ExitStatus__DiagnosticsPresent_OutputsGenerated
    mixins ExitStatus {}

  declare type EmitResult = {
    emitSkipped: boolean,
    diagnostics: $ReadOnlyArray<Diagnostic>,
    emittedFiles?: string[]
  };

  declare type TypeChecker = {
    getTypeOfSymbolAtLocation(symbol: Symbol, node: Node): Type,
    getDeclaredTypeOfSymbol(symbol: Symbol): Type,
    getPropertiesOfType(type: Type): Symbol[],
    getPropertyOfType(type: Type, propertyName: string): Symbol | void,
    getIndexInfoOfType(type: Type, kind: IndexKind): IndexInfo | void,
    getSignaturesOfType(
      type: Type,
      kind: SignatureKind
    ): $ReadOnlyArray<Signature>,
    getIndexTypeOfType(type: Type, kind: IndexKind): Type | void,
    getBaseTypes(type: InterfaceType): BaseType[],
    getBaseTypeOfLiteralType(type: Type): Type,
    getWidenedType(type: Type): Type,
    getReturnTypeOfSignature(signature: Signature): Type,
    getNullableType(type: Type, flags: TypeFlags): Type,
    getNonNullableType(type: Type): Type,
    typeToTypeNode(
      type: Type,
      enclosingDeclaration?: Node,
      flags?: NodeBuilderFlags
    ): TypeNode | void,
    signatureToSignatureDeclaration(
      signature: Signature,
      kind: SyntaxKind,
      enclosingDeclaration?: Node,
      flags?: NodeBuilderFlags
    ):
      | (SignatureDeclaration & {
          typeArguments?: NodeArray<TypeNode>
        })
      | void,
    indexInfoToIndexSignatureDeclaration(
      indexInfo: IndexInfo,
      kind: IndexKind,
      enclosingDeclaration?: Node,
      flags?: NodeBuilderFlags
    ): IndexSignatureDeclaration | void,
    symbolToEntityName(
      symbol: Symbol,
      meaning: SymbolFlags,
      enclosingDeclaration?: Node,
      flags?: NodeBuilderFlags
    ): EntityName | void,
    symbolToExpression(
      symbol: Symbol,
      meaning: SymbolFlags,
      enclosingDeclaration?: Node,
      flags?: NodeBuilderFlags
    ): Expression | void,
    symbolToTypeParameterDeclarations(
      symbol: Symbol,
      enclosingDeclaration?: Node,
      flags?: NodeBuilderFlags
    ): NodeArray<TypeParameterDeclaration> | void,
    symbolToParameterDeclaration(
      symbol: Symbol,
      enclosingDeclaration?: Node,
      flags?: NodeBuilderFlags
    ): ParameterDeclaration | void,
    typeParameterToDeclaration(
      parameter: TypeParameter,
      enclosingDeclaration?: Node,
      flags?: NodeBuilderFlags
    ): TypeParameterDeclaration | void,
    getSymbolsInScope(location: Node, meaning: SymbolFlags): Symbol[],
    getSymbolAtLocation(node: Node): Symbol | void,
    getSymbolsOfParameterPropertyDeclaration(
      parameter: ParameterDeclaration,
      parameterName: string
    ): Symbol[],
    getShorthandAssignmentValueSymbol(location: Node): Symbol | void,
    getExportSpecifierLocalTargetSymbol(
      location: ExportSpecifier
    ): Symbol | void,
    getExportSymbolOfSymbol(symbol: Symbol): Symbol,
    getPropertySymbolOfDestructuringAssignment(
      location: Identifier
    ): Symbol | void,
    getTypeAtLocation(node: Node): Type,
    getTypeFromTypeNode(node: TypeNode): Type,
    signatureToString(
      signature: Signature,
      enclosingDeclaration?: Node,
      flags?: TypeFormatFlags,
      kind?: SignatureKind
    ): string,
    typeToString(
      type: Type,
      enclosingDeclaration?: Node,
      flags?: TypeFormatFlags
    ): string,
    symbolToString(
      symbol: Symbol,
      enclosingDeclaration?: Node,
      meaning?: SymbolFlags,
      flags?: SymbolFormatFlags
    ): string,
    typePredicateToString(
      predicate: TypePredicate,
      enclosingDeclaration?: Node,
      flags?: TypeFormatFlags
    ): string,
    getFullyQualifiedName(symbol: Symbol): string,
    getAugmentedPropertiesOfType(type: Type): Symbol[],
    getRootSymbols(symbol: Symbol): $ReadOnlyArray<Symbol>,
    getContextualType(node: Expression): Type | void,
    getResolvedSignature(
      node: CallLikeExpression,
      candidatesOutArray?: Signature[],
      argumentCount?: number
    ): Signature | void,
    getSignatureFromDeclaration(
      declaration: SignatureDeclaration
    ): Signature | void,
    isImplementationOfOverload(node: SignatureDeclaration): boolean | void,
    isUndefinedSymbol(symbol: Symbol): boolean,
    isArgumentsSymbol(symbol: Symbol): boolean,
    isUnknownSymbol(symbol: Symbol): boolean,
    getConstantValue(
      node: EnumMember | PropertyAccessExpression | ElementAccessExpression
    ): string | number | void,
    isValidPropertyAccess(
      node: PropertyAccessExpression | QualifiedName | ImportTypeNode,
      propertyName: string
    ): boolean,
    getAliasedSymbol(symbol: Symbol): Symbol,
    getExportsOfModule(moduleSymbol: Symbol): Symbol[],
    getJsxIntrinsicTagNamesAt(location: Node): Symbol[],
    isOptionalParameter(node: ParameterDeclaration): boolean,
    getAmbientModules(): Symbol[],
    tryGetMemberInModuleExports(
      memberName: string,
      moduleSymbol: Symbol
    ): Symbol | void,
    getApparentType(type: Type): Type,
    getBaseConstraintOfType(type: Type): Type | void,
    getDefaultFromTypeParameter(type: Type): Type | void,
    runWithCancellationToken<T>(
      token: CancellationToken,
      cb: (checker: TypeChecker) => T
    ): T
  };

  declare class NodeBuilderFlags {
    static +None: Class<NodeBuilderFlags__None> & NodeBuilderFlags__None & 0; // 0
    static +NoTruncation: Class<NodeBuilderFlags__NoTruncation> &
      NodeBuilderFlags__NoTruncation &
      1; // 1
    static +WriteArrayAsGenericType: Class<NodeBuilderFlags__WriteArrayAsGenericType> &
      NodeBuilderFlags__WriteArrayAsGenericType &
      2; // 2
    static +GenerateNamesForShadowedTypeParams: Class<NodeBuilderFlags__GenerateNamesForShadowedTypeParams> &
      NodeBuilderFlags__GenerateNamesForShadowedTypeParams &
      4; // 4
    static +UseStructuralFallback: Class<NodeBuilderFlags__UseStructuralFallback> &
      NodeBuilderFlags__UseStructuralFallback &
      8; // 8
    static +ForbidIndexedAccessSymbolReferences: Class<NodeBuilderFlags__ForbidIndexedAccessSymbolReferences> &
      NodeBuilderFlags__ForbidIndexedAccessSymbolReferences &
      16; // 16
    static +WriteTypeArgumentsOfSignature: Class<NodeBuilderFlags__WriteTypeArgumentsOfSignature> &
      NodeBuilderFlags__WriteTypeArgumentsOfSignature &
      32; // 32
    static +UseFullyQualifiedType: Class<NodeBuilderFlags__UseFullyQualifiedType> &
      NodeBuilderFlags__UseFullyQualifiedType &
      64; // 64
    static +UseOnlyExternalAliasing: Class<NodeBuilderFlags__UseOnlyExternalAliasing> &
      NodeBuilderFlags__UseOnlyExternalAliasing &
      128; // 128
    static +SuppressAnyReturnType: Class<NodeBuilderFlags__SuppressAnyReturnType> &
      NodeBuilderFlags__SuppressAnyReturnType &
      256; // 256
    static +WriteTypeParametersInQualifiedName: Class<NodeBuilderFlags__WriteTypeParametersInQualifiedName> &
      NodeBuilderFlags__WriteTypeParametersInQualifiedName &
      512; // 512
    static +MultilineObjectLiterals: Class<NodeBuilderFlags__MultilineObjectLiterals> &
      NodeBuilderFlags__MultilineObjectLiterals &
      1024; // 1024
    static +WriteClassExpressionAsTypeLiteral: Class<NodeBuilderFlags__WriteClassExpressionAsTypeLiteral> &
      NodeBuilderFlags__WriteClassExpressionAsTypeLiteral &
      2048; // 2048
    static +UseTypeOfFunction: Class<NodeBuilderFlags__UseTypeOfFunction> &
      NodeBuilderFlags__UseTypeOfFunction &
      4096; // 4096
    static +OmitParameterModifiers: Class<NodeBuilderFlags__OmitParameterModifiers> &
      NodeBuilderFlags__OmitParameterModifiers &
      8192; // 8192
    static +UseAliasDefinedOutsideCurrentScope: Class<NodeBuilderFlags__UseAliasDefinedOutsideCurrentScope> &
      NodeBuilderFlags__UseAliasDefinedOutsideCurrentScope &
      16384; // 16384
    static +AllowThisInObjectLiteral: Class<NodeBuilderFlags__AllowThisInObjectLiteral> &
      NodeBuilderFlags__AllowThisInObjectLiteral &
      32768; // 32768
    static +AllowQualifedNameInPlaceOfIdentifier: Class<NodeBuilderFlags__AllowQualifedNameInPlaceOfIdentifier> &
      NodeBuilderFlags__AllowQualifedNameInPlaceOfIdentifier &
      65536; // 65536
    static +AllowAnonymousIdentifier: Class<NodeBuilderFlags__AllowAnonymousIdentifier> &
      NodeBuilderFlags__AllowAnonymousIdentifier &
      131072; // 131072
    static +AllowEmptyUnionOrIntersection: Class<NodeBuilderFlags__AllowEmptyUnionOrIntersection> &
      NodeBuilderFlags__AllowEmptyUnionOrIntersection &
      262144; // 262144
    static +AllowEmptyTuple: Class<NodeBuilderFlags__AllowEmptyTuple> &
      NodeBuilderFlags__AllowEmptyTuple &
      524288; // 524288
    static +AllowUniqueESSymbolType: Class<NodeBuilderFlags__AllowUniqueESSymbolType> &
      NodeBuilderFlags__AllowUniqueESSymbolType &
      1048576; // 1048576
    static +AllowEmptyIndexInfoType: Class<NodeBuilderFlags__AllowEmptyIndexInfoType> &
      NodeBuilderFlags__AllowEmptyIndexInfoType &
      2097152; // 2097152
    static +AllowNodeModulesRelativePaths: Class<NodeBuilderFlags__AllowNodeModulesRelativePaths> &
      NodeBuilderFlags__AllowNodeModulesRelativePaths &
      67108864; // 67108864
    static +IgnoreErrors: Class<NodeBuilderFlags__IgnoreErrors> &
      NodeBuilderFlags__IgnoreErrors &
      70221824; // 70221824
    static +InObjectTypeLiteral: Class<NodeBuilderFlags__InObjectTypeLiteral> &
      NodeBuilderFlags__InObjectTypeLiteral &
      4194304; // 4194304
    static +InTypeAlias: Class<NodeBuilderFlags__InTypeAlias> &
      NodeBuilderFlags__InTypeAlias &
      8388608; // 8388608
    static +InInitialEntityName: Class<NodeBuilderFlags__InInitialEntityName> &
      NodeBuilderFlags__InInitialEntityName &
      16777216; // 16777216
    static +InReverseMappedType: Class<NodeBuilderFlags__InReverseMappedType> &
      NodeBuilderFlags__InReverseMappedType &
      33554432; // 33554432
  }

  declare class NodeBuilderFlags__None mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__NoTruncation mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__WriteArrayAsGenericType
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__GenerateNamesForShadowedTypeParams
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__UseStructuralFallback
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__ForbidIndexedAccessSymbolReferences
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__WriteTypeArgumentsOfSignature
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__UseFullyQualifiedType
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__UseOnlyExternalAliasing
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__SuppressAnyReturnType
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__WriteTypeParametersInQualifiedName
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__MultilineObjectLiterals
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__WriteClassExpressionAsTypeLiteral
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__UseTypeOfFunction mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__OmitParameterModifiers
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__UseAliasDefinedOutsideCurrentScope
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__AllowThisInObjectLiteral
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__AllowQualifedNameInPlaceOfIdentifier
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__AllowAnonymousIdentifier
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__AllowEmptyUnionOrIntersection
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__AllowEmptyTuple mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__AllowUniqueESSymbolType
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__AllowEmptyIndexInfoType
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__AllowNodeModulesRelativePaths
    mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__IgnoreErrors mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__InObjectTypeLiteral mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__InTypeAlias mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__InInitialEntityName mixins NodeBuilderFlags {}
  declare class NodeBuilderFlags__InReverseMappedType mixins NodeBuilderFlags {}

  declare class TypeFormatFlags {
    static +None: Class<TypeFormatFlags__None> & TypeFormatFlags__None & 0; // 0
    static +NoTruncation: Class<TypeFormatFlags__NoTruncation> &
      TypeFormatFlags__NoTruncation &
      1; // 1
    static +WriteArrayAsGenericType: Class<TypeFormatFlags__WriteArrayAsGenericType> &
      TypeFormatFlags__WriteArrayAsGenericType &
      2; // 2
    static +UseStructuralFallback: Class<TypeFormatFlags__UseStructuralFallback> &
      TypeFormatFlags__UseStructuralFallback &
      8; // 8
    static +WriteTypeArgumentsOfSignature: Class<TypeFormatFlags__WriteTypeArgumentsOfSignature> &
      TypeFormatFlags__WriteTypeArgumentsOfSignature &
      32; // 32
    static +UseFullyQualifiedType: Class<TypeFormatFlags__UseFullyQualifiedType> &
      TypeFormatFlags__UseFullyQualifiedType &
      64; // 64
    static +SuppressAnyReturnType: Class<TypeFormatFlags__SuppressAnyReturnType> &
      TypeFormatFlags__SuppressAnyReturnType &
      256; // 256
    static +MultilineObjectLiterals: Class<TypeFormatFlags__MultilineObjectLiterals> &
      TypeFormatFlags__MultilineObjectLiterals &
      1024; // 1024
    static +WriteClassExpressionAsTypeLiteral: Class<TypeFormatFlags__WriteClassExpressionAsTypeLiteral> &
      TypeFormatFlags__WriteClassExpressionAsTypeLiteral &
      2048; // 2048
    static +UseTypeOfFunction: Class<TypeFormatFlags__UseTypeOfFunction> &
      TypeFormatFlags__UseTypeOfFunction &
      4096; // 4096
    static +OmitParameterModifiers: Class<TypeFormatFlags__OmitParameterModifiers> &
      TypeFormatFlags__OmitParameterModifiers &
      8192; // 8192
    static +UseAliasDefinedOutsideCurrentScope: Class<TypeFormatFlags__UseAliasDefinedOutsideCurrentScope> &
      TypeFormatFlags__UseAliasDefinedOutsideCurrentScope &
      16384; // 16384
    static +AllowUniqueESSymbolType: Class<TypeFormatFlags__AllowUniqueESSymbolType> &
      TypeFormatFlags__AllowUniqueESSymbolType &
      1048576; // 1048576
    static +AddUndefined: Class<TypeFormatFlags__AddUndefined> &
      TypeFormatFlags__AddUndefined &
      131072; // 131072
    static +WriteArrowStyleSignature: Class<TypeFormatFlags__WriteArrowStyleSignature> &
      TypeFormatFlags__WriteArrowStyleSignature &
      262144; // 262144
    static +InArrayType: Class<TypeFormatFlags__InArrayType> &
      TypeFormatFlags__InArrayType &
      524288; // 524288
    static +InElementType: Class<TypeFormatFlags__InElementType> &
      TypeFormatFlags__InElementType &
      2097152; // 2097152
    static +InFirstTypeArgument: Class<TypeFormatFlags__InFirstTypeArgument> &
      TypeFormatFlags__InFirstTypeArgument &
      4194304; // 4194304
    static +InTypeAlias: Class<TypeFormatFlags__InTypeAlias> &
      TypeFormatFlags__InTypeAlias &
      8388608; // 8388608
    static +WriteOwnNameForAnyLike: Class<TypeFormatFlags__WriteOwnNameForAnyLike> &
      TypeFormatFlags__WriteOwnNameForAnyLike &
      0; // 0
    static +NodeBuilderFlagsMask: Class<TypeFormatFlags__NodeBuilderFlagsMask> &
      TypeFormatFlags__NodeBuilderFlagsMask &
      9469291; // 9469291
  }

  declare class TypeFormatFlags__None mixins TypeFormatFlags {}
  declare class TypeFormatFlags__NoTruncation mixins TypeFormatFlags {}
  declare class TypeFormatFlags__WriteArrayAsGenericType
    mixins TypeFormatFlags {}
  declare class TypeFormatFlags__UseStructuralFallback mixins TypeFormatFlags {}
  declare class TypeFormatFlags__WriteTypeArgumentsOfSignature
    mixins TypeFormatFlags {}
  declare class TypeFormatFlags__UseFullyQualifiedType mixins TypeFormatFlags {}
  declare class TypeFormatFlags__SuppressAnyReturnType mixins TypeFormatFlags {}
  declare class TypeFormatFlags__MultilineObjectLiterals
    mixins TypeFormatFlags {}
  declare class TypeFormatFlags__WriteClassExpressionAsTypeLiteral
    mixins TypeFormatFlags {}
  declare class TypeFormatFlags__UseTypeOfFunction mixins TypeFormatFlags {}
  declare class TypeFormatFlags__OmitParameterModifiers
    mixins TypeFormatFlags {}
  declare class TypeFormatFlags__UseAliasDefinedOutsideCurrentScope
    mixins TypeFormatFlags {}
  declare class TypeFormatFlags__AllowUniqueESSymbolType
    mixins TypeFormatFlags {}
  declare class TypeFormatFlags__AddUndefined mixins TypeFormatFlags {}
  declare class TypeFormatFlags__WriteArrowStyleSignature
    mixins TypeFormatFlags {}
  declare class TypeFormatFlags__InArrayType mixins TypeFormatFlags {}
  declare class TypeFormatFlags__InElementType mixins TypeFormatFlags {}
  declare class TypeFormatFlags__InFirstTypeArgument mixins TypeFormatFlags {}
  declare class TypeFormatFlags__InTypeAlias mixins TypeFormatFlags {}
  declare class TypeFormatFlags__WriteOwnNameForAnyLike
    mixins TypeFormatFlags {}
  declare class TypeFormatFlags__NodeBuilderFlagsMask mixins TypeFormatFlags {}

  declare class SymbolFormatFlags {
    static +None: Class<SymbolFormatFlags__None> & SymbolFormatFlags__None & 0; // 0
    static +WriteTypeParametersOrArguments: Class<SymbolFormatFlags__WriteTypeParametersOrArguments> &
      SymbolFormatFlags__WriteTypeParametersOrArguments &
      1; // 1
    static +UseOnlyExternalAliasing: Class<SymbolFormatFlags__UseOnlyExternalAliasing> &
      SymbolFormatFlags__UseOnlyExternalAliasing &
      2; // 2
    static +AllowAnyNodeKind: Class<SymbolFormatFlags__AllowAnyNodeKind> &
      SymbolFormatFlags__AllowAnyNodeKind &
      4; // 4
    static +UseAliasDefinedOutsideCurrentScope: Class<SymbolFormatFlags__UseAliasDefinedOutsideCurrentScope> &
      SymbolFormatFlags__UseAliasDefinedOutsideCurrentScope &
      8; // 8
  }

  declare class SymbolFormatFlags__None mixins SymbolFormatFlags {}
  declare class SymbolFormatFlags__WriteTypeParametersOrArguments
    mixins SymbolFormatFlags {}
  declare class SymbolFormatFlags__UseOnlyExternalAliasing
    mixins SymbolFormatFlags {}
  declare class SymbolFormatFlags__AllowAnyNodeKind mixins SymbolFormatFlags {}
  declare class SymbolFormatFlags__UseAliasDefinedOutsideCurrentScope
    mixins SymbolFormatFlags {}

  declare class TypePredicateKind {
    static +This: Class<TypePredicateKind__This> & TypePredicateKind__This & 0; // 0
    static +Identifier: Class<TypePredicateKind__Identifier> &
      TypePredicateKind__Identifier &
      1; // 1
  }

  declare class TypePredicateKind__This mixins TypePredicateKind {}
  declare class TypePredicateKind__Identifier mixins TypePredicateKind {}

  declare type TypePredicateBase = {
    kind: TypePredicateKind,
    type: Type
  };

  declare type ThisTypePredicate = {
    ...$Exact<TypePredicateBase>,

    kind: TypePredicateKind.This
  };

  declare type IdentifierTypePredicate = {
    ...$Exact<TypePredicateBase>,

    kind: TypePredicateKind.Identifier,
    parameterName: string,
    parameterIndex: number
  };

  declare type TypePredicate = IdentifierTypePredicate | ThisTypePredicate;
  declare class SymbolFlags {
    static +None: Class<SymbolFlags__None> & SymbolFlags__None & 0; // 0
    static +FunctionScopedVariable: Class<SymbolFlags__FunctionScopedVariable> &
      SymbolFlags__FunctionScopedVariable &
      1; // 1
    static +BlockScopedVariable: Class<SymbolFlags__BlockScopedVariable> &
      SymbolFlags__BlockScopedVariable &
      2; // 2
    static +Property: Class<SymbolFlags__Property> & SymbolFlags__Property & 4; // 4
    static +EnumMember: Class<SymbolFlags__EnumMember> &
      SymbolFlags__EnumMember &
      8; // 8
    static +Function: Class<SymbolFlags__Function> & SymbolFlags__Function & 16; // 16
    static +Class: Class<SymbolFlags__Class> & SymbolFlags__Class & 32; // 32
    static +Interface: Class<SymbolFlags__Interface> &
      SymbolFlags__Interface &
      64; // 64
    static +ConstEnum: Class<SymbolFlags__ConstEnum> &
      SymbolFlags__ConstEnum &
      128; // 128
    static +RegularEnum: Class<SymbolFlags__RegularEnum> &
      SymbolFlags__RegularEnum &
      256; // 256
    static +ValueModule: Class<SymbolFlags__ValueModule> &
      SymbolFlags__ValueModule &
      512; // 512
    static +NamespaceModule: Class<SymbolFlags__NamespaceModule> &
      SymbolFlags__NamespaceModule &
      1024; // 1024
    static +TypeLiteral: Class<SymbolFlags__TypeLiteral> &
      SymbolFlags__TypeLiteral &
      2048; // 2048
    static +ObjectLiteral: Class<SymbolFlags__ObjectLiteral> &
      SymbolFlags__ObjectLiteral &
      4096; // 4096
    static +Method: Class<SymbolFlags__Method> & SymbolFlags__Method & 8192; // 8192
    static +Constructor: Class<SymbolFlags__Constructor> &
      SymbolFlags__Constructor &
      16384; // 16384
    static +GetAccessor: Class<SymbolFlags__GetAccessor> &
      SymbolFlags__GetAccessor &
      32768; // 32768
    static +SetAccessor: Class<SymbolFlags__SetAccessor> &
      SymbolFlags__SetAccessor &
      65536; // 65536
    static +Signature: Class<SymbolFlags__Signature> &
      SymbolFlags__Signature &
      131072; // 131072
    static +TypeParameter: Class<SymbolFlags__TypeParameter> &
      SymbolFlags__TypeParameter &
      262144; // 262144
    static +TypeAlias: Class<SymbolFlags__TypeAlias> &
      SymbolFlags__TypeAlias &
      524288; // 524288
    static +ExportValue: Class<SymbolFlags__ExportValue> &
      SymbolFlags__ExportValue &
      1048576; // 1048576
    static +Alias: Class<SymbolFlags__Alias> & SymbolFlags__Alias & 2097152; // 2097152
    static +Prototype: Class<SymbolFlags__Prototype> &
      SymbolFlags__Prototype &
      4194304; // 4194304
    static +ExportStar: Class<SymbolFlags__ExportStar> &
      SymbolFlags__ExportStar &
      8388608; // 8388608
    static +Optional: Class<SymbolFlags__Optional> &
      SymbolFlags__Optional &
      16777216; // 16777216
    static +Transient: Class<SymbolFlags__Transient> &
      SymbolFlags__Transient &
      33554432; // 33554432
    static +Assignment: Class<SymbolFlags__Assignment> &
      SymbolFlags__Assignment &
      67108864; // 67108864
    static +ModuleExports: Class<SymbolFlags__ModuleExports> &
      SymbolFlags__ModuleExports &
      134217728; // 134217728
    static +Enum: Class<SymbolFlags__Enum> & SymbolFlags__Enum & 384; // 384
    static +Variable: Class<SymbolFlags__Variable> & SymbolFlags__Variable & 3; // 3
    static +Value: Class<SymbolFlags__Value> & SymbolFlags__Value & 67220415; // 67220415
    static +Type: Class<SymbolFlags__Type> & SymbolFlags__Type & 67897832; // 67897832
    static +Namespace: Class<SymbolFlags__Namespace> &
      SymbolFlags__Namespace &
      1920; // 1920
    static +Module: Class<SymbolFlags__Module> & SymbolFlags__Module & 1536; // 1536
    static +Accessor: Class<SymbolFlags__Accessor> &
      SymbolFlags__Accessor &
      98304; // 98304
    static +FunctionScopedVariableExcludes: Class<SymbolFlags__FunctionScopedVariableExcludes> &
      SymbolFlags__FunctionScopedVariableExcludes &
      67220414; // 67220414
    static +BlockScopedVariableExcludes: Class<SymbolFlags__BlockScopedVariableExcludes> &
      SymbolFlags__BlockScopedVariableExcludes &
      67220415; // 67220415
    static +ParameterExcludes: Class<SymbolFlags__ParameterExcludes> &
      SymbolFlags__ParameterExcludes &
      67220415; // 67220415
    static +PropertyExcludes: Class<SymbolFlags__PropertyExcludes> &
      SymbolFlags__PropertyExcludes &
      0; // 0
    static +EnumMemberExcludes: Class<SymbolFlags__EnumMemberExcludes> &
      SymbolFlags__EnumMemberExcludes &
      68008959; // 68008959
    static +FunctionExcludes: Class<SymbolFlags__FunctionExcludes> &
      SymbolFlags__FunctionExcludes &
      67219887; // 67219887
    static +ClassExcludes: Class<SymbolFlags__ClassExcludes> &
      SymbolFlags__ClassExcludes &
      68008383; // 68008383
    static +InterfaceExcludes: Class<SymbolFlags__InterfaceExcludes> &
      SymbolFlags__InterfaceExcludes &
      67897736; // 67897736
    static +RegularEnumExcludes: Class<SymbolFlags__RegularEnumExcludes> &
      SymbolFlags__RegularEnumExcludes &
      68008191; // 68008191
    static +ConstEnumExcludes: Class<SymbolFlags__ConstEnumExcludes> &
      SymbolFlags__ConstEnumExcludes &
      68008831; // 68008831
    static +ValueModuleExcludes: Class<SymbolFlags__ValueModuleExcludes> &
      SymbolFlags__ValueModuleExcludes &
      110735; // 110735
    static +NamespaceModuleExcludes: Class<SymbolFlags__NamespaceModuleExcludes> &
      SymbolFlags__NamespaceModuleExcludes &
      0; // 0
    static +MethodExcludes: Class<SymbolFlags__MethodExcludes> &
      SymbolFlags__MethodExcludes &
      67212223; // 67212223
    static +GetAccessorExcludes: Class<SymbolFlags__GetAccessorExcludes> &
      SymbolFlags__GetAccessorExcludes &
      67154879; // 67154879
    static +SetAccessorExcludes: Class<SymbolFlags__SetAccessorExcludes> &
      SymbolFlags__SetAccessorExcludes &
      67187647; // 67187647
    static +TypeParameterExcludes: Class<SymbolFlags__TypeParameterExcludes> &
      SymbolFlags__TypeParameterExcludes &
      67635688; // 67635688
    static +TypeAliasExcludes: Class<SymbolFlags__TypeAliasExcludes> &
      SymbolFlags__TypeAliasExcludes &
      67897832; // 67897832
    static +AliasExcludes: Class<SymbolFlags__AliasExcludes> &
      SymbolFlags__AliasExcludes &
      2097152; // 2097152
    static +ModuleMember: Class<SymbolFlags__ModuleMember> &
      SymbolFlags__ModuleMember &
      2623475; // 2623475
    static +ExportHasLocal: Class<SymbolFlags__ExportHasLocal> &
      SymbolFlags__ExportHasLocal &
      944; // 944
    static +BlockScoped: Class<SymbolFlags__BlockScoped> &
      SymbolFlags__BlockScoped &
      418; // 418
    static +PropertyOrAccessor: Class<SymbolFlags__PropertyOrAccessor> &
      SymbolFlags__PropertyOrAccessor &
      98308; // 98308
    static +ClassMember: Class<SymbolFlags__ClassMember> &
      SymbolFlags__ClassMember &
      106500; // 106500
  }

  declare class SymbolFlags__None mixins SymbolFlags {}
  declare class SymbolFlags__FunctionScopedVariable mixins SymbolFlags {}
  declare class SymbolFlags__BlockScopedVariable mixins SymbolFlags {}
  declare class SymbolFlags__Property mixins SymbolFlags {}
  declare class SymbolFlags__EnumMember mixins SymbolFlags {}
  declare class SymbolFlags__Function mixins SymbolFlags {}
  declare class SymbolFlags__Class mixins SymbolFlags {}
  declare class SymbolFlags__Interface mixins SymbolFlags {}
  declare class SymbolFlags__ConstEnum mixins SymbolFlags {}
  declare class SymbolFlags__RegularEnum mixins SymbolFlags {}
  declare class SymbolFlags__ValueModule mixins SymbolFlags {}
  declare class SymbolFlags__NamespaceModule mixins SymbolFlags {}
  declare class SymbolFlags__TypeLiteral mixins SymbolFlags {}
  declare class SymbolFlags__ObjectLiteral mixins SymbolFlags {}
  declare class SymbolFlags__Method mixins SymbolFlags {}
  declare class SymbolFlags__Constructor mixins SymbolFlags {}
  declare class SymbolFlags__GetAccessor mixins SymbolFlags {}
  declare class SymbolFlags__SetAccessor mixins SymbolFlags {}
  declare class SymbolFlags__Signature mixins SymbolFlags {}
  declare class SymbolFlags__TypeParameter mixins SymbolFlags {}
  declare class SymbolFlags__TypeAlias mixins SymbolFlags {}
  declare class SymbolFlags__ExportValue mixins SymbolFlags {}
  declare class SymbolFlags__Alias mixins SymbolFlags {}
  declare class SymbolFlags__Prototype mixins SymbolFlags {}
  declare class SymbolFlags__ExportStar mixins SymbolFlags {}
  declare class SymbolFlags__Optional mixins SymbolFlags {}
  declare class SymbolFlags__Transient mixins SymbolFlags {}
  declare class SymbolFlags__Assignment mixins SymbolFlags {}
  declare class SymbolFlags__ModuleExports mixins SymbolFlags {}
  declare class SymbolFlags__Enum mixins SymbolFlags {}
  declare class SymbolFlags__Variable mixins SymbolFlags {}
  declare class SymbolFlags__Value mixins SymbolFlags {}
  declare class SymbolFlags__Type mixins SymbolFlags {}
  declare class SymbolFlags__Namespace mixins SymbolFlags {}
  declare class SymbolFlags__Module mixins SymbolFlags {}
  declare class SymbolFlags__Accessor mixins SymbolFlags {}
  declare class SymbolFlags__FunctionScopedVariableExcludes
    mixins SymbolFlags {}
  declare class SymbolFlags__BlockScopedVariableExcludes mixins SymbolFlags {}
  declare class SymbolFlags__ParameterExcludes mixins SymbolFlags {}
  declare class SymbolFlags__PropertyExcludes mixins SymbolFlags {}
  declare class SymbolFlags__EnumMemberExcludes mixins SymbolFlags {}
  declare class SymbolFlags__FunctionExcludes mixins SymbolFlags {}
  declare class SymbolFlags__ClassExcludes mixins SymbolFlags {}
  declare class SymbolFlags__InterfaceExcludes mixins SymbolFlags {}
  declare class SymbolFlags__RegularEnumExcludes mixins SymbolFlags {}
  declare class SymbolFlags__ConstEnumExcludes mixins SymbolFlags {}
  declare class SymbolFlags__ValueModuleExcludes mixins SymbolFlags {}
  declare class SymbolFlags__NamespaceModuleExcludes mixins SymbolFlags {}
  declare class SymbolFlags__MethodExcludes mixins SymbolFlags {}
  declare class SymbolFlags__GetAccessorExcludes mixins SymbolFlags {}
  declare class SymbolFlags__SetAccessorExcludes mixins SymbolFlags {}
  declare class SymbolFlags__TypeParameterExcludes mixins SymbolFlags {}
  declare class SymbolFlags__TypeAliasExcludes mixins SymbolFlags {}
  declare class SymbolFlags__AliasExcludes mixins SymbolFlags {}
  declare class SymbolFlags__ModuleMember mixins SymbolFlags {}
  declare class SymbolFlags__ExportHasLocal mixins SymbolFlags {}
  declare class SymbolFlags__BlockScoped mixins SymbolFlags {}
  declare class SymbolFlags__PropertyOrAccessor mixins SymbolFlags {}
  declare class SymbolFlags__ClassMember mixins SymbolFlags {}

  declare type Symbol = {
    flags: SymbolFlags,
    escapedName: __String,
    declarations: Declaration[],
    valueDeclaration: Declaration,
    members?: SymbolTable,
    exports?: SymbolTable,
    globalExports?: SymbolTable,
    name: string,
    getFlags(): SymbolFlags,
    getEscapedName(): __String,
    getName(): string,
    getDeclarations(): Declaration[] | void,
    getDocumentationComment(
      typeChecker: TypeChecker | void
    ): SymbolDisplayPart[],
    getJsDocTags(): JSDocTagInfo[]
  };

  declare class InternalSymbolName {
    static +Call: Class<InternalSymbolName__Call> &
      InternalSymbolName__Call &
      "__call"; // "__call"
    static +Constructor: Class<InternalSymbolName__Constructor> &
      InternalSymbolName__Constructor &
      "__constructor"; // "__constructor"
    static +New: Class<InternalSymbolName__New> &
      InternalSymbolName__New &
      "__new"; // "__new"
    static +Index: Class<InternalSymbolName__Index> &
      InternalSymbolName__Index &
      "__index"; // "__index"
    static +ExportStar: Class<InternalSymbolName__ExportStar> &
      InternalSymbolName__ExportStar &
      "__export"; // "__export"
    static +Global: Class<InternalSymbolName__Global> &
      InternalSymbolName__Global &
      "__global"; // "__global"
    static +Missing: Class<InternalSymbolName__Missing> &
      InternalSymbolName__Missing &
      "__missing"; // "__missing"
    static +Type: Class<InternalSymbolName__Type> &
      InternalSymbolName__Type &
      "__type"; // "__type"
    static +Object: Class<InternalSymbolName__Object> &
      InternalSymbolName__Object &
      "__object"; // "__object"
    static +JSXAttributes: Class<InternalSymbolName__JSXAttributes> &
      InternalSymbolName__JSXAttributes &
      "__jsxAttributes"; // "__jsxAttributes"
    static +Class: Class<InternalSymbolName__Class> &
      InternalSymbolName__Class &
      "__class"; // "__class"
    static +Function: Class<InternalSymbolName__Function> &
      InternalSymbolName__Function &
      "__function"; // "__function"
    static +Computed: Class<InternalSymbolName__Computed> &
      InternalSymbolName__Computed &
      "__computed"; // "__computed"
    static +Resolving: Class<InternalSymbolName__Resolving> &
      InternalSymbolName__Resolving &
      "__resolving__"; // "__resolving__"
    static +ExportEquals: Class<InternalSymbolName__ExportEquals> &
      InternalSymbolName__ExportEquals &
      "export="; // "export="
    static +Default: Class<InternalSymbolName__Default> &
      InternalSymbolName__Default &
      "default"; // "default"
    static +This: Class<InternalSymbolName__This> &
      InternalSymbolName__This &
      "this"; // "this"
  }

  declare class InternalSymbolName__Call mixins InternalSymbolName {}
  declare class InternalSymbolName__Constructor mixins InternalSymbolName {}
  declare class InternalSymbolName__New mixins InternalSymbolName {}
  declare class InternalSymbolName__Index mixins InternalSymbolName {}
  declare class InternalSymbolName__ExportStar mixins InternalSymbolName {}
  declare class InternalSymbolName__Global mixins InternalSymbolName {}
  declare class InternalSymbolName__Missing mixins InternalSymbolName {}
  declare class InternalSymbolName__Type mixins InternalSymbolName {}
  declare class InternalSymbolName__Object mixins InternalSymbolName {}
  declare class InternalSymbolName__JSXAttributes mixins InternalSymbolName {}
  declare class InternalSymbolName__Class mixins InternalSymbolName {}
  declare class InternalSymbolName__Function mixins InternalSymbolName {}
  declare class InternalSymbolName__Computed mixins InternalSymbolName {}
  declare class InternalSymbolName__Resolving mixins InternalSymbolName {}
  declare class InternalSymbolName__ExportEquals mixins InternalSymbolName {}
  declare class InternalSymbolName__Default mixins InternalSymbolName {}
  declare class InternalSymbolName__This mixins InternalSymbolName {}

  declare type __String =
    | (string & {
        __escapedIdentifier: void
      })
    | (void & {
        __escapedIdentifier: void
      })
    | InternalSymbolName;
  declare class ReadonlyUnderscoreEscapedMap<T> {
    get(key: __String): T | void,
    has(key: __String): boolean,
    forEach(action: (value: T, key: __String) => void): void,
    size: number,
    keys(): Iterator<__String>,
    values(): Iterator<T>,
    entries(): Iterator<[__String, T]>
  }

  declare class UnderscoreEscapedMap<T> extends ReadonlyUnderscoreEscapedMap<T> {
    set(key: __String, value: T): this,
    delete(key: __String): boolean,
    clear(): void
  }

  declare type SymbolTable = UnderscoreEscapedMap<Symbol>;
  declare class TypeFlags {
    static +Any: Class<TypeFlags__Any> & TypeFlags__Any & 1; // 1
    static +Unknown: Class<TypeFlags__Unknown> & TypeFlags__Unknown & 2; // 2
    static +String: Class<TypeFlags__String> & TypeFlags__String & 4; // 4
    static +Number: Class<TypeFlags__Number> & TypeFlags__Number & 8; // 8
    static +Boolean: Class<TypeFlags__Boolean> & TypeFlags__Boolean & 16; // 16
    static +Enum: Class<TypeFlags__Enum> & TypeFlags__Enum & 32; // 32
    static +BigInt: Class<TypeFlags__BigInt> & TypeFlags__BigInt & 64; // 64
    static +StringLiteral: Class<TypeFlags__StringLiteral> &
      TypeFlags__StringLiteral &
      128; // 128
    static +NumberLiteral: Class<TypeFlags__NumberLiteral> &
      TypeFlags__NumberLiteral &
      256; // 256
    static +BooleanLiteral: Class<TypeFlags__BooleanLiteral> &
      TypeFlags__BooleanLiteral &
      512; // 512
    static +EnumLiteral: Class<TypeFlags__EnumLiteral> &
      TypeFlags__EnumLiteral &
      1024; // 1024
    static +BigIntLiteral: Class<TypeFlags__BigIntLiteral> &
      TypeFlags__BigIntLiteral &
      2048; // 2048
    static +ESSymbol: Class<TypeFlags__ESSymbol> & TypeFlags__ESSymbol & 4096; // 4096
    static +UniqueESSymbol: Class<TypeFlags__UniqueESSymbol> &
      TypeFlags__UniqueESSymbol &
      8192; // 8192
    static +Void: Class<TypeFlags__Void> & TypeFlags__Void & 16384; // 16384
    static +Undefined: Class<TypeFlags__Undefined> &
      TypeFlags__Undefined &
      32768; // 32768
    static +Null: Class<TypeFlags__Null> & TypeFlags__Null & 65536; // 65536
    static +Never: Class<TypeFlags__Never> & TypeFlags__Never & 131072; // 131072
    static +TypeParameter: Class<TypeFlags__TypeParameter> &
      TypeFlags__TypeParameter &
      262144; // 262144
    static +Object: Class<TypeFlags__Object> & TypeFlags__Object & 524288; // 524288
    static +Union: Class<TypeFlags__Union> & TypeFlags__Union & 1048576; // 1048576
    static +Intersection: Class<TypeFlags__Intersection> &
      TypeFlags__Intersection &
      2097152; // 2097152
    static +Index: Class<TypeFlags__Index> & TypeFlags__Index & 4194304; // 4194304
    static +IndexedAccess: Class<TypeFlags__IndexedAccess> &
      TypeFlags__IndexedAccess &
      8388608; // 8388608
    static +Conditional: Class<TypeFlags__Conditional> &
      TypeFlags__Conditional &
      16777216; // 16777216
    static +Substitution: Class<TypeFlags__Substitution> &
      TypeFlags__Substitution &
      33554432; // 33554432
    static +NonPrimitive: Class<TypeFlags__NonPrimitive> &
      TypeFlags__NonPrimitive &
      67108864; // 67108864
    static +Literal: Class<TypeFlags__Literal> & TypeFlags__Literal & 2944; // 2944
    static +Unit: Class<TypeFlags__Unit> & TypeFlags__Unit & 109440; // 109440
    static +StringOrNumberLiteral: Class<TypeFlags__StringOrNumberLiteral> &
      TypeFlags__StringOrNumberLiteral &
      384; // 384
    static +PossiblyFalsy: Class<TypeFlags__PossiblyFalsy> &
      TypeFlags__PossiblyFalsy &
      117724; // 117724
    static +StringLike: Class<TypeFlags__StringLike> &
      TypeFlags__StringLike &
      132; // 132
    static +NumberLike: Class<TypeFlags__NumberLike> &
      TypeFlags__NumberLike &
      296; // 296
    static +BigIntLike: Class<TypeFlags__BigIntLike> &
      TypeFlags__BigIntLike &
      2112; // 2112
    static +BooleanLike: Class<TypeFlags__BooleanLike> &
      TypeFlags__BooleanLike &
      528; // 528
    static +EnumLike: Class<TypeFlags__EnumLike> & TypeFlags__EnumLike & 1056; // 1056
    static +ESSymbolLike: Class<TypeFlags__ESSymbolLike> &
      TypeFlags__ESSymbolLike &
      12288; // 12288
    static +VoidLike: Class<TypeFlags__VoidLike> & TypeFlags__VoidLike & 49152; // 49152
    static +UnionOrIntersection: Class<TypeFlags__UnionOrIntersection> &
      TypeFlags__UnionOrIntersection &
      3145728; // 3145728
    static +StructuredType: Class<TypeFlags__StructuredType> &
      TypeFlags__StructuredType &
      3670016; // 3670016
    static +TypeVariable: Class<TypeFlags__TypeVariable> &
      TypeFlags__TypeVariable &
      8650752; // 8650752
    static +InstantiableNonPrimitive: Class<TypeFlags__InstantiableNonPrimitive> &
      TypeFlags__InstantiableNonPrimitive &
      58982400; // 58982400
    static +InstantiablePrimitive: Class<TypeFlags__InstantiablePrimitive> &
      TypeFlags__InstantiablePrimitive &
      4194304; // 4194304
    static +Instantiable: Class<TypeFlags__Instantiable> &
      TypeFlags__Instantiable &
      63176704; // 63176704
    static +StructuredOrInstantiable: Class<TypeFlags__StructuredOrInstantiable> &
      TypeFlags__StructuredOrInstantiable &
      66846720; // 66846720
    static +Narrowable: Class<TypeFlags__Narrowable> &
      TypeFlags__Narrowable &
      133970943; // 133970943
    static +NotUnionOrUnit: Class<TypeFlags__NotUnionOrUnit> &
      TypeFlags__NotUnionOrUnit &
      67637251; // 67637251
  }

  declare class TypeFlags__Any mixins TypeFlags {}
  declare class TypeFlags__Unknown mixins TypeFlags {}
  declare class TypeFlags__String mixins TypeFlags {}
  declare class TypeFlags__Number mixins TypeFlags {}
  declare class TypeFlags__Boolean mixins TypeFlags {}
  declare class TypeFlags__Enum mixins TypeFlags {}
  declare class TypeFlags__BigInt mixins TypeFlags {}
  declare class TypeFlags__StringLiteral mixins TypeFlags {}
  declare class TypeFlags__NumberLiteral mixins TypeFlags {}
  declare class TypeFlags__BooleanLiteral mixins TypeFlags {}
  declare class TypeFlags__EnumLiteral mixins TypeFlags {}
  declare class TypeFlags__BigIntLiteral mixins TypeFlags {}
  declare class TypeFlags__ESSymbol mixins TypeFlags {}
  declare class TypeFlags__UniqueESSymbol mixins TypeFlags {}
  declare class TypeFlags__Void mixins TypeFlags {}
  declare class TypeFlags__Undefined mixins TypeFlags {}
  declare class TypeFlags__Null mixins TypeFlags {}
  declare class TypeFlags__Never mixins TypeFlags {}
  declare class TypeFlags__TypeParameter mixins TypeFlags {}
  declare class TypeFlags__Object mixins TypeFlags {}
  declare class TypeFlags__Union mixins TypeFlags {}
  declare class TypeFlags__Intersection mixins TypeFlags {}
  declare class TypeFlags__Index mixins TypeFlags {}
  declare class TypeFlags__IndexedAccess mixins TypeFlags {}
  declare class TypeFlags__Conditional mixins TypeFlags {}
  declare class TypeFlags__Substitution mixins TypeFlags {}
  declare class TypeFlags__NonPrimitive mixins TypeFlags {}
  declare class TypeFlags__Literal mixins TypeFlags {}
  declare class TypeFlags__Unit mixins TypeFlags {}
  declare class TypeFlags__StringOrNumberLiteral mixins TypeFlags {}
  declare class TypeFlags__PossiblyFalsy mixins TypeFlags {}
  declare class TypeFlags__StringLike mixins TypeFlags {}
  declare class TypeFlags__NumberLike mixins TypeFlags {}
  declare class TypeFlags__BigIntLike mixins TypeFlags {}
  declare class TypeFlags__BooleanLike mixins TypeFlags {}
  declare class TypeFlags__EnumLike mixins TypeFlags {}
  declare class TypeFlags__ESSymbolLike mixins TypeFlags {}
  declare class TypeFlags__VoidLike mixins TypeFlags {}
  declare class TypeFlags__UnionOrIntersection mixins TypeFlags {}
  declare class TypeFlags__StructuredType mixins TypeFlags {}
  declare class TypeFlags__TypeVariable mixins TypeFlags {}
  declare class TypeFlags__InstantiableNonPrimitive mixins TypeFlags {}
  declare class TypeFlags__InstantiablePrimitive mixins TypeFlags {}
  declare class TypeFlags__Instantiable mixins TypeFlags {}
  declare class TypeFlags__StructuredOrInstantiable mixins TypeFlags {}
  declare class TypeFlags__Narrowable mixins TypeFlags {}
  declare class TypeFlags__NotUnionOrUnit mixins TypeFlags {}

  declare type DestructuringPattern =
    | BindingPattern
    | ObjectLiteralExpression
    | ArrayLiteralExpression;
  declare type Type = {
    flags: TypeFlags,
    symbol: Symbol,
    pattern?: DestructuringPattern,
    aliasSymbol?: Symbol,
    aliasTypeArguments?: $ReadOnlyArray<Type>,
    getFlags(): TypeFlags,
    getSymbol(): Symbol | void,
    getProperties(): Symbol[],
    getProperty(propertyName: string): Symbol | void,
    getApparentProperties(): Symbol[],
    getCallSignatures(): $ReadOnlyArray<Signature>,
    getConstructSignatures(): $ReadOnlyArray<Signature>,
    getStringIndexType(): Type | void,
    getNumberIndexType(): Type | void,
    getBaseTypes(): BaseType[] | void,
    getNonNullableType(): Type,
    getConstraint(): Type | void,
    getDefault(): Type | void,
    isUnion(): boolean,
    isIntersection(): boolean,
    isUnionOrIntersection(): boolean,
    isLiteral(): boolean,
    isStringLiteral(): boolean,
    isNumberLiteral(): boolean,
    isTypeParameter(): boolean,
    isClassOrInterface(): boolean,
    isClass(): boolean
  };

  declare type LiteralType = {
    ...$Exact<Type>,

    value: string | number | PseudoBigInt,
    freshType: LiteralType,
    regularType: LiteralType
  };

  declare type UniqueESSymbolType = {
    ...$Exact<Type>,

    symbol: Symbol,
    escapedName: __String
  };

  declare type StringLiteralType = {
    ...$Exact<LiteralType>,

    value: string
  };

  declare type NumberLiteralType = {
    ...$Exact<LiteralType>,

    value: number
  };

  declare type BigIntLiteralType = {
    ...$Exact<LiteralType>,

    value: PseudoBigInt
  };

  declare type EnumType = { ...$Exact<Type> };

  declare class ObjectFlags {
    static +Class: Class<ObjectFlags__Class> & ObjectFlags__Class & 1; // 1
    static +Interface: Class<ObjectFlags__Interface> &
      ObjectFlags__Interface &
      2; // 2
    static +Reference: Class<ObjectFlags__Reference> &
      ObjectFlags__Reference &
      4; // 4
    static +Tuple: Class<ObjectFlags__Tuple> & ObjectFlags__Tuple & 8; // 8
    static +Anonymous: Class<ObjectFlags__Anonymous> &
      ObjectFlags__Anonymous &
      16; // 16
    static +Mapped: Class<ObjectFlags__Mapped> & ObjectFlags__Mapped & 32; // 32
    static +Instantiated: Class<ObjectFlags__Instantiated> &
      ObjectFlags__Instantiated &
      64; // 64
    static +ObjectLiteral: Class<ObjectFlags__ObjectLiteral> &
      ObjectFlags__ObjectLiteral &
      128; // 128
    static +EvolvingArray: Class<ObjectFlags__EvolvingArray> &
      ObjectFlags__EvolvingArray &
      256; // 256
    static +ObjectLiteralPatternWithComputedProperties: Class<ObjectFlags__ObjectLiteralPatternWithComputedProperties> &
      ObjectFlags__ObjectLiteralPatternWithComputedProperties &
      512; // 512
    static +ContainsSpread: Class<ObjectFlags__ContainsSpread> &
      ObjectFlags__ContainsSpread &
      1024; // 1024
    static +ReverseMapped: Class<ObjectFlags__ReverseMapped> &
      ObjectFlags__ReverseMapped &
      2048; // 2048
    static +JsxAttributes: Class<ObjectFlags__JsxAttributes> &
      ObjectFlags__JsxAttributes &
      4096; // 4096
    static +MarkerType: Class<ObjectFlags__MarkerType> &
      ObjectFlags__MarkerType &
      8192; // 8192
    static +JSLiteral: Class<ObjectFlags__JSLiteral> &
      ObjectFlags__JSLiteral &
      16384; // 16384
    static +FreshLiteral: Class<ObjectFlags__FreshLiteral> &
      ObjectFlags__FreshLiteral &
      32768; // 32768
    static +ClassOrInterface: Class<ObjectFlags__ClassOrInterface> &
      ObjectFlags__ClassOrInterface &
      3; // 3
  }

  declare class ObjectFlags__Class mixins ObjectFlags {}
  declare class ObjectFlags__Interface mixins ObjectFlags {}
  declare class ObjectFlags__Reference mixins ObjectFlags {}
  declare class ObjectFlags__Tuple mixins ObjectFlags {}
  declare class ObjectFlags__Anonymous mixins ObjectFlags {}
  declare class ObjectFlags__Mapped mixins ObjectFlags {}
  declare class ObjectFlags__Instantiated mixins ObjectFlags {}
  declare class ObjectFlags__ObjectLiteral mixins ObjectFlags {}
  declare class ObjectFlags__EvolvingArray mixins ObjectFlags {}
  declare class ObjectFlags__ObjectLiteralPatternWithComputedProperties
    mixins ObjectFlags {}
  declare class ObjectFlags__ContainsSpread mixins ObjectFlags {}
  declare class ObjectFlags__ReverseMapped mixins ObjectFlags {}
  declare class ObjectFlags__JsxAttributes mixins ObjectFlags {}
  declare class ObjectFlags__MarkerType mixins ObjectFlags {}
  declare class ObjectFlags__JSLiteral mixins ObjectFlags {}
  declare class ObjectFlags__FreshLiteral mixins ObjectFlags {}
  declare class ObjectFlags__ClassOrInterface mixins ObjectFlags {}

  declare type ObjectType = {
    ...$Exact<Type>,

    objectFlags: ObjectFlags
  };

  declare type InterfaceType = {
    ...$Exact<ObjectType>,

    typeParameters: TypeParameter[] | void,
    outerTypeParameters: TypeParameter[] | void,
    localTypeParameters: TypeParameter[] | void,
    thisType: TypeParameter | void
  };

  declare type BaseType = ObjectType | IntersectionType;
  declare type InterfaceTypeWithDeclaredMembers = {
    ...$Exact<InterfaceType>,

    declaredProperties: Symbol[],
    declaredCallSignatures: Signature[],
    declaredConstructSignatures: Signature[],
    declaredStringIndexInfo?: IndexInfo,
    declaredNumberIndexInfo?: IndexInfo
  };

  declare type TypeReference = {
    ...$Exact<ObjectType>,

    target: GenericType,
    typeArguments?: $ReadOnlyArray<Type>
  };

  declare type GenericType = {
    ...$Exact<InterfaceType>,
    ...$Exact<TypeReference>
  };

  declare type TupleType = {
    ...$Exact<GenericType>,

    minLength: number,
    hasRestElement: boolean,
    associatedNames?: __String[]
  };

  declare type TupleTypeReference = {
    ...$Exact<TypeReference>,

    target: TupleType
  };

  declare type UnionOrIntersectionType = {
    ...$Exact<Type>,

    types: Type[]
  };

  declare type UnionType = { ...$Exact<UnionOrIntersectionType> };

  declare type IntersectionType = { ...$Exact<UnionOrIntersectionType> };

  declare type StructuredType = ObjectType | UnionType | IntersectionType;
  declare type EvolvingArrayType = {
    ...$Exact<ObjectType>,

    elementType: Type,
    finalArrayType?: Type
  };

  declare type InstantiableType = { ...$Exact<Type> };

  declare type TypeParameter = { ...$Exact<InstantiableType> };

  declare type IndexedAccessType = {
    ...$Exact<InstantiableType>,

    objectType: Type,
    indexType: Type,
    constraint?: Type,
    simplified?: Type
  };

  declare type TypeVariable = TypeParameter | IndexedAccessType;
  declare type IndexType = {
    ...$Exact<InstantiableType>,

    type: InstantiableType | UnionOrIntersectionType
  };

  declare type ConditionalRoot = {
    node: ConditionalTypeNode,
    checkType: Type,
    extendsType: Type,
    trueType: Type,
    falseType: Type,
    isDistributive: boolean,
    inferTypeParameters?: TypeParameter[],
    outerTypeParameters?: TypeParameter[],
    instantiations?: Map<Type>,
    aliasSymbol?: Symbol,
    aliasTypeArguments?: Type[]
  };

  declare type ConditionalType = {
    ...$Exact<InstantiableType>,

    root: ConditionalRoot,
    checkType: Type,
    extendsType: Type,
    resolvedTrueType?: Type,
    resolvedFalseType?: Type
  };

  declare type SubstitutionType = {
    ...$Exact<InstantiableType>,

    typeVariable: TypeVariable,
    substitute: Type
  };

  declare class SignatureKind {
    static +Call: Class<SignatureKind__Call> & SignatureKind__Call & 0; // 0
    static +Construct: Class<SignatureKind__Construct> &
      SignatureKind__Construct &
      1; // 1
  }

  declare class SignatureKind__Call mixins SignatureKind {}
  declare class SignatureKind__Construct mixins SignatureKind {}

  declare type Signature = {
    declaration?: SignatureDeclaration | JSDocSignature,
    typeParameters?: $ReadOnlyArray<TypeParameter>,
    parameters: $ReadOnlyArray<Symbol>,
    getDeclaration(): SignatureDeclaration,
    getTypeParameters(): TypeParameter[] | void,
    getParameters(): Symbol[],
    getReturnType(): Type,
    getDocumentationComment(
      typeChecker: TypeChecker | void
    ): SymbolDisplayPart[],
    getJsDocTags(): JSDocTagInfo[]
  };

  declare class IndexKind {
    static +String: Class<IndexKind__String> & IndexKind__String & 0; // 0
    static +Number: Class<IndexKind__Number> & IndexKind__Number & 1; // 1
  }

  declare class IndexKind__String mixins IndexKind {}
  declare class IndexKind__Number mixins IndexKind {}

  declare type IndexInfo = {
    type: Type,
    isReadonly: boolean,
    declaration?: IndexSignatureDeclaration
  };

  declare class InferencePriority {
    static +NakedTypeVariable: Class<InferencePriority__NakedTypeVariable> &
      InferencePriority__NakedTypeVariable &
      1; // 1
    static +HomomorphicMappedType: Class<InferencePriority__HomomorphicMappedType> &
      InferencePriority__HomomorphicMappedType &
      2; // 2
    static +MappedTypeConstraint: Class<InferencePriority__MappedTypeConstraint> &
      InferencePriority__MappedTypeConstraint &
      4; // 4
    static +ReturnType: Class<InferencePriority__ReturnType> &
      InferencePriority__ReturnType &
      8; // 8
    static +LiteralKeyof: Class<InferencePriority__LiteralKeyof> &
      InferencePriority__LiteralKeyof &
      16; // 16
    static +NoConstraints: Class<InferencePriority__NoConstraints> &
      InferencePriority__NoConstraints &
      32; // 32
    static +AlwaysStrict: Class<InferencePriority__AlwaysStrict> &
      InferencePriority__AlwaysStrict &
      64; // 64
    static +PriorityImpliesCombination: Class<InferencePriority__PriorityImpliesCombination> &
      InferencePriority__PriorityImpliesCombination &
      28; // 28
  }

  declare class InferencePriority__NakedTypeVariable mixins InferencePriority {}
  declare class InferencePriority__HomomorphicMappedType
    mixins InferencePriority {}
  declare class InferencePriority__MappedTypeConstraint
    mixins InferencePriority {}
  declare class InferencePriority__ReturnType mixins InferencePriority {}
  declare class InferencePriority__LiteralKeyof mixins InferencePriority {}
  declare class InferencePriority__NoConstraints mixins InferencePriority {}
  declare class InferencePriority__AlwaysStrict mixins InferencePriority {}
  declare class InferencePriority__PriorityImpliesCombination
    mixins InferencePriority {}

  declare type JsFileExtensionInfo = FileExtensionInfo;
  declare type FileExtensionInfo = {
    extension: string,
    isMixedContent: boolean,
    scriptKind?: ScriptKind
  };

  declare type DiagnosticMessage = {
    key: string,
    category: DiagnosticCategory,
    code: number,
    message: string,
    reportsUnnecessary?: {}
  };

  declare type DiagnosticMessageChain = {
    messageText: string,
    category: DiagnosticCategory,
    code: number,
    next?: DiagnosticMessageChain
  };

  declare type Diagnostic = {
    ...$Exact<DiagnosticRelatedInformation>,

    reportsUnnecessary?: {},
    source?: string,
    relatedInformation?: DiagnosticRelatedInformation[]
  };

  declare type DiagnosticRelatedInformation = {
    category: DiagnosticCategory,
    code: number,
    file: SourceFile | void,
    start: number | void,
    length: number | void,
    messageText: string | DiagnosticMessageChain
  };

  declare type DiagnosticWithLocation = {
    ...$Exact<Diagnostic>,

    file: SourceFile,
    start: number,
    length: number
  };

  declare class DiagnosticCategory {
    static +Warning: Class<DiagnosticCategory__Warning> &
      DiagnosticCategory__Warning &
      0; // 0
    static +Error: Class<DiagnosticCategory__Error> &
      DiagnosticCategory__Error &
      1; // 1
    static +Suggestion: Class<DiagnosticCategory__Suggestion> &
      DiagnosticCategory__Suggestion &
      2; // 2
    static +Message: Class<DiagnosticCategory__Message> &
      DiagnosticCategory__Message &
      3; // 3
  }

  declare class DiagnosticCategory__Warning mixins DiagnosticCategory {}
  declare class DiagnosticCategory__Error mixins DiagnosticCategory {}
  declare class DiagnosticCategory__Suggestion mixins DiagnosticCategory {}
  declare class DiagnosticCategory__Message mixins DiagnosticCategory {}

  declare class ModuleResolutionKind {
    static +Classic: Class<ModuleResolutionKind__Classic> &
      ModuleResolutionKind__Classic &
      1; // 1
    static +NodeJs: Class<ModuleResolutionKind__NodeJs> &
      ModuleResolutionKind__NodeJs &
      2; // 2
  }

  declare class ModuleResolutionKind__Classic mixins ModuleResolutionKind {}
  declare class ModuleResolutionKind__NodeJs mixins ModuleResolutionKind {}

  declare type PluginImport = {
    name: string
  };

  declare type ProjectReference = {
    path: string,
    originalPath?: string,
    prepend?: boolean,
    circular?: boolean
  };

  declare type CompilerOptionsValue =
    | string
    | number
    | boolean
    | (string | number)[]
    | string[]
    | MapLike<string[]>
    | PluginImport[]
    | ProjectReference[]
    | null
    | void;
  declare type CompilerOptions = {
    allowJs?: boolean,
    allowSyntheticDefaultImports?: boolean,
    allowUnreachableCode?: boolean,
    allowUnusedLabels?: boolean,
    alwaysStrict?: boolean,
    baseUrl?: string,
    charset?: string,
    checkJs?: boolean,
    declaration?: boolean,
    declarationMap?: boolean,
    emitDeclarationOnly?: boolean,
    declarationDir?: string,
    disableSizeLimit?: boolean,
    downlevelIteration?: boolean,
    emitBOM?: boolean,
    emitDecoratorMetadata?: boolean,
    experimentalDecorators?: boolean,
    forceConsistentCasingInFileNames?: boolean,
    importHelpers?: boolean,
    inlineSourceMap?: boolean,
    inlineSources?: boolean,
    isolatedModules?: boolean,
    jsx?: JsxEmit,
    keyofStringsOnly?: boolean,
    lib?: string[],
    locale?: string,
    mapRoot?: string,
    maxNodeModuleJsDepth?: number,
    module?: ModuleKind,
    moduleResolution?: ModuleResolutionKind,
    newLine?: NewLineKind,
    noEmit?: boolean,
    noEmitHelpers?: boolean,
    noEmitOnError?: boolean,
    noErrorTruncation?: boolean,
    noFallthroughCasesInSwitch?: boolean,
    noImplicitAny?: boolean,
    noImplicitReturns?: boolean,
    noImplicitThis?: boolean,
    noStrictGenericChecks?: boolean,
    noUnusedLocals?: boolean,
    noUnusedParameters?: boolean,
    noImplicitUseStrict?: boolean,
    noLib?: boolean,
    noResolve?: boolean,
    out?: string,
    outDir?: string,
    outFile?: string,
    paths?: MapLike<string[]>,
    preserveConstEnums?: boolean,
    preserveSymlinks?: boolean,
    project?: string,
    reactNamespace?: string,
    jsxFactory?: string,
    composite?: boolean,
    removeComments?: boolean,
    rootDir?: string,
    rootDirs?: string[],
    skipLibCheck?: boolean,
    skipDefaultLibCheck?: boolean,
    sourceMap?: boolean,
    sourceRoot?: string,
    strict?: boolean,
    strictFunctionTypes?: boolean,
    strictBindCallApply?: boolean,
    strictNullChecks?: boolean,
    strictPropertyInitialization?: boolean,
    stripInternal?: boolean,
    suppressExcessPropertyErrors?: boolean,
    suppressImplicitAnyIndexErrors?: boolean,
    target?: ScriptTarget,
    traceResolution?: boolean,
    resolveJsonModule?: boolean,
    types?: string[],
    typeRoots?: string[],
    esModuleInterop?: boolean,
    [option: string]: CompilerOptionsValue | TsConfigSourceFile | void
  };

  declare type TypeAcquisition = {
    enableAutoDiscovery?: boolean,
    enable?: boolean,
    include?: string[],
    exclude?: string[],
    [option: string]: string[] | boolean | void
  };

  declare class ModuleKind {
    static +None: Class<ModuleKind__None> & ModuleKind__None & 0; // 0
    static +CommonJS: Class<ModuleKind__CommonJS> & ModuleKind__CommonJS & 1; // 1
    static +AMD: Class<ModuleKind__AMD> & ModuleKind__AMD & 2; // 2
    static +UMD: Class<ModuleKind__UMD> & ModuleKind__UMD & 3; // 3
    static +System: Class<ModuleKind__System> & ModuleKind__System & 4; // 4
    static +ES2015: Class<ModuleKind__ES2015> & ModuleKind__ES2015 & 5; // 5
    static +ESNext: Class<ModuleKind__ESNext> & ModuleKind__ESNext & 6; // 6
  }

  declare class ModuleKind__None mixins ModuleKind {}
  declare class ModuleKind__CommonJS mixins ModuleKind {}
  declare class ModuleKind__AMD mixins ModuleKind {}
  declare class ModuleKind__UMD mixins ModuleKind {}
  declare class ModuleKind__System mixins ModuleKind {}
  declare class ModuleKind__ES2015 mixins ModuleKind {}
  declare class ModuleKind__ESNext mixins ModuleKind {}

  declare class JsxEmit {
    static +None: Class<JsxEmit__None> & JsxEmit__None & 0; // 0
    static +Preserve: Class<JsxEmit__Preserve> & JsxEmit__Preserve & 1; // 1
    static +React: Class<JsxEmit__React> & JsxEmit__React & 2; // 2
    static +ReactNative: Class<JsxEmit__ReactNative> & JsxEmit__ReactNative & 3; // 3
  }

  declare class JsxEmit__None mixins JsxEmit {}
  declare class JsxEmit__Preserve mixins JsxEmit {}
  declare class JsxEmit__React mixins JsxEmit {}
  declare class JsxEmit__ReactNative mixins JsxEmit {}

  declare class NewLineKind {
    static +CarriageReturnLineFeed: Class<NewLineKind__CarriageReturnLineFeed> &
      NewLineKind__CarriageReturnLineFeed &
      0; // 0
    static +LineFeed: Class<NewLineKind__LineFeed> & NewLineKind__LineFeed & 1; // 1
  }

  declare class NewLineKind__CarriageReturnLineFeed mixins NewLineKind {}
  declare class NewLineKind__LineFeed mixins NewLineKind {}

  declare type LineAndCharacter = {
    line: number,
    character: number
  };

  declare class ScriptKind {
    static +Unknown: Class<ScriptKind__Unknown> & ScriptKind__Unknown & 0; // 0
    static +JS: Class<ScriptKind__JS> & ScriptKind__JS & 1; // 1
    static +JSX: Class<ScriptKind__JSX> & ScriptKind__JSX & 2; // 2
    static +TS: Class<ScriptKind__TS> & ScriptKind__TS & 3; // 3
    static +TSX: Class<ScriptKind__TSX> & ScriptKind__TSX & 4; // 4
    static +External: Class<ScriptKind__External> & ScriptKind__External & 5; // 5
    static +JSON: Class<ScriptKind__JSON> & ScriptKind__JSON & 6; // 6
    static +Deferred: Class<ScriptKind__Deferred> & ScriptKind__Deferred & 7; // 7
  }

  declare class ScriptKind__Unknown mixins ScriptKind {}
  declare class ScriptKind__JS mixins ScriptKind {}
  declare class ScriptKind__JSX mixins ScriptKind {}
  declare class ScriptKind__TS mixins ScriptKind {}
  declare class ScriptKind__TSX mixins ScriptKind {}
  declare class ScriptKind__External mixins ScriptKind {}
  declare class ScriptKind__JSON mixins ScriptKind {}
  declare class ScriptKind__Deferred mixins ScriptKind {}

  declare class ScriptTarget {
    static +ES3: Class<ScriptTarget__ES3> & ScriptTarget__ES3 & 0; // 0
    static +ES5: Class<ScriptTarget__ES5> & ScriptTarget__ES5 & 1; // 1
    static +ES2015: Class<ScriptTarget__ES2015> & ScriptTarget__ES2015 & 2; // 2
    static +ES2016: Class<ScriptTarget__ES2016> & ScriptTarget__ES2016 & 3; // 3
    static +ES2017: Class<ScriptTarget__ES2017> & ScriptTarget__ES2017 & 4; // 4
    static +ES2018: Class<ScriptTarget__ES2018> & ScriptTarget__ES2018 & 5; // 5
    static +ESNext: Class<ScriptTarget__ESNext> & ScriptTarget__ESNext & 6; // 6
    static +JSON: Class<ScriptTarget__JSON> & ScriptTarget__JSON & 100; // 100
    static +Latest: Class<ScriptTarget__Latest> & ScriptTarget__Latest & 6; // 6
  }

  declare class ScriptTarget__ES3 mixins ScriptTarget {}
  declare class ScriptTarget__ES5 mixins ScriptTarget {}
  declare class ScriptTarget__ES2015 mixins ScriptTarget {}
  declare class ScriptTarget__ES2016 mixins ScriptTarget {}
  declare class ScriptTarget__ES2017 mixins ScriptTarget {}
  declare class ScriptTarget__ES2018 mixins ScriptTarget {}
  declare class ScriptTarget__ESNext mixins ScriptTarget {}
  declare class ScriptTarget__JSON mixins ScriptTarget {}
  declare class ScriptTarget__Latest mixins ScriptTarget {}

  declare class LanguageVariant {
    static +Standard: Class<LanguageVariant__Standard> &
      LanguageVariant__Standard &
      0; // 0
    static +JSX: Class<LanguageVariant__JSX> & LanguageVariant__JSX & 1; // 1
  }

  declare class LanguageVariant__Standard mixins LanguageVariant {}
  declare class LanguageVariant__JSX mixins LanguageVariant {}

  declare type ParsedCommandLine = {
    options: CompilerOptions,
    typeAcquisition?: TypeAcquisition,
    fileNames: string[],
    projectReferences?: $ReadOnlyArray<ProjectReference>,
    raw?: any,
    errors: Diagnostic[],
    wildcardDirectories?: MapLike<WatchDirectoryFlags>,
    compileOnSave?: boolean
  };

  declare class WatchDirectoryFlags {
    static +None: Class<WatchDirectoryFlags__None> &
      WatchDirectoryFlags__None &
      0; // 0
    static +Recursive: Class<WatchDirectoryFlags__Recursive> &
      WatchDirectoryFlags__Recursive &
      1; // 1
  }

  declare class WatchDirectoryFlags__None mixins WatchDirectoryFlags {}
  declare class WatchDirectoryFlags__Recursive mixins WatchDirectoryFlags {}

  declare type ExpandResult = {
    fileNames: string[],
    wildcardDirectories: MapLike<WatchDirectoryFlags>
  };

  declare type CreateProgramOptions = {
    rootNames: $ReadOnlyArray<string>,
    options: CompilerOptions,
    projectReferences?: $ReadOnlyArray<ProjectReference>,
    host?: CompilerHost,
    oldProgram?: Program,
    configFileParsingDiagnostics?: $ReadOnlyArray<Diagnostic>
  };

  declare type ModuleResolutionHost = {
    fileExists(fileName: string): boolean,
    readFile(fileName: string): string | void,
    trace(s: string): void,
    directoryExists(directoryName: string): boolean,
    realpath(path: string): string,
    getCurrentDirectory(): string,
    getDirectories(path: string): string[]
  };

  declare type ResolvedModule = {
    resolvedFileName: string,
    isExternalLibraryImport?: boolean
  };

  declare type ResolvedModuleFull = {
    ...$Exact<ResolvedModule>,

    extension: Extension,
    packageId?: PackageId
  };

  declare type PackageId = {
    name: string,
    subModuleName: string,
    version: string
  };

  declare class Extension {
    static +Ts: Class<Extension__Ts> & Extension__Ts & ".ts"; // ".ts"
    static +Tsx: Class<Extension__Tsx> & Extension__Tsx & ".tsx"; // ".tsx"
    static +Dts: Class<Extension__Dts> & Extension__Dts & ".d.ts"; // ".d.ts"
    static +Js: Class<Extension__Js> & Extension__Js & ".js"; // ".js"
    static +Jsx: Class<Extension__Jsx> & Extension__Jsx & ".jsx"; // ".jsx"
    static +Json: Class<Extension__Json> & Extension__Json & ".json"; // ".json"
  }

  declare class Extension__Ts mixins Extension {}
  declare class Extension__Tsx mixins Extension {}
  declare class Extension__Dts mixins Extension {}
  declare class Extension__Js mixins Extension {}
  declare class Extension__Jsx mixins Extension {}
  declare class Extension__Json mixins Extension {}

  declare type ResolvedModuleWithFailedLookupLocations = {
    resolvedModule: ResolvedModuleFull | void
  };

  declare type ResolvedTypeReferenceDirective = {
    primary: boolean,
    resolvedFileName: string | void,
    packageId?: PackageId,
    isExternalLibraryImport?: boolean
  };

  declare type ResolvedTypeReferenceDirectiveWithFailedLookupLocations = {
    resolvedTypeReferenceDirective: ResolvedTypeReferenceDirective | void,
    failedLookupLocations: $ReadOnlyArray<string>
  };

  declare type CompilerHost = {
    ...$Exact<ModuleResolutionHost>,

    getSourceFile(
      fileName: string,
      languageVersion: ScriptTarget,
      onError?: (message: string) => void,
      shouldCreateNewSourceFile?: boolean
    ): SourceFile | void,
    getSourceFileByPath(
      fileName: string,
      path: Path,
      languageVersion: ScriptTarget,
      onError?: (message: string) => void,
      shouldCreateNewSourceFile?: boolean
    ): SourceFile | void,
    getCancellationToken(): CancellationToken,
    getDefaultLibFileName(options: CompilerOptions): string,
    getDefaultLibLocation(): string,
    writeFile: WriteFileCallback,
    getCurrentDirectory(): string,
    getCanonicalFileName(fileName: string): string,
    useCaseSensitiveFileNames(): boolean,
    getNewLine(): string,
    readDirectory(
      rootDir: string,
      extensions: $ReadOnlyArray<string>,
      excludes: $ReadOnlyArray<string> | void,
      includes: $ReadOnlyArray<string>,
      depth?: number
    ): string[],
    resolveModuleNames(
      moduleNames: string[],
      containingFile: string,
      reusedNames?: string[],
      redirectedReference?: ResolvedProjectReference
    ): (ResolvedModule | void)[],
    resolveTypeReferenceDirectives(
      typeReferenceDirectiveNames: string[],
      containingFile: string,
      redirectedReference?: ResolvedProjectReference
    ): (ResolvedTypeReferenceDirective | void)[],
    getEnvironmentVariable(name: string): string | void,
    createHash(data: string): string
  };

  declare type SourceMapRange = {
    ...$Exact<TextRange>,

    source?: SourceMapSource
  };

  declare type SourceMapSource = {
    fileName: string,
    text: string,
    skipTrivia?: (pos: number) => number,
    getLineAndCharacterOfPosition(pos: number): LineAndCharacter
  };

  declare class EmitFlags {
    static +None: Class<EmitFlags__None> & EmitFlags__None & 0; // 0
    static +SingleLine: Class<EmitFlags__SingleLine> &
      EmitFlags__SingleLine &
      1; // 1
    static +AdviseOnEmitNode: Class<EmitFlags__AdviseOnEmitNode> &
      EmitFlags__AdviseOnEmitNode &
      2; // 2
    static +NoSubstitution: Class<EmitFlags__NoSubstitution> &
      EmitFlags__NoSubstitution &
      4; // 4
    static +CapturesThis: Class<EmitFlags__CapturesThis> &
      EmitFlags__CapturesThis &
      8; // 8
    static +NoLeadingSourceMap: Class<EmitFlags__NoLeadingSourceMap> &
      EmitFlags__NoLeadingSourceMap &
      16; // 16
    static +NoTrailingSourceMap: Class<EmitFlags__NoTrailingSourceMap> &
      EmitFlags__NoTrailingSourceMap &
      32; // 32
    static +NoSourceMap: Class<EmitFlags__NoSourceMap> &
      EmitFlags__NoSourceMap &
      48; // 48
    static +NoNestedSourceMaps: Class<EmitFlags__NoNestedSourceMaps> &
      EmitFlags__NoNestedSourceMaps &
      64; // 64
    static +NoTokenLeadingSourceMaps: Class<EmitFlags__NoTokenLeadingSourceMaps> &
      EmitFlags__NoTokenLeadingSourceMaps &
      128; // 128
    static +NoTokenTrailingSourceMaps: Class<EmitFlags__NoTokenTrailingSourceMaps> &
      EmitFlags__NoTokenTrailingSourceMaps &
      256; // 256
    static +NoTokenSourceMaps: Class<EmitFlags__NoTokenSourceMaps> &
      EmitFlags__NoTokenSourceMaps &
      384; // 384
    static +NoLeadingComments: Class<EmitFlags__NoLeadingComments> &
      EmitFlags__NoLeadingComments &
      512; // 512
    static +NoTrailingComments: Class<EmitFlags__NoTrailingComments> &
      EmitFlags__NoTrailingComments &
      1024; // 1024
    static +NoComments: Class<EmitFlags__NoComments> &
      EmitFlags__NoComments &
      1536; // 1536
    static +NoNestedComments: Class<EmitFlags__NoNestedComments> &
      EmitFlags__NoNestedComments &
      2048; // 2048
    static +HelperName: Class<EmitFlags__HelperName> &
      EmitFlags__HelperName &
      4096; // 4096
    static +ExportName: Class<EmitFlags__ExportName> &
      EmitFlags__ExportName &
      8192; // 8192
    static +LocalName: Class<EmitFlags__LocalName> &
      EmitFlags__LocalName &
      16384; // 16384
    static +InternalName: Class<EmitFlags__InternalName> &
      EmitFlags__InternalName &
      32768; // 32768
    static +Indented: Class<EmitFlags__Indented> & EmitFlags__Indented & 65536; // 65536
    static +NoIndentation: Class<EmitFlags__NoIndentation> &
      EmitFlags__NoIndentation &
      131072; // 131072
    static +AsyncFunctionBody: Class<EmitFlags__AsyncFunctionBody> &
      EmitFlags__AsyncFunctionBody &
      262144; // 262144
    static +ReuseTempVariableScope: Class<EmitFlags__ReuseTempVariableScope> &
      EmitFlags__ReuseTempVariableScope &
      524288; // 524288
    static +CustomPrologue: Class<EmitFlags__CustomPrologue> &
      EmitFlags__CustomPrologue &
      1048576; // 1048576
    static +NoHoisting: Class<EmitFlags__NoHoisting> &
      EmitFlags__NoHoisting &
      2097152; // 2097152
    static +HasEndOfDeclarationMarker: Class<EmitFlags__HasEndOfDeclarationMarker> &
      EmitFlags__HasEndOfDeclarationMarker &
      4194304; // 4194304
    static +Iterator: Class<EmitFlags__Iterator> &
      EmitFlags__Iterator &
      8388608; // 8388608
    static +NoAsciiEscaping: Class<EmitFlags__NoAsciiEscaping> &
      EmitFlags__NoAsciiEscaping &
      16777216; // 16777216
  }

  declare class EmitFlags__None mixins EmitFlags {}
  declare class EmitFlags__SingleLine mixins EmitFlags {}
  declare class EmitFlags__AdviseOnEmitNode mixins EmitFlags {}
  declare class EmitFlags__NoSubstitution mixins EmitFlags {}
  declare class EmitFlags__CapturesThis mixins EmitFlags {}
  declare class EmitFlags__NoLeadingSourceMap mixins EmitFlags {}
  declare class EmitFlags__NoTrailingSourceMap mixins EmitFlags {}
  declare class EmitFlags__NoSourceMap mixins EmitFlags {}
  declare class EmitFlags__NoNestedSourceMaps mixins EmitFlags {}
  declare class EmitFlags__NoTokenLeadingSourceMaps mixins EmitFlags {}
  declare class EmitFlags__NoTokenTrailingSourceMaps mixins EmitFlags {}
  declare class EmitFlags__NoTokenSourceMaps mixins EmitFlags {}
  declare class EmitFlags__NoLeadingComments mixins EmitFlags {}
  declare class EmitFlags__NoTrailingComments mixins EmitFlags {}
  declare class EmitFlags__NoComments mixins EmitFlags {}
  declare class EmitFlags__NoNestedComments mixins EmitFlags {}
  declare class EmitFlags__HelperName mixins EmitFlags {}
  declare class EmitFlags__ExportName mixins EmitFlags {}
  declare class EmitFlags__LocalName mixins EmitFlags {}
  declare class EmitFlags__InternalName mixins EmitFlags {}
  declare class EmitFlags__Indented mixins EmitFlags {}
  declare class EmitFlags__NoIndentation mixins EmitFlags {}
  declare class EmitFlags__AsyncFunctionBody mixins EmitFlags {}
  declare class EmitFlags__ReuseTempVariableScope mixins EmitFlags {}
  declare class EmitFlags__CustomPrologue mixins EmitFlags {}
  declare class EmitFlags__NoHoisting mixins EmitFlags {}
  declare class EmitFlags__HasEndOfDeclarationMarker mixins EmitFlags {}
  declare class EmitFlags__Iterator mixins EmitFlags {}
  declare class EmitFlags__NoAsciiEscaping mixins EmitFlags {}

  declare type EmitHelper = {
    name: string,
    scoped: boolean,
    text: string | ((node: EmitHelperUniqueNameCallback) => string),
    priority?: number
  };

  declare type EmitHelperUniqueNameCallback = (name: string) => string;
  declare class EmitHint {
    static +SourceFile: Class<EmitHint__SourceFile> & EmitHint__SourceFile & 0; // 0
    static +Expression: Class<EmitHint__Expression> & EmitHint__Expression & 1; // 1
    static +IdentifierName: Class<EmitHint__IdentifierName> &
      EmitHint__IdentifierName &
      2; // 2
    static +MappedTypeParameter: Class<EmitHint__MappedTypeParameter> &
      EmitHint__MappedTypeParameter &
      3; // 3
    static +Unspecified: Class<EmitHint__Unspecified> &
      EmitHint__Unspecified &
      4; // 4
    static +EmbeddedStatement: Class<EmitHint__EmbeddedStatement> &
      EmitHint__EmbeddedStatement &
      5; // 5
  }

  declare class EmitHint__SourceFile mixins EmitHint {}
  declare class EmitHint__Expression mixins EmitHint {}
  declare class EmitHint__IdentifierName mixins EmitHint {}
  declare class EmitHint__MappedTypeParameter mixins EmitHint {}
  declare class EmitHint__Unspecified mixins EmitHint {}
  declare class EmitHint__EmbeddedStatement mixins EmitHint {}

  declare type TransformationContext = {
    getCompilerOptions(): CompilerOptions,
    startLexicalEnvironment(): void,
    suspendLexicalEnvironment(): void,
    resumeLexicalEnvironment(): void,
    endLexicalEnvironment(): Statement[] | void,
    hoistFunctionDeclaration(node: FunctionDeclaration): void,
    hoistVariableDeclaration(node: Identifier): void,
    requestEmitHelper(helper: EmitHelper): void,
    readEmitHelpers(): EmitHelper[] | void,
    enableSubstitution(kind: SyntaxKind): void,
    isSubstitutionEnabled(node: Node): boolean,
    onSubstituteNode: (hint: EmitHint, node: Node) => Node,
    enableEmitNotification(kind: SyntaxKind): void,
    isEmitNotificationEnabled(node: Node): boolean,
    onEmitNode: (
      hint: EmitHint,
      node: Node,
      emitCallback: (hint: EmitHint, node: Node) => void
    ) => void
  };

  declare type TransformationResult<T: Node> = {
    transformed: T[],
    diagnostics?: DiagnosticWithLocation[],
    substituteNode(hint: EmitHint, node: Node): Node,
    emitNodeWithNotification(
      hint: EmitHint,
      node: Node,
      emitCallback: (hint: EmitHint, node: Node) => void
    ): void,
    dispose(): void
  };

  declare type TransformerFactory<T: Node> = (
    context: TransformationContext
  ) => Transformer<T>;
  declare type Transformer<T: Node> = (node: T) => T;
  declare type Visitor = (node: Node) => VisitResult<Node>;
  declare type VisitResult<T: Node> = T | T[] | void;
  declare type Printer = {
    printNode(hint: EmitHint, node: Node, sourceFile: SourceFile): string,
    printList<T: Node>(
      format: ListFormat,
      list: NodeArray<T>,
      sourceFile: SourceFile
    ): string,
    printFile(sourceFile: SourceFile): string,
    printBundle(bundle: Bundle): string
  };

  declare type PrintHandlers = {
    hasGlobalName(name: string): boolean,
    onEmitNode(
      hint: EmitHint,
      node: Node | void,
      emitCallback: (hint: EmitHint, node: Node | void) => void
    ): void,
    substituteNode(hint: EmitHint, node: Node): Node
  };

  declare type PrinterOptions = {
    removeComments?: boolean,
    newLine?: NewLineKind,
    omitTrailingSemicolon?: boolean,
    noEmitHelpers?: boolean
  };

  declare type GetEffectiveTypeRootsHost = {
    directoryExists(directoryName: string): boolean,
    getCurrentDirectory(): string
  };

  declare type TextSpan = {
    start: number,
    length: number
  };

  declare type TextChangeRange = {
    span: TextSpan,
    newLength: number
  };

  declare type SyntaxList = {
    ...$Exact<Node>,

    _children: Node[]
  };

  declare class ListFormat {
    static +None: Class<ListFormat__None> & ListFormat__None & 0; // 0
    static +SingleLine: Class<ListFormat__SingleLine> &
      ListFormat__SingleLine &
      0; // 0
    static +MultiLine: Class<ListFormat__MultiLine> & ListFormat__MultiLine & 1; // 1
    static +PreserveLines: Class<ListFormat__PreserveLines> &
      ListFormat__PreserveLines &
      2; // 2
    static +LinesMask: Class<ListFormat__LinesMask> & ListFormat__LinesMask & 3; // 3
    static +NotDelimited: Class<ListFormat__NotDelimited> &
      ListFormat__NotDelimited &
      0; // 0
    static +BarDelimited: Class<ListFormat__BarDelimited> &
      ListFormat__BarDelimited &
      4; // 4
    static +AmpersandDelimited: Class<ListFormat__AmpersandDelimited> &
      ListFormat__AmpersandDelimited &
      8; // 8
    static +CommaDelimited: Class<ListFormat__CommaDelimited> &
      ListFormat__CommaDelimited &
      16; // 16
    static +AsteriskDelimited: Class<ListFormat__AsteriskDelimited> &
      ListFormat__AsteriskDelimited &
      32; // 32
    static +DelimitersMask: Class<ListFormat__DelimitersMask> &
      ListFormat__DelimitersMask &
      60; // 60
    static +AllowTrailingComma: Class<ListFormat__AllowTrailingComma> &
      ListFormat__AllowTrailingComma &
      64; // 64
    static +Indented: Class<ListFormat__Indented> & ListFormat__Indented & 128; // 128
    static +SpaceBetweenBraces: Class<ListFormat__SpaceBetweenBraces> &
      ListFormat__SpaceBetweenBraces &
      256; // 256
    static +SpaceBetweenSiblings: Class<ListFormat__SpaceBetweenSiblings> &
      ListFormat__SpaceBetweenSiblings &
      512; // 512
    static +Braces: Class<ListFormat__Braces> & ListFormat__Braces & 1024; // 1024
    static +Parenthesis: Class<ListFormat__Parenthesis> &
      ListFormat__Parenthesis &
      2048; // 2048
    static +AngleBrackets: Class<ListFormat__AngleBrackets> &
      ListFormat__AngleBrackets &
      4096; // 4096
    static +SquareBrackets: Class<ListFormat__SquareBrackets> &
      ListFormat__SquareBrackets &
      8192; // 8192
    static +BracketsMask: Class<ListFormat__BracketsMask> &
      ListFormat__BracketsMask &
      15360; // 15360
    static +OptionalIfUndefined: Class<ListFormat__OptionalIfUndefined> &
      ListFormat__OptionalIfUndefined &
      16384; // 16384
    static +OptionalIfEmpty: Class<ListFormat__OptionalIfEmpty> &
      ListFormat__OptionalIfEmpty &
      32768; // 32768
    static +Optional: Class<ListFormat__Optional> &
      ListFormat__Optional &
      49152; // 49152
    static +PreferNewLine: Class<ListFormat__PreferNewLine> &
      ListFormat__PreferNewLine &
      65536; // 65536
    static +NoTrailingNewLine: Class<ListFormat__NoTrailingNewLine> &
      ListFormat__NoTrailingNewLine &
      131072; // 131072
    static +NoInterveningComments: Class<ListFormat__NoInterveningComments> &
      ListFormat__NoInterveningComments &
      262144; // 262144
    static +NoSpaceIfEmpty: Class<ListFormat__NoSpaceIfEmpty> &
      ListFormat__NoSpaceIfEmpty &
      524288; // 524288
    static +SingleElement: Class<ListFormat__SingleElement> &
      ListFormat__SingleElement &
      1048576; // 1048576
    static +Modifiers: Class<ListFormat__Modifiers> &
      ListFormat__Modifiers &
      262656; // 262656
    static +HeritageClauses: Class<ListFormat__HeritageClauses> &
      ListFormat__HeritageClauses &
      512; // 512
    static +SingleLineTypeLiteralMembers: Class<ListFormat__SingleLineTypeLiteralMembers> &
      ListFormat__SingleLineTypeLiteralMembers &
      768; // 768
    static +MultiLineTypeLiteralMembers: Class<ListFormat__MultiLineTypeLiteralMembers> &
      ListFormat__MultiLineTypeLiteralMembers &
      32897; // 32897
    static +TupleTypeElements: Class<ListFormat__TupleTypeElements> &
      ListFormat__TupleTypeElements &
      528; // 528
    static +UnionTypeConstituents: Class<ListFormat__UnionTypeConstituents> &
      ListFormat__UnionTypeConstituents &
      516; // 516
    static +IntersectionTypeConstituents: Class<ListFormat__IntersectionTypeConstituents> &
      ListFormat__IntersectionTypeConstituents &
      520; // 520
    static +ObjectBindingPatternElements: Class<ListFormat__ObjectBindingPatternElements> &
      ListFormat__ObjectBindingPatternElements &
      525136; // 525136
    static +ArrayBindingPatternElements: Class<ListFormat__ArrayBindingPatternElements> &
      ListFormat__ArrayBindingPatternElements &
      524880; // 524880
    static +ObjectLiteralExpressionProperties: Class<ListFormat__ObjectLiteralExpressionProperties> &
      ListFormat__ObjectLiteralExpressionProperties &
      526226; // 526226
    static +ArrayLiteralExpressionElements: Class<ListFormat__ArrayLiteralExpressionElements> &
      ListFormat__ArrayLiteralExpressionElements &
      8914; // 8914
    static +CommaListElements: Class<ListFormat__CommaListElements> &
      ListFormat__CommaListElements &
      528; // 528
    static +CallExpressionArguments: Class<ListFormat__CallExpressionArguments> &
      ListFormat__CallExpressionArguments &
      2576; // 2576
    static +NewExpressionArguments: Class<ListFormat__NewExpressionArguments> &
      ListFormat__NewExpressionArguments &
      18960; // 18960
    static +TemplateExpressionSpans: Class<ListFormat__TemplateExpressionSpans> &
      ListFormat__TemplateExpressionSpans &
      262144; // 262144
    static +SingleLineBlockStatements: Class<ListFormat__SingleLineBlockStatements> &
      ListFormat__SingleLineBlockStatements &
      768; // 768
    static +MultiLineBlockStatements: Class<ListFormat__MultiLineBlockStatements> &
      ListFormat__MultiLineBlockStatements &
      129; // 129
    static +VariableDeclarationList: Class<ListFormat__VariableDeclarationList> &
      ListFormat__VariableDeclarationList &
      528; // 528
    static +SingleLineFunctionBodyStatements: Class<ListFormat__SingleLineFunctionBodyStatements> &
      ListFormat__SingleLineFunctionBodyStatements &
      768; // 768
    static +MultiLineFunctionBodyStatements: Class<ListFormat__MultiLineFunctionBodyStatements> &
      ListFormat__MultiLineFunctionBodyStatements &
      1; // 1
    static +ClassHeritageClauses: Class<ListFormat__ClassHeritageClauses> &
      ListFormat__ClassHeritageClauses &
      0; // 0
    static +ClassMembers: Class<ListFormat__ClassMembers> &
      ListFormat__ClassMembers &
      129; // 129
    static +InterfaceMembers: Class<ListFormat__InterfaceMembers> &
      ListFormat__InterfaceMembers &
      129; // 129
    static +EnumMembers: Class<ListFormat__EnumMembers> &
      ListFormat__EnumMembers &
      145; // 145
    static +CaseBlockClauses: Class<ListFormat__CaseBlockClauses> &
      ListFormat__CaseBlockClauses &
      129; // 129
    static +NamedImportsOrExportsElements: Class<ListFormat__NamedImportsOrExportsElements> &
      ListFormat__NamedImportsOrExportsElements &
      525136; // 525136
    static +JsxElementOrFragmentChildren: Class<ListFormat__JsxElementOrFragmentChildren> &
      ListFormat__JsxElementOrFragmentChildren &
      262144; // 262144
    static +JsxElementAttributes: Class<ListFormat__JsxElementAttributes> &
      ListFormat__JsxElementAttributes &
      262656; // 262656
    static +CaseOrDefaultClauseStatements: Class<ListFormat__CaseOrDefaultClauseStatements> &
      ListFormat__CaseOrDefaultClauseStatements &
      163969; // 163969
    static +HeritageClauseTypes: Class<ListFormat__HeritageClauseTypes> &
      ListFormat__HeritageClauseTypes &
      528; // 528
    static +SourceFileStatements: Class<ListFormat__SourceFileStatements> &
      ListFormat__SourceFileStatements &
      131073; // 131073
    static +Decorators: Class<ListFormat__Decorators> &
      ListFormat__Decorators &
      49153; // 49153
    static +TypeArguments: Class<ListFormat__TypeArguments> &
      ListFormat__TypeArguments &
      53776; // 53776
    static +TypeParameters: Class<ListFormat__TypeParameters> &
      ListFormat__TypeParameters &
      53776; // 53776
    static +Parameters: Class<ListFormat__Parameters> &
      ListFormat__Parameters &
      2576; // 2576
    static +IndexSignatureParameters: Class<ListFormat__IndexSignatureParameters> &
      ListFormat__IndexSignatureParameters &
      8848; // 8848
    static +JSDocComment: Class<ListFormat__JSDocComment> &
      ListFormat__JSDocComment &
      33; // 33
  }

  declare class ListFormat__None mixins ListFormat {}
  declare class ListFormat__SingleLine mixins ListFormat {}
  declare class ListFormat__MultiLine mixins ListFormat {}
  declare class ListFormat__PreserveLines mixins ListFormat {}
  declare class ListFormat__LinesMask mixins ListFormat {}
  declare class ListFormat__NotDelimited mixins ListFormat {}
  declare class ListFormat__BarDelimited mixins ListFormat {}
  declare class ListFormat__AmpersandDelimited mixins ListFormat {}
  declare class ListFormat__CommaDelimited mixins ListFormat {}
  declare class ListFormat__AsteriskDelimited mixins ListFormat {}
  declare class ListFormat__DelimitersMask mixins ListFormat {}
  declare class ListFormat__AllowTrailingComma mixins ListFormat {}
  declare class ListFormat__Indented mixins ListFormat {}
  declare class ListFormat__SpaceBetweenBraces mixins ListFormat {}
  declare class ListFormat__SpaceBetweenSiblings mixins ListFormat {}
  declare class ListFormat__Braces mixins ListFormat {}
  declare class ListFormat__Parenthesis mixins ListFormat {}
  declare class ListFormat__AngleBrackets mixins ListFormat {}
  declare class ListFormat__SquareBrackets mixins ListFormat {}
  declare class ListFormat__BracketsMask mixins ListFormat {}
  declare class ListFormat__OptionalIfUndefined mixins ListFormat {}
  declare class ListFormat__OptionalIfEmpty mixins ListFormat {}
  declare class ListFormat__Optional mixins ListFormat {}
  declare class ListFormat__PreferNewLine mixins ListFormat {}
  declare class ListFormat__NoTrailingNewLine mixins ListFormat {}
  declare class ListFormat__NoInterveningComments mixins ListFormat {}
  declare class ListFormat__NoSpaceIfEmpty mixins ListFormat {}
  declare class ListFormat__SingleElement mixins ListFormat {}
  declare class ListFormat__Modifiers mixins ListFormat {}
  declare class ListFormat__HeritageClauses mixins ListFormat {}
  declare class ListFormat__SingleLineTypeLiteralMembers mixins ListFormat {}
  declare class ListFormat__MultiLineTypeLiteralMembers mixins ListFormat {}
  declare class ListFormat__TupleTypeElements mixins ListFormat {}
  declare class ListFormat__UnionTypeConstituents mixins ListFormat {}
  declare class ListFormat__IntersectionTypeConstituents mixins ListFormat {}
  declare class ListFormat__ObjectBindingPatternElements mixins ListFormat {}
  declare class ListFormat__ArrayBindingPatternElements mixins ListFormat {}
  declare class ListFormat__ObjectLiteralExpressionProperties
    mixins ListFormat {}
  declare class ListFormat__ArrayLiteralExpressionElements mixins ListFormat {}
  declare class ListFormat__CommaListElements mixins ListFormat {}
  declare class ListFormat__CallExpressionArguments mixins ListFormat {}
  declare class ListFormat__NewExpressionArguments mixins ListFormat {}
  declare class ListFormat__TemplateExpressionSpans mixins ListFormat {}
  declare class ListFormat__SingleLineBlockStatements mixins ListFormat {}
  declare class ListFormat__MultiLineBlockStatements mixins ListFormat {}
  declare class ListFormat__VariableDeclarationList mixins ListFormat {}
  declare class ListFormat__SingleLineFunctionBodyStatements
    mixins ListFormat {}
  declare class ListFormat__MultiLineFunctionBodyStatements mixins ListFormat {}
  declare class ListFormat__ClassHeritageClauses mixins ListFormat {}
  declare class ListFormat__ClassMembers mixins ListFormat {}
  declare class ListFormat__InterfaceMembers mixins ListFormat {}
  declare class ListFormat__EnumMembers mixins ListFormat {}
  declare class ListFormat__CaseBlockClauses mixins ListFormat {}
  declare class ListFormat__NamedImportsOrExportsElements mixins ListFormat {}
  declare class ListFormat__JsxElementOrFragmentChildren mixins ListFormat {}
  declare class ListFormat__JsxElementAttributes mixins ListFormat {}
  declare class ListFormat__CaseOrDefaultClauseStatements mixins ListFormat {}
  declare class ListFormat__HeritageClauseTypes mixins ListFormat {}
  declare class ListFormat__SourceFileStatements mixins ListFormat {}
  declare class ListFormat__Decorators mixins ListFormat {}
  declare class ListFormat__TypeArguments mixins ListFormat {}
  declare class ListFormat__TypeParameters mixins ListFormat {}
  declare class ListFormat__Parameters mixins ListFormat {}
  declare class ListFormat__IndexSignatureParameters mixins ListFormat {}
  declare class ListFormat__JSDocComment mixins ListFormat {}

  declare type UserPreferences = {
    disableSuggestions?: boolean,
    quotePreference?: "double" | "single",
    includeCompletionsForModuleExports?: boolean,
    includeCompletionsWithInsertText?: boolean,
    importModuleSpecifierPreference?: "relative" | "non-relative",
    importModuleSpecifierEnding?: "minimal" | "index" | "js",
    allowTextChangesInNewFiles?: boolean,
    providePrefixAndSuffixTextForRename?: boolean
  };

  declare type PseudoBigInt = {
    negative: boolean,
    base10Value: string
  };

  declare class FileWatcherEventKind {
    static +Created: Class<FileWatcherEventKind__Created> &
      FileWatcherEventKind__Created &
      0; // 0
    static +Changed: Class<FileWatcherEventKind__Changed> &
      FileWatcherEventKind__Changed &
      1; // 1
    static +Deleted: Class<FileWatcherEventKind__Deleted> &
      FileWatcherEventKind__Deleted &
      2; // 2
  }

  declare class FileWatcherEventKind__Created mixins FileWatcherEventKind {}
  declare class FileWatcherEventKind__Changed mixins FileWatcherEventKind {}
  declare class FileWatcherEventKind__Deleted mixins FileWatcherEventKind {}

  declare type FileWatcherCallback = (
    fileName: string,
    eventKind: FileWatcherEventKind
  ) => void;
  declare type DirectoryWatcherCallback = (fileName: string) => void;
  declare type System = {
    args: string[],
    newLine: string,
    useCaseSensitiveFileNames: boolean,
    write(s: string): void,
    writeOutputIsTTY(): boolean,
    readFile(path: string, encoding?: string): string | void,
    getFileSize(path: string): number,
    writeFile(path: string, data: string, writeByteOrderMark?: boolean): void,
    watchFile(
      path: string,
      callback: FileWatcherCallback,
      pollingInterval?: number
    ): FileWatcher,
    watchDirectory(
      path: string,
      callback: DirectoryWatcherCallback,
      recursive?: boolean
    ): FileWatcher,
    resolvePath(path: string): string,
    fileExists(path: string): boolean,
    directoryExists(path: string): boolean,
    createDirectory(path: string): void,
    getExecutingFilePath(): string,
    getCurrentDirectory(): string,
    getDirectories(path: string): string[],
    readDirectory(
      path: string,
      extensions?: $ReadOnlyArray<string>,
      exclude?: $ReadOnlyArray<string>,
      include?: $ReadOnlyArray<string>,
      depth?: number
    ): string[],
    getModifiedTime(path: string): Date | void,
    setModifiedTime(path: string, time: Date): void,
    deleteFile(path: string): void,
    createHash(data: string): string,
    createSHA256Hash(data: string): string,
    getMemoryUsage(): number,
    exit(exitCode?: number): void,
    realpath(path: string): string,
    setTimeout(
      callback: (...args: any[]) => void,
      ms: number,
      ...args: any[]
    ): any,
    clearTimeout(timeoutId: any): void,
    clearScreen(): void,
    base64decode(input: string): string,
    base64encode(input: string): string
  };

  declare type FileWatcher = {
    close(): void
  };

  declare function getNodeMajorVersion(): number | void;

  declare var sys: System;
  declare type ErrorCallback = (
    message: DiagnosticMessage,
    length: number
  ) => void;
  declare type Scanner = {
    getStartPos(): number,
    getToken(): SyntaxKind,
    getTextPos(): number,
    getTokenPos(): number,
    getTokenText(): string,
    getTokenValue(): string,
    hasExtendedUnicodeEscape(): boolean,
    hasPrecedingLineBreak(): boolean,
    isIdentifier(): boolean,
    isReservedWord(): boolean,
    isUnterminated(): boolean,
    reScanGreaterToken(): SyntaxKind,
    reScanSlashToken(): SyntaxKind,
    reScanTemplateToken(): SyntaxKind,
    scanJsxIdentifier(): SyntaxKind,
    scanJsxAttributeValue(): SyntaxKind,
    reScanJsxToken(): JsxTokenSyntaxKind,
    reScanLessThanToken(): SyntaxKind,
    scanJsxToken(): JsxTokenSyntaxKind,
    scanJSDocToken(): JsDocSyntaxKind,
    scan(): SyntaxKind,
    getText(): string,
    setText(text: string | void, start?: number, length?: number): void,
    setOnError(onError: ErrorCallback | void): void,
    setScriptTarget(scriptTarget: ScriptTarget): void,
    setLanguageVariant(variant: LanguageVariant): void,
    setTextPos(textPos: number): void,
    lookAhead<T>(callback: () => T): T,
    scanRange<T>(start: number, length: number, callback: () => T): T,
    tryScan<T>(callback: () => T): T
  };

  declare function tokenToString(t: SyntaxKind): string | void;

  declare function getPositionOfLineAndCharacter(
    sourceFile: SourceFileLike,
    line: number,
    character: number
  ): number;

  declare function getLineAndCharacterOfPosition(
    sourceFile: SourceFileLike,
    position: number
  ): LineAndCharacter;

  declare function isWhiteSpaceLike(ch: number): boolean;

  declare function isWhiteSpaceSingleLine(ch: number): boolean;

  declare function isLineBreak(ch: number): boolean;

  declare function couldStartTrivia(text: string, pos: number): boolean;

  declare function forEachLeadingCommentRange<U>(
    text: string,
    pos: number,
    cb: (
      pos: number,
      end: number,
      kind: CommentKind,
      hasTrailingNewLine: boolean
    ) => U
  ): U | void;

  declare function forEachLeadingCommentRange<T, U>(
    text: string,
    pos: number,
    cb: (
      pos: number,
      end: number,
      kind: CommentKind,
      hasTrailingNewLine: boolean,
      state: T
    ) => U,
    state: T
  ): U | void;

  declare function forEachTrailingCommentRange<U>(
    text: string,
    pos: number,
    cb: (
      pos: number,
      end: number,
      kind: CommentKind,
      hasTrailingNewLine: boolean
    ) => U
  ): U | void;

  declare function forEachTrailingCommentRange<T, U>(
    text: string,
    pos: number,
    cb: (
      pos: number,
      end: number,
      kind: CommentKind,
      hasTrailingNewLine: boolean,
      state: T
    ) => U,
    state: T
  ): U | void;

  declare function reduceEachLeadingCommentRange<T, U>(
    text: string,
    pos: number,
    cb: (
      pos: number,
      end: number,
      kind: CommentKind,
      hasTrailingNewLine: boolean,
      state: T,
      memo: U
    ) => U,
    state: T,
    initial: U
  ): U | void;

  declare function reduceEachTrailingCommentRange<T, U>(
    text: string,
    pos: number,
    cb: (
      pos: number,
      end: number,
      kind: CommentKind,
      hasTrailingNewLine: boolean,
      state: T,
      memo: U
    ) => U,
    state: T,
    initial: U
  ): U | void;

  declare function getLeadingCommentRanges(
    text: string,
    pos: number
  ): CommentRange[] | void;

  declare function getTrailingCommentRanges(
    text: string,
    pos: number
  ): CommentRange[] | void;

  declare function getShebang(text: string): string | void;

  declare function isIdentifierStart(
    ch: number,
    languageVersion: ScriptTarget | void
  ): boolean;

  declare function isIdentifierPart(
    ch: number,
    languageVersion: ScriptTarget | void
  ): boolean;

  declare function createScanner(
    languageVersion: ScriptTarget,
    skipTrivia: boolean,
    languageVariant?: LanguageVariant,
    textInitial?: string,
    onError?: ErrorCallback,
    start?: number,
    length?: number
  ): Scanner;

  declare function isExternalModuleNameRelative(moduleName: string): boolean;

  declare function sortAndDeduplicateDiagnostics<T: Diagnostic>(
    diagnostics: $ReadOnlyArray<T>
  ): SortedReadonlyArray<T>;

  declare function getDefaultLibFileName(options: CompilerOptions): string;

  declare function textSpanEnd(span: TextSpan): number;

  declare function textSpanIsEmpty(span: TextSpan): boolean;

  declare function textSpanContainsPosition(
    span: TextSpan,
    position: number
  ): boolean;

  declare function textSpanContainsTextSpan(
    span: TextSpan,
    other: TextSpan
  ): boolean;

  declare function textSpanOverlapsWith(
    span: TextSpan,
    other: TextSpan
  ): boolean;

  declare function textSpanOverlap(
    span1: TextSpan,
    span2: TextSpan
  ): TextSpan | void;

  declare function textSpanIntersectsWithTextSpan(
    span: TextSpan,
    other: TextSpan
  ): boolean;

  declare function textSpanIntersectsWith(
    span: TextSpan,
    start: number,
    length: number
  ): boolean;

  declare function decodedTextSpanIntersectsWith(
    start1: number,
    length1: number,
    start2: number,
    length2: number
  ): boolean;

  declare function textSpanIntersectsWithPosition(
    span: TextSpan,
    position: number
  ): boolean;

  declare function textSpanIntersection(
    span1: TextSpan,
    span2: TextSpan
  ): TextSpan | void;

  declare function createTextSpan(start: number, length: number): TextSpan;

  declare function createTextSpanFromBounds(
    start: number,
    end: number
  ): TextSpan;

  declare function textChangeRangeNewSpan(range: TextChangeRange): TextSpan;

  declare function textChangeRangeIsUnchanged(range: TextChangeRange): boolean;

  declare function createTextChangeRange(
    span: TextSpan,
    newLength: number
  ): TextChangeRange;

  declare var unchangedTextChangeRange: TextChangeRange;
  declare function collapseTextChangeRangesAcrossMultipleVersions(
    changes: $ReadOnlyArray<TextChangeRange>
  ): TextChangeRange;

  declare function getTypeParameterOwner(d: Declaration): Declaration | void;

  declare type ParameterPropertyDeclaration = ParameterDeclaration & {
    parent: ConstructorDeclaration,
    name: Identifier
  };
  declare function isParameterPropertyDeclaration(node: Node): boolean;

  declare function isEmptyBindingPattern(node: BindingName): boolean;

  declare function isEmptyBindingElement(node: BindingElement): boolean;

  declare function walkUpBindingElementsAndPatterns(
    binding: BindingElement
  ): VariableDeclaration | ParameterDeclaration;

  declare function getCombinedModifierFlags(node: Declaration): ModifierFlags;

  declare function getCombinedNodeFlags(node: Node): NodeFlags;

  declare function validateLocaleAndSetLanguage(
    locale: string,
    sys: {
      getExecutingFilePath(): string,
      resolvePath(path: string): string,
      fileExists(fileName: string): boolean,
      readFile(fileName: string): string | void
    },
    errors?: Push<Diagnostic>
  ): void;

  declare function getOriginalNode(node: Node): Node;

  declare function getOriginalNode<T: Node>(
    node: Node,
    nodeTest: (node: Node) => boolean
  ): T;

  declare function getOriginalNode(node: Node | void): Node | void;

  declare function getOriginalNode<T: Node>(
    node: Node | void,
    nodeTest: (node: Node | void) => boolean
  ): T | void;

  declare function isParseTreeNode(node: Node): boolean;

  declare function getParseTreeNode(node: Node): Node;

  declare function getParseTreeNode<T: Node>(
    node: Node | void,
    nodeTest?: (node: Node) => boolean
  ): T | void;

  declare function escapeLeadingUnderscores(identifier: string): __String;

  declare function unescapeLeadingUnderscores(identifier: __String): string;

  declare function idText(identifier: Identifier): string;

  declare function symbolName(symbol: Symbol): string;

  declare function getNameOfJSDocTypedef(
    declaration: JSDocTypedefTag
  ): Identifier | void;

  declare function getNameOfDeclaration(
    declaration: Declaration | Expression
  ): DeclarationName | void;

  declare function getJSDocParameterTags(
    param: ParameterDeclaration
  ): $ReadOnlyArray<JSDocParameterTag>;

  declare function getJSDocTypeParameterTags(
    param: TypeParameterDeclaration
  ): $ReadOnlyArray<JSDocTemplateTag>;

  declare function hasJSDocParameterTags(
    node: FunctionLikeDeclaration | SignatureDeclaration
  ): boolean;

  declare function getJSDocAugmentsTag(node: Node): JSDocAugmentsTag | void;

  declare function getJSDocClassTag(node: Node): JSDocClassTag | void;

  declare function getJSDocEnumTag(node: Node): JSDocEnumTag | void;

  declare function getJSDocThisTag(node: Node): JSDocThisTag | void;

  declare function getJSDocReturnTag(node: Node): JSDocReturnTag | void;

  declare function getJSDocTemplateTag(node: Node): JSDocTemplateTag | void;

  declare function getJSDocTypeTag(node: Node): JSDocTypeTag | void;

  declare function getJSDocType(node: Node): TypeNode | void;

  declare function getJSDocReturnType(node: Node): TypeNode | void;

  declare function getJSDocTags(node: Node): $ReadOnlyArray<JSDocTag>;

  declare function getAllJSDocTagsOfKind(
    node: Node,
    kind: SyntaxKind
  ): $ReadOnlyArray<JSDocTag>;

  declare function getEffectiveTypeParameterDeclarations(
    node: DeclarationWithTypeParameters
  ): $ReadOnlyArray<TypeParameterDeclaration>;

  declare function getEffectiveConstraintOfTypeParameter(
    node: TypeParameterDeclaration
  ): TypeNode | void;

  declare function isNumericLiteral(node: Node): boolean;

  declare function isBigIntLiteral(node: Node): boolean;

  declare function isStringLiteral(node: Node): boolean;

  declare function isJsxText(node: Node): boolean;

  declare function isRegularExpressionLiteral(node: Node): boolean;

  declare function isNoSubstitutionTemplateLiteral(node: Node): boolean;

  declare function isTemplateHead(node: Node): boolean;

  declare function isTemplateMiddle(node: Node): boolean;

  declare function isTemplateTail(node: Node): boolean;

  declare function isIdentifier(node: Node): boolean;

  declare function isQualifiedName(node: Node): boolean;

  declare function isComputedPropertyName(node: Node): boolean;

  declare function isTypeParameterDeclaration(node: Node): boolean;

  declare function isParameter(node: Node): boolean;

  declare function isDecorator(node: Node): boolean;

  declare function isPropertySignature(node: Node): boolean;

  declare function isPropertyDeclaration(node: Node): boolean;

  declare function isMethodSignature(node: Node): boolean;

  declare function isMethodDeclaration(node: Node): boolean;

  declare function isConstructorDeclaration(node: Node): boolean;

  declare function isGetAccessorDeclaration(node: Node): boolean;

  declare function isSetAccessorDeclaration(node: Node): boolean;

  declare function isCallSignatureDeclaration(node: Node): boolean;

  declare function isConstructSignatureDeclaration(node: Node): boolean;

  declare function isIndexSignatureDeclaration(node: Node): boolean;

  declare function isTypePredicateNode(node: Node): boolean;

  declare function isTypeReferenceNode(node: Node): boolean;

  declare function isFunctionTypeNode(node: Node): boolean;

  declare function isConstructorTypeNode(node: Node): boolean;

  declare function isTypeQueryNode(node: Node): boolean;

  declare function isTypeLiteralNode(node: Node): boolean;

  declare function isArrayTypeNode(node: Node): boolean;

  declare function isTupleTypeNode(node: Node): boolean;

  declare function isUnionTypeNode(node: Node): boolean;

  declare function isIntersectionTypeNode(node: Node): boolean;

  declare function isConditionalTypeNode(node: Node): boolean;

  declare function isInferTypeNode(node: Node): boolean;

  declare function isParenthesizedTypeNode(node: Node): boolean;

  declare function isThisTypeNode(node: Node): boolean;

  declare function isTypeOperatorNode(node: Node): boolean;

  declare function isIndexedAccessTypeNode(node: Node): boolean;

  declare function isMappedTypeNode(node: Node): boolean;

  declare function isLiteralTypeNode(node: Node): boolean;

  declare function isImportTypeNode(node: Node): boolean;

  declare function isObjectBindingPattern(node: Node): boolean;

  declare function isArrayBindingPattern(node: Node): boolean;

  declare function isBindingElement(node: Node): boolean;

  declare function isArrayLiteralExpression(node: Node): boolean;

  declare function isObjectLiteralExpression(node: Node): boolean;

  declare function isPropertyAccessExpression(node: Node): boolean;

  declare function isElementAccessExpression(node: Node): boolean;

  declare function isCallExpression(node: Node): boolean;

  declare function isNewExpression(node: Node): boolean;

  declare function isTaggedTemplateExpression(node: Node): boolean;

  declare function isTypeAssertion(node: Node): boolean;

  declare function isParenthesizedExpression(node: Node): boolean;

  declare function skipPartiallyEmittedExpressions(
    node: Expression
  ): Expression;

  declare function skipPartiallyEmittedExpressions(node: Node): Node;

  declare function isFunctionExpression(node: Node): boolean;

  declare function isArrowFunction(node: Node): boolean;

  declare function isDeleteExpression(node: Node): boolean;

  declare function isTypeOfExpression(node: Node): boolean;

  declare function isVoidExpression(node: Node): boolean;

  declare function isAwaitExpression(node: Node): boolean;

  declare function isPrefixUnaryExpression(node: Node): boolean;

  declare function isPostfixUnaryExpression(node: Node): boolean;

  declare function isBinaryExpression(node: Node): boolean;

  declare function isConditionalExpression(node: Node): boolean;

  declare function isTemplateExpression(node: Node): boolean;

  declare function isYieldExpression(node: Node): boolean;

  declare function isSpreadElement(node: Node): boolean;

  declare function isClassExpression(node: Node): boolean;

  declare function isOmittedExpression(node: Node): boolean;

  declare function isExpressionWithTypeArguments(node: Node): boolean;

  declare function isAsExpression(node: Node): boolean;

  declare function isNonNullExpression(node: Node): boolean;

  declare function isMetaProperty(node: Node): boolean;

  declare function isTemplateSpan(node: Node): boolean;

  declare function isSemicolonClassElement(node: Node): boolean;

  declare function isBlock(node: Node): boolean;

  declare function isVariableStatement(node: Node): boolean;

  declare function isEmptyStatement(node: Node): boolean;

  declare function isExpressionStatement(node: Node): boolean;

  declare function isIfStatement(node: Node): boolean;

  declare function isDoStatement(node: Node): boolean;

  declare function isWhileStatement(node: Node): boolean;

  declare function isForStatement(node: Node): boolean;

  declare function isForInStatement(node: Node): boolean;

  declare function isForOfStatement(node: Node): boolean;

  declare function isContinueStatement(node: Node): boolean;

  declare function isBreakStatement(node: Node): boolean;

  declare function isBreakOrContinueStatement(node: Node): boolean;

  declare function isReturnStatement(node: Node): boolean;

  declare function isWithStatement(node: Node): boolean;

  declare function isSwitchStatement(node: Node): boolean;

  declare function isLabeledStatement(node: Node): boolean;

  declare function isThrowStatement(node: Node): boolean;

  declare function isTryStatement(node: Node): boolean;

  declare function isDebuggerStatement(node: Node): boolean;

  declare function isVariableDeclaration(node: Node): boolean;

  declare function isVariableDeclarationList(node: Node): boolean;

  declare function isFunctionDeclaration(node: Node): boolean;

  declare function isClassDeclaration(node: Node): boolean;

  declare function isInterfaceDeclaration(node: Node): boolean;

  declare function isTypeAliasDeclaration(node: Node): boolean;

  declare function isEnumDeclaration(node: Node): boolean;

  declare function isModuleDeclaration(node: Node): boolean;

  declare function isModuleBlock(node: Node): boolean;

  declare function isCaseBlock(node: Node): boolean;

  declare function isNamespaceExportDeclaration(node: Node): boolean;

  declare function isImportEqualsDeclaration(node: Node): boolean;

  declare function isImportDeclaration(node: Node): boolean;

  declare function isImportClause(node: Node): boolean;

  declare function isNamespaceImport(node: Node): boolean;

  declare function isNamedImports(node: Node): boolean;

  declare function isImportSpecifier(node: Node): boolean;

  declare function isExportAssignment(node: Node): boolean;

  declare function isExportDeclaration(node: Node): boolean;

  declare function isNamedExports(node: Node): boolean;

  declare function isExportSpecifier(node: Node): boolean;

  declare function isMissingDeclaration(node: Node): boolean;

  declare function isExternalModuleReference(node: Node): boolean;

  declare function isJsxElement(node: Node): boolean;

  declare function isJsxSelfClosingElement(node: Node): boolean;

  declare function isJsxOpeningElement(node: Node): boolean;

  declare function isJsxClosingElement(node: Node): boolean;

  declare function isJsxFragment(node: Node): boolean;

  declare function isJsxOpeningFragment(node: Node): boolean;

  declare function isJsxClosingFragment(node: Node): boolean;

  declare function isJsxAttribute(node: Node): boolean;

  declare function isJsxAttributes(node: Node): boolean;

  declare function isJsxSpreadAttribute(node: Node): boolean;

  declare function isJsxExpression(node: Node): boolean;

  declare function isCaseClause(node: Node): boolean;

  declare function isDefaultClause(node: Node): boolean;

  declare function isHeritageClause(node: Node): boolean;

  declare function isCatchClause(node: Node): boolean;

  declare function isPropertyAssignment(node: Node): boolean;

  declare function isShorthandPropertyAssignment(node: Node): boolean;

  declare function isSpreadAssignment(node: Node): boolean;

  declare function isEnumMember(node: Node): boolean;

  declare function isSourceFile(node: Node): boolean;

  declare function isBundle(node: Node): boolean;

  declare function isUnparsedSource(node: Node): boolean;

  declare function isJSDocTypeExpression(node: Node): boolean;

  declare function isJSDocAllType(node: JSDocAllType): boolean;

  declare function isJSDocUnknownType(node: Node): boolean;

  declare function isJSDocNullableType(node: Node): boolean;

  declare function isJSDocNonNullableType(node: Node): boolean;

  declare function isJSDocOptionalType(node: Node): boolean;

  declare function isJSDocFunctionType(node: Node): boolean;

  declare function isJSDocVariadicType(node: Node): boolean;

  declare function isJSDoc(node: Node): boolean;

  declare function isJSDocAugmentsTag(node: Node): boolean;

  declare function isJSDocClassTag(node: Node): boolean;

  declare function isJSDocEnumTag(node: Node): boolean;

  declare function isJSDocThisTag(node: Node): boolean;

  declare function isJSDocParameterTag(node: Node): boolean;

  declare function isJSDocReturnTag(node: Node): boolean;

  declare function isJSDocTypeTag(node: Node): boolean;

  declare function isJSDocTemplateTag(node: Node): boolean;

  declare function isJSDocTypedefTag(node: Node): boolean;

  declare function isJSDocPropertyTag(node: Node): boolean;

  declare function isJSDocPropertyLikeTag(node: Node): boolean;

  declare function isJSDocTypeLiteral(node: Node): boolean;

  declare function isJSDocCallbackTag(node: Node): boolean;

  declare function isJSDocSignature(node: Node): boolean;

  declare function isToken(n: Node): boolean;

  declare function isLiteralExpression(node: Node): boolean;

  declare type TemplateLiteralToken =
    | NoSubstitutionTemplateLiteral
    | TemplateHead
    | TemplateMiddle
    | TemplateTail;
  declare function isTemplateLiteralToken(node: Node): boolean;

  declare function isTemplateMiddleOrTemplateTail(node: Node): boolean;

  declare function isImportOrExportSpecifier(node: Node): boolean;

  declare function isStringTextContainingNode(node: Node): boolean;

  declare function isModifier(node: Node): boolean;

  declare function isEntityName(node: Node): boolean;

  declare function isPropertyName(node: Node): boolean;

  declare function isBindingName(node: Node): boolean;

  declare function isFunctionLike(node: Node): boolean;

  declare function isClassElement(node: Node): boolean;

  declare function isClassLike(node: Node): boolean;

  declare function isAccessor(node: Node): boolean;

  declare function isTypeElement(node: Node): boolean;

  declare function isClassOrTypeElement(node: Node): boolean;

  declare function isObjectLiteralElementLike(node: Node): boolean;

  declare function isTypeNode(node: Node): boolean;

  declare function isFunctionOrConstructorTypeNode(node: Node): boolean;

  declare function isPropertyAccessOrQualifiedName(node: Node): boolean;

  declare function isCallLikeExpression(node: Node): boolean;

  declare function isCallOrNewExpression(node: Node): boolean;

  declare function isTemplateLiteral(node: Node): boolean;

  declare function isAssertionExpression(node: Node): boolean;

  declare function isIterationStatement(
    node: Node,
    lookInLabeledStatements: false
  ): boolean;

  declare function isIterationStatement(
    node: Node,
    lookInLabeledStatements: boolean
  ): boolean;

  declare function isJsxOpeningLikeElement(node: Node): boolean;

  declare function isCaseOrDefaultClause(node: Node): boolean;

  declare function isJSDocCommentContainingNode(node: Node): boolean;

  declare function isSetAccessor(node: Node): boolean;

  declare function isGetAccessor(node: Node): boolean;

  declare function isObjectLiteralElement(node: Node): boolean;

  declare function isStringLiteralLike(node: Node): boolean;

  declare function createNode(
    kind: SyntaxKind,
    pos?: number,
    end?: number
  ): Node;

  declare function forEachChild<T>(
    node: Node,
    cbNode: (node: Node) => T | void,
    cbNodes?: (nodes: NodeArray<Node>) => T | void
  ): T | void;

  declare function createSourceFile(
    fileName: string,
    sourceText: string,
    languageVersion: ScriptTarget,
    setParentNodes?: boolean,
    scriptKind?: ScriptKind
  ): SourceFile;

  declare function parseIsolatedEntityName(
    text: string,
    languageVersion: ScriptTarget
  ): EntityName | void;

  declare function parseJsonText(
    fileName: string,
    sourceText: string
  ): JsonSourceFile;

  declare function isExternalModule(file: SourceFile): boolean;

  declare function updateSourceFile(
    sourceFile: SourceFile,
    newText: string,
    textChangeRange: TextChangeRange,
    aggressiveChecks?: boolean
  ): SourceFile;

  declare function parseCommandLine(
    commandLine: $ReadOnlyArray<string>,
    readFile?: (path: string) => string | void
  ): ParsedCommandLine;

  declare type DiagnosticReporter = (diagnostic: Diagnostic) => void;
  declare type ConfigFileDiagnosticsReporter = {
    onUnRecoverableConfigFileDiagnostic: DiagnosticReporter
  };

  declare type ParseConfigFileHost = {
    ...$Exact<ParseConfigHost>,
    ...$Exact<ConfigFileDiagnosticsReporter>,

    getCurrentDirectory(): string
  };

  declare function getParsedCommandLineOfConfigFile(
    configFileName: string,
    optionsToExtend: CompilerOptions,
    host: ParseConfigFileHost
  ): ParsedCommandLine | void;

  declare function readConfigFile(
    fileName: string,
    readFile: (path: string) => string | void
  ): {
    config?: any,
    error?: Diagnostic
  };

  declare function parseConfigFileTextToJson(
    fileName: string,
    jsonText: string
  ): {
    config?: any,
    error?: Diagnostic
  };

  declare function readJsonConfigFile(
    fileName: string,
    readFile: (path: string) => string | void
  ): TsConfigSourceFile;

  declare function convertToObject(
    sourceFile: JsonSourceFile,
    errors: Push<Diagnostic>
  ): any;

  declare function parseJsonConfigFileContent(
    json: any,
    host: ParseConfigHost,
    basePath: string,
    existingOptions?: CompilerOptions,
    configFileName?: string,
    resolutionStack?: Path[],
    extraFileExtensions?: $ReadOnlyArray<FileExtensionInfo>
  ): ParsedCommandLine;

  declare function parseJsonSourceFileConfigFileContent(
    sourceFile: TsConfigSourceFile,
    host: ParseConfigHost,
    basePath: string,
    existingOptions?: CompilerOptions,
    configFileName?: string,
    resolutionStack?: Path[],
    extraFileExtensions?: $ReadOnlyArray<FileExtensionInfo>
  ): ParsedCommandLine;

  declare function convertCompilerOptionsFromJson(
    jsonOptions: any,
    basePath: string,
    configFileName?: string
  ): {
    options: CompilerOptions,
    errors: Diagnostic[]
  };

  declare function convertTypeAcquisitionFromJson(
    jsonOptions: any,
    basePath: string,
    configFileName?: string
  ): {
    options: TypeAcquisition,
    errors: Diagnostic[]
  };

  declare function getEffectiveTypeRoots(
    options: CompilerOptions,
    host: GetEffectiveTypeRootsHost
  ): string[] | void;

  declare function resolveTypeReferenceDirective(
    typeReferenceDirectiveName: string,
    containingFile: string | void,
    options: CompilerOptions,
    host: ModuleResolutionHost,
    redirectedReference?: ResolvedProjectReference
  ): ResolvedTypeReferenceDirectiveWithFailedLookupLocations;

  declare function getAutomaticTypeDirectiveNames(
    options: CompilerOptions,
    host: ModuleResolutionHost
  ): string[];

  declare type ModuleResolutionCache = {
    ...$Exact<NonRelativeModuleNameResolutionCache>,

    getOrCreateCacheForDirectory(
      directoryName: string,
      redirectedReference?: ResolvedProjectReference
    ): Map<ResolvedModuleWithFailedLookupLocations>
  };

  declare type NonRelativeModuleNameResolutionCache = {
    getOrCreateCacheForModuleName(
      nonRelativeModuleName: string,
      redirectedReference?: ResolvedProjectReference
    ): PerModuleNameCache
  };

  declare type PerModuleNameCache = {
    get(directory: string): ResolvedModuleWithFailedLookupLocations | void,
    set(
      directory: string,
      result: ResolvedModuleWithFailedLookupLocations
    ): void
  };

  declare function createModuleResolutionCache(
    currentDirectory: string,
    getCanonicalFileName: (s: string) => string
  ): ModuleResolutionCache;

  declare function resolveModuleNameFromCache(
    moduleName: string,
    containingFile: string,
    cache: ModuleResolutionCache
  ): ResolvedModuleWithFailedLookupLocations | void;

  declare function resolveModuleName(
    moduleName: string,
    containingFile: string,
    compilerOptions: CompilerOptions,
    host: ModuleResolutionHost,
    cache?: ModuleResolutionCache,
    redirectedReference?: ResolvedProjectReference
  ): ResolvedModuleWithFailedLookupLocations;

  declare function nodeModuleNameResolver(
    moduleName: string,
    containingFile: string,
    compilerOptions: CompilerOptions,
    host: ModuleResolutionHost,
    cache?: ModuleResolutionCache,
    redirectedReference?: ResolvedProjectReference
  ): ResolvedModuleWithFailedLookupLocations;

  declare function classicNameResolver(
    moduleName: string,
    containingFile: string,
    compilerOptions: CompilerOptions,
    host: ModuleResolutionHost,
    cache?: NonRelativeModuleNameResolutionCache,
    redirectedReference?: ResolvedProjectReference
  ): ResolvedModuleWithFailedLookupLocations;

  declare function createNodeArray<T: Node>(
    elements?: $ReadOnlyArray<T>,
    hasTrailingComma?: boolean
  ): NodeArray<T>;

  declare function createLiteral(
    value:
      | string
      | StringLiteral
      | NoSubstitutionTemplateLiteral
      | NumericLiteral
      | Identifier
  ): StringLiteral;

  declare function createLiteral(value: number | PseudoBigInt): NumericLiteral;

  declare function createLiteral(value: boolean): BooleanLiteral;

  declare function createLiteral(
    value: string | number | PseudoBigInt | boolean
  ): PrimaryExpression;

  declare function createNumericLiteral(value: string): NumericLiteral;

  declare function createBigIntLiteral(value: string): BigIntLiteral;

  declare function createStringLiteral(text: string): StringLiteral;

  declare function createRegularExpressionLiteral(
    text: string
  ): RegularExpressionLiteral;

  declare function createIdentifier(text: string): Identifier;

  declare function updateIdentifier(node: Identifier): Identifier;

  declare function createTempVariable(
    recordTempVariable: ((node: Identifier) => void) | void
  ): Identifier;

  declare function createLoopVariable(): Identifier;

  declare function createUniqueName(text: string): Identifier;

  declare function createOptimisticUniqueName(text: string): Identifier;

  declare function createFileLevelUniqueName(text: string): Identifier;

  declare function getGeneratedNameForNode(node: Node | void): Identifier;

  declare function createToken<TKind: SyntaxKind>(token: TKind): Token<TKind>;

  declare function createSuper(): SuperExpression;

  declare function createThis(): ThisExpression & Token<SyntaxKind.ThisKeyword>;

  declare function createNull(): NullLiteral & Token<SyntaxKind.NullKeyword>;

  declare function createTrue(): BooleanLiteral & Token<SyntaxKind.TrueKeyword>;

  declare function createFalse(): BooleanLiteral &
    Token<SyntaxKind.FalseKeyword>;

  declare function createModifier<T: $ElementType<Modifier, "kind">>(
    kind: T
  ): Token<T>;

  declare function createModifiersFromModifierFlags(
    flags: ModifierFlags
  ): Modifier[];

  declare function createQualifiedName(
    left: EntityName,
    right: string | Identifier
  ): QualifiedName;

  declare function updateQualifiedName(
    node: QualifiedName,
    left: EntityName,
    right: Identifier
  ): QualifiedName;

  declare function createComputedPropertyName(
    expression: Expression
  ): ComputedPropertyName;

  declare function updateComputedPropertyName(
    node: ComputedPropertyName,
    expression: Expression
  ): ComputedPropertyName;

  declare function createTypeParameterDeclaration(
    name: string | Identifier,
    constraint?: TypeNode,
    defaultType?: TypeNode
  ): TypeParameterDeclaration;

  declare function updateTypeParameterDeclaration(
    node: TypeParameterDeclaration,
    name: Identifier,
    constraint: TypeNode | void,
    defaultType: TypeNode | void
  ): TypeParameterDeclaration;

  declare function createParameter(
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    dotDotDotToken: DotDotDotToken | void,
    name: string | BindingName,
    questionToken?: QuestionToken,
    type?: TypeNode,
    initializer?: Expression
  ): ParameterDeclaration;

  declare function updateParameter(
    node: ParameterDeclaration,
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    dotDotDotToken: DotDotDotToken | void,
    name: string | BindingName,
    questionToken: QuestionToken | void,
    type: TypeNode | void,
    initializer: Expression | void
  ): ParameterDeclaration;

  declare function createDecorator(expression: Expression): Decorator;

  declare function updateDecorator(
    node: Decorator,
    expression: Expression
  ): Decorator;

  declare function createPropertySignature(
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: PropertyName | string,
    questionToken: QuestionToken | void,
    type: TypeNode | void,
    initializer: Expression | void
  ): PropertySignature;

  declare function updatePropertySignature(
    node: PropertySignature,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: PropertyName,
    questionToken: QuestionToken | void,
    type: TypeNode | void,
    initializer: Expression | void
  ): PropertySignature;

  declare function createProperty(
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: string | PropertyName,
    questionOrExclamationToken: QuestionToken | ExclamationToken | void,
    type: TypeNode | void,
    initializer: Expression | void
  ): PropertyDeclaration;

  declare function updateProperty(
    node: PropertyDeclaration,
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: string | PropertyName,
    questionOrExclamationToken: QuestionToken | ExclamationToken | void,
    type: TypeNode | void,
    initializer: Expression | void
  ): PropertyDeclaration;

  declare function createMethodSignature(
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    type: TypeNode | void,
    name: string | PropertyName,
    questionToken: QuestionToken | void
  ): MethodSignature;

  declare function updateMethodSignature(
    node: MethodSignature,
    typeParameters: NodeArray<TypeParameterDeclaration> | void,
    parameters: NodeArray<ParameterDeclaration>,
    type: TypeNode | void,
    name: PropertyName,
    questionToken: QuestionToken | void
  ): MethodSignature;

  declare function createMethod(
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    asteriskToken: AsteriskToken | void,
    name: string | PropertyName,
    questionToken: QuestionToken | void,
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    type: TypeNode | void,
    body: Block | void
  ): MethodDeclaration;

  declare function updateMethod(
    node: MethodDeclaration,
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    asteriskToken: AsteriskToken | void,
    name: PropertyName,
    questionToken: QuestionToken | void,
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    type: TypeNode | void,
    body: Block | void
  ): MethodDeclaration;

  declare function createConstructor(
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    body: Block | void
  ): ConstructorDeclaration;

  declare function updateConstructor(
    node: ConstructorDeclaration,
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    body: Block | void
  ): ConstructorDeclaration;

  declare function createGetAccessor(
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: string | PropertyName,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    type: TypeNode | void,
    body: Block | void
  ): GetAccessorDeclaration;

  declare function updateGetAccessor(
    node: GetAccessorDeclaration,
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: PropertyName,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    type: TypeNode | void,
    body: Block | void
  ): GetAccessorDeclaration;

  declare function createSetAccessor(
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: string | PropertyName,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    body: Block | void
  ): SetAccessorDeclaration;

  declare function updateSetAccessor(
    node: SetAccessorDeclaration,
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: PropertyName,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    body: Block | void
  ): SetAccessorDeclaration;

  declare function createCallSignature(
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    type: TypeNode | void
  ): CallSignatureDeclaration;

  declare function updateCallSignature(
    node: CallSignatureDeclaration,
    typeParameters: NodeArray<TypeParameterDeclaration> | void,
    parameters: NodeArray<ParameterDeclaration>,
    type: TypeNode | void
  ): CallSignatureDeclaration;

  declare function createConstructSignature(
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    type: TypeNode | void
  ): ConstructSignatureDeclaration;

  declare function updateConstructSignature(
    node: ConstructSignatureDeclaration,
    typeParameters: NodeArray<TypeParameterDeclaration> | void,
    parameters: NodeArray<ParameterDeclaration>,
    type: TypeNode | void
  ): ConstructSignatureDeclaration;

  declare function createIndexSignature(
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    type: TypeNode
  ): IndexSignatureDeclaration;

  declare function updateIndexSignature(
    node: IndexSignatureDeclaration,
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    type: TypeNode
  ): IndexSignatureDeclaration;

  declare function createKeywordTypeNode(
    kind: $ElementType<KeywordTypeNode, "kind">
  ): KeywordTypeNode;

  declare function createTypePredicateNode(
    parameterName: Identifier | ThisTypeNode | string,
    type: TypeNode
  ): TypePredicateNode;

  declare function updateTypePredicateNode(
    node: TypePredicateNode,
    parameterName: Identifier | ThisTypeNode,
    type: TypeNode
  ): TypePredicateNode;

  declare function createTypeReferenceNode(
    typeName: string | EntityName,
    typeArguments: $ReadOnlyArray<TypeNode> | void
  ): TypeReferenceNode;

  declare function updateTypeReferenceNode(
    node: TypeReferenceNode,
    typeName: EntityName,
    typeArguments: NodeArray<TypeNode> | void
  ): TypeReferenceNode;

  declare function createFunctionTypeNode(
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    type: TypeNode | void
  ): FunctionTypeNode;

  declare function updateFunctionTypeNode(
    node: FunctionTypeNode,
    typeParameters: NodeArray<TypeParameterDeclaration> | void,
    parameters: NodeArray<ParameterDeclaration>,
    type: TypeNode | void
  ): FunctionTypeNode;

  declare function createConstructorTypeNode(
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    type: TypeNode | void
  ): ConstructorTypeNode;

  declare function updateConstructorTypeNode(
    node: ConstructorTypeNode,
    typeParameters: NodeArray<TypeParameterDeclaration> | void,
    parameters: NodeArray<ParameterDeclaration>,
    type: TypeNode | void
  ): ConstructorTypeNode;

  declare function createTypeQueryNode(exprName: EntityName): TypeQueryNode;

  declare function updateTypeQueryNode(
    node: TypeQueryNode,
    exprName: EntityName
  ): TypeQueryNode;

  declare function createTypeLiteralNode(
    members: $ReadOnlyArray<TypeElement> | void
  ): TypeLiteralNode;

  declare function updateTypeLiteralNode(
    node: TypeLiteralNode,
    members: NodeArray<TypeElement>
  ): TypeLiteralNode;

  declare function createArrayTypeNode(elementType: TypeNode): ArrayTypeNode;

  declare function updateArrayTypeNode(
    node: ArrayTypeNode,
    elementType: TypeNode
  ): ArrayTypeNode;

  declare function createTupleTypeNode(
    elementTypes: $ReadOnlyArray<TypeNode>
  ): TupleTypeNode;

  declare function updateTupleTypeNode(
    node: TupleTypeNode,
    elementTypes: $ReadOnlyArray<TypeNode>
  ): TupleTypeNode;

  declare function createOptionalTypeNode(type: TypeNode): OptionalTypeNode;

  declare function updateOptionalTypeNode(
    node: OptionalTypeNode,
    type: TypeNode
  ): OptionalTypeNode;

  declare function createRestTypeNode(type: TypeNode): RestTypeNode;

  declare function updateRestTypeNode(
    node: RestTypeNode,
    type: TypeNode
  ): RestTypeNode;

  declare function createUnionTypeNode(
    types: $ReadOnlyArray<TypeNode>
  ): UnionTypeNode;

  declare function updateUnionTypeNode(
    node: UnionTypeNode,
    types: NodeArray<TypeNode>
  ): UnionTypeNode;

  declare function createIntersectionTypeNode(
    types: $ReadOnlyArray<TypeNode>
  ): IntersectionTypeNode;

  declare function updateIntersectionTypeNode(
    node: IntersectionTypeNode,
    types: NodeArray<TypeNode>
  ): IntersectionTypeNode;

  declare function createUnionOrIntersectionTypeNode(
    kind: SyntaxKind.UnionType | SyntaxKind.IntersectionType,
    types: $ReadOnlyArray<TypeNode>
  ): UnionOrIntersectionTypeNode;

  declare function createConditionalTypeNode(
    checkType: TypeNode,
    extendsType: TypeNode,
    trueType: TypeNode,
    falseType: TypeNode
  ): ConditionalTypeNode;

  declare function updateConditionalTypeNode(
    node: ConditionalTypeNode,
    checkType: TypeNode,
    extendsType: TypeNode,
    trueType: TypeNode,
    falseType: TypeNode
  ): ConditionalTypeNode;

  declare function createInferTypeNode(
    typeParameter: TypeParameterDeclaration
  ): InferTypeNode;

  declare function updateInferTypeNode(
    node: InferTypeNode,
    typeParameter: TypeParameterDeclaration
  ): InferTypeNode;

  declare function createImportTypeNode(
    argument: TypeNode,
    qualifier?: EntityName,
    typeArguments?: $ReadOnlyArray<TypeNode>,
    isTypeOf?: boolean
  ): ImportTypeNode;

  declare function updateImportTypeNode(
    node: ImportTypeNode,
    argument: TypeNode,
    qualifier?: EntityName,
    typeArguments?: $ReadOnlyArray<TypeNode>,
    isTypeOf?: boolean
  ): ImportTypeNode;

  declare function createParenthesizedType(
    type: TypeNode
  ): ParenthesizedTypeNode;

  declare function updateParenthesizedType(
    node: ParenthesizedTypeNode,
    type: TypeNode
  ): ParenthesizedTypeNode;

  declare function createThisTypeNode(): ThisTypeNode;

  declare function createTypeOperatorNode(type: TypeNode): TypeOperatorNode;

  declare function createTypeOperatorNode(
    operator: SyntaxKind.KeyOfKeyword | SyntaxKind.UniqueKeyword,
    type: TypeNode
  ): TypeOperatorNode;

  declare function updateTypeOperatorNode(
    node: TypeOperatorNode,
    type: TypeNode
  ): TypeOperatorNode;

  declare function createIndexedAccessTypeNode(
    objectType: TypeNode,
    indexType: TypeNode
  ): IndexedAccessTypeNode;

  declare function updateIndexedAccessTypeNode(
    node: IndexedAccessTypeNode,
    objectType: TypeNode,
    indexType: TypeNode
  ): IndexedAccessTypeNode;

  declare function createMappedTypeNode(
    readonlyToken: ReadonlyToken | PlusToken | MinusToken | void,
    typeParameter: TypeParameterDeclaration,
    questionToken: QuestionToken | PlusToken | MinusToken | void,
    type: TypeNode | void
  ): MappedTypeNode;

  declare function updateMappedTypeNode(
    node: MappedTypeNode,
    readonlyToken: ReadonlyToken | PlusToken | MinusToken | void,
    typeParameter: TypeParameterDeclaration,
    questionToken: QuestionToken | PlusToken | MinusToken | void,
    type: TypeNode | void
  ): MappedTypeNode;

  declare function createLiteralTypeNode(
    literal: $ElementType<LiteralTypeNode, "literal">
  ): LiteralTypeNode;

  declare function updateLiteralTypeNode(
    node: LiteralTypeNode,
    literal: $ElementType<LiteralTypeNode, "literal">
  ): LiteralTypeNode;

  declare function createObjectBindingPattern(
    elements: $ReadOnlyArray<BindingElement>
  ): ObjectBindingPattern;

  declare function updateObjectBindingPattern(
    node: ObjectBindingPattern,
    elements: $ReadOnlyArray<BindingElement>
  ): ObjectBindingPattern;

  declare function createArrayBindingPattern(
    elements: $ReadOnlyArray<ArrayBindingElement>
  ): ArrayBindingPattern;

  declare function updateArrayBindingPattern(
    node: ArrayBindingPattern,
    elements: $ReadOnlyArray<ArrayBindingElement>
  ): ArrayBindingPattern;

  declare function createBindingElement(
    dotDotDotToken: DotDotDotToken | void,
    propertyName: string | PropertyName | void,
    name: string | BindingName,
    initializer?: Expression
  ): BindingElement;

  declare function updateBindingElement(
    node: BindingElement,
    dotDotDotToken: DotDotDotToken | void,
    propertyName: PropertyName | void,
    name: BindingName,
    initializer: Expression | void
  ): BindingElement;

  declare function createArrayLiteral(
    elements?: $ReadOnlyArray<Expression>,
    multiLine?: boolean
  ): ArrayLiteralExpression;

  declare function updateArrayLiteral(
    node: ArrayLiteralExpression,
    elements: $ReadOnlyArray<Expression>
  ): ArrayLiteralExpression;

  declare function createObjectLiteral(
    properties?: $ReadOnlyArray<ObjectLiteralElementLike>,
    multiLine?: boolean
  ): ObjectLiteralExpression;

  declare function updateObjectLiteral(
    node: ObjectLiteralExpression,
    properties: $ReadOnlyArray<ObjectLiteralElementLike>
  ): ObjectLiteralExpression;

  declare function createPropertyAccess(
    expression: Expression,
    name: string | Identifier | void
  ): PropertyAccessExpression;

  declare function updatePropertyAccess(
    node: PropertyAccessExpression,
    expression: Expression,
    name: Identifier
  ): PropertyAccessExpression;

  declare function createElementAccess(
    expression: Expression,
    index: number | Expression
  ): ElementAccessExpression;

  declare function updateElementAccess(
    node: ElementAccessExpression,
    expression: Expression,
    argumentExpression: Expression
  ): ElementAccessExpression;

  declare function createCall(
    expression: Expression,
    typeArguments: $ReadOnlyArray<TypeNode> | void,
    argumentsArray: $ReadOnlyArray<Expression> | void
  ): CallExpression;

  declare function updateCall(
    node: CallExpression,
    expression: Expression,
    typeArguments: $ReadOnlyArray<TypeNode> | void,
    argumentsArray: $ReadOnlyArray<Expression>
  ): CallExpression;

  declare function createNew(
    expression: Expression,
    typeArguments: $ReadOnlyArray<TypeNode> | void,
    argumentsArray: $ReadOnlyArray<Expression> | void
  ): NewExpression;

  declare function updateNew(
    node: NewExpression,
    expression: Expression,
    typeArguments: $ReadOnlyArray<TypeNode> | void,
    argumentsArray: $ReadOnlyArray<Expression> | void
  ): NewExpression;

  declare function createTaggedTemplate(
    tag: Expression,
    template: TemplateLiteral
  ): TaggedTemplateExpression;

  declare function createTaggedTemplate(
    tag: Expression,
    typeArguments: $ReadOnlyArray<TypeNode> | void,
    template: TemplateLiteral
  ): TaggedTemplateExpression;

  declare function updateTaggedTemplate(
    node: TaggedTemplateExpression,
    tag: Expression,
    template: TemplateLiteral
  ): TaggedTemplateExpression;

  declare function updateTaggedTemplate(
    node: TaggedTemplateExpression,
    tag: Expression,
    typeArguments: $ReadOnlyArray<TypeNode> | void,
    template: TemplateLiteral
  ): TaggedTemplateExpression;

  declare function createTypeAssertion(
    type: TypeNode,
    expression: Expression
  ): TypeAssertion;

  declare function updateTypeAssertion(
    node: TypeAssertion,
    type: TypeNode,
    expression: Expression
  ): TypeAssertion;

  declare function createParen(expression: Expression): ParenthesizedExpression;

  declare function updateParen(
    node: ParenthesizedExpression,
    expression: Expression
  ): ParenthesizedExpression;

  declare function createFunctionExpression(
    modifiers: $ReadOnlyArray<Modifier> | void,
    asteriskToken: AsteriskToken | void,
    name: string | Identifier | void,
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    parameters: $ReadOnlyArray<ParameterDeclaration> | void,
    type: TypeNode | void,
    body: Block
  ): FunctionExpression;

  declare function updateFunctionExpression(
    node: FunctionExpression,
    modifiers: $ReadOnlyArray<Modifier> | void,
    asteriskToken: AsteriskToken | void,
    name: Identifier | void,
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    type: TypeNode | void,
    body: Block
  ): FunctionExpression;

  declare function createArrowFunction(
    modifiers: $ReadOnlyArray<Modifier> | void,
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    type: TypeNode | void,
    equalsGreaterThanToken: EqualsGreaterThanToken | void,
    body: ConciseBody
  ): ArrowFunction;

  declare function updateArrowFunction(
    node: ArrowFunction,
    modifiers: $ReadOnlyArray<Modifier> | void,
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    type: TypeNode | void,
    equalsGreaterThanToken: Token<SyntaxKind.EqualsGreaterThanToken>,
    body: ConciseBody
  ): ArrowFunction;

  declare function createDelete(expression: Expression): DeleteExpression;

  declare function updateDelete(
    node: DeleteExpression,
    expression: Expression
  ): DeleteExpression;

  declare function createTypeOf(expression: Expression): TypeOfExpression;

  declare function updateTypeOf(
    node: TypeOfExpression,
    expression: Expression
  ): TypeOfExpression;

  declare function createVoid(expression: Expression): VoidExpression;

  declare function updateVoid(
    node: VoidExpression,
    expression: Expression
  ): VoidExpression;

  declare function createAwait(expression: Expression): AwaitExpression;

  declare function updateAwait(
    node: AwaitExpression,
    expression: Expression
  ): AwaitExpression;

  declare function createPrefix(
    operator: PrefixUnaryOperator,
    operand: Expression
  ): PrefixUnaryExpression;

  declare function updatePrefix(
    node: PrefixUnaryExpression,
    operand: Expression
  ): PrefixUnaryExpression;

  declare function createPostfix(
    operand: Expression,
    operator: PostfixUnaryOperator
  ): PostfixUnaryExpression;

  declare function updatePostfix(
    node: PostfixUnaryExpression,
    operand: Expression
  ): PostfixUnaryExpression;

  declare function createBinary(
    left: Expression,
    operator: BinaryOperator | BinaryOperatorToken,
    right: Expression
  ): BinaryExpression;

  declare function updateBinary(
    node: BinaryExpression,
    left: Expression,
    right: Expression,
    operator?: BinaryOperator | BinaryOperatorToken
  ): BinaryExpression;

  declare function createConditional(
    condition: Expression,
    whenTrue: Expression,
    whenFalse: Expression
  ): ConditionalExpression;

  declare function createConditional(
    condition: Expression,
    questionToken: QuestionToken,
    whenTrue: Expression,
    colonToken: ColonToken,
    whenFalse: Expression
  ): ConditionalExpression;

  declare function updateConditional(
    node: ConditionalExpression,
    condition: Expression,
    questionToken: Token<SyntaxKind.QuestionToken>,
    whenTrue: Expression,
    colonToken: Token<SyntaxKind.ColonToken>,
    whenFalse: Expression
  ): ConditionalExpression;

  declare function createTemplateExpression(
    head: TemplateHead,
    templateSpans: $ReadOnlyArray<TemplateSpan>
  ): TemplateExpression;

  declare function updateTemplateExpression(
    node: TemplateExpression,
    head: TemplateHead,
    templateSpans: $ReadOnlyArray<TemplateSpan>
  ): TemplateExpression;

  declare function createTemplateHead(text: string): TemplateHead;

  declare function createTemplateMiddle(text: string): TemplateMiddle;

  declare function createTemplateTail(text: string): TemplateTail;

  declare function createNoSubstitutionTemplateLiteral(
    text: string
  ): NoSubstitutionTemplateLiteral;

  declare function createYield(expression?: Expression): YieldExpression;

  declare function createYield(
    asteriskToken: AsteriskToken | void,
    expression: Expression
  ): YieldExpression;

  declare function updateYield(
    node: YieldExpression,
    asteriskToken: AsteriskToken | void,
    expression: Expression
  ): YieldExpression;

  declare function createSpread(expression: Expression): SpreadElement;

  declare function updateSpread(
    node: SpreadElement,
    expression: Expression
  ): SpreadElement;

  declare function createClassExpression(
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: string | Identifier | void,
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    heritageClauses: $ReadOnlyArray<HeritageClause> | void,
    members: $ReadOnlyArray<ClassElement>
  ): ClassExpression;

  declare function updateClassExpression(
    node: ClassExpression,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: Identifier | void,
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    heritageClauses: $ReadOnlyArray<HeritageClause> | void,
    members: $ReadOnlyArray<ClassElement>
  ): ClassExpression;

  declare function createOmittedExpression(): OmittedExpression;

  declare function createExpressionWithTypeArguments(
    typeArguments: $ReadOnlyArray<TypeNode> | void,
    expression: Expression
  ): ExpressionWithTypeArguments;

  declare function updateExpressionWithTypeArguments(
    node: ExpressionWithTypeArguments,
    typeArguments: $ReadOnlyArray<TypeNode> | void,
    expression: Expression
  ): ExpressionWithTypeArguments;

  declare function createAsExpression(
    expression: Expression,
    type: TypeNode
  ): AsExpression;

  declare function updateAsExpression(
    node: AsExpression,
    expression: Expression,
    type: TypeNode
  ): AsExpression;

  declare function createNonNullExpression(
    expression: Expression
  ): NonNullExpression;

  declare function updateNonNullExpression(
    node: NonNullExpression,
    expression: Expression
  ): NonNullExpression;

  declare function createMetaProperty(
    keywordToken: $ElementType<MetaProperty, "keywordToken">,
    name: Identifier
  ): MetaProperty;

  declare function updateMetaProperty(
    node: MetaProperty,
    name: Identifier
  ): MetaProperty;

  declare function createTemplateSpan(
    expression: Expression,
    literal: TemplateMiddle | TemplateTail
  ): TemplateSpan;

  declare function updateTemplateSpan(
    node: TemplateSpan,
    expression: Expression,
    literal: TemplateMiddle | TemplateTail
  ): TemplateSpan;

  declare function createSemicolonClassElement(): SemicolonClassElement;

  declare function createBlock(
    statements: $ReadOnlyArray<Statement>,
    multiLine?: boolean
  ): Block;

  declare function updateBlock(
    node: Block,
    statements: $ReadOnlyArray<Statement>
  ): Block;

  declare function createVariableStatement(
    modifiers: $ReadOnlyArray<Modifier> | void,
    declarationList:
      | VariableDeclarationList
      | $ReadOnlyArray<VariableDeclaration>
  ): VariableStatement;

  declare function updateVariableStatement(
    node: VariableStatement,
    modifiers: $ReadOnlyArray<Modifier> | void,
    declarationList: VariableDeclarationList
  ): VariableStatement;

  declare function createEmptyStatement(): EmptyStatement;

  declare function createExpressionStatement(
    expression: Expression
  ): ExpressionStatement;

  declare function updateExpressionStatement(
    node: ExpressionStatement,
    expression: Expression
  ): ExpressionStatement;

  declare var createStatement: typeof createExpressionStatement;
  declare var updateStatement: typeof updateExpressionStatement;
  declare function createIf(
    expression: Expression,
    thenStatement: Statement,
    elseStatement?: Statement
  ): IfStatement;

  declare function updateIf(
    node: IfStatement,
    expression: Expression,
    thenStatement: Statement,
    elseStatement: Statement | void
  ): IfStatement;

  declare function createDo(
    statement: Statement,
    expression: Expression
  ): DoStatement;

  declare function updateDo(
    node: DoStatement,
    statement: Statement,
    expression: Expression
  ): DoStatement;

  declare function createWhile(
    expression: Expression,
    statement: Statement
  ): WhileStatement;

  declare function updateWhile(
    node: WhileStatement,
    expression: Expression,
    statement: Statement
  ): WhileStatement;

  declare function createFor(
    initializer: ForInitializer | void,
    condition: Expression | void,
    incrementor: Expression | void,
    statement: Statement
  ): ForStatement;

  declare function updateFor(
    node: ForStatement,
    initializer: ForInitializer | void,
    condition: Expression | void,
    incrementor: Expression | void,
    statement: Statement
  ): ForStatement;

  declare function createForIn(
    initializer: ForInitializer,
    expression: Expression,
    statement: Statement
  ): ForInStatement;

  declare function updateForIn(
    node: ForInStatement,
    initializer: ForInitializer,
    expression: Expression,
    statement: Statement
  ): ForInStatement;

  declare function createForOf(
    awaitModifier: AwaitKeywordToken | void,
    initializer: ForInitializer,
    expression: Expression,
    statement: Statement
  ): ForOfStatement;

  declare function updateForOf(
    node: ForOfStatement,
    awaitModifier: AwaitKeywordToken | void,
    initializer: ForInitializer,
    expression: Expression,
    statement: Statement
  ): ForOfStatement;

  declare function createContinue(
    label?: string | Identifier
  ): ContinueStatement;

  declare function updateContinue(
    node: ContinueStatement,
    label: Identifier | void
  ): ContinueStatement;

  declare function createBreak(label?: string | Identifier): BreakStatement;

  declare function updateBreak(
    node: BreakStatement,
    label: Identifier | void
  ): BreakStatement;

  declare function createReturn(expression?: Expression): ReturnStatement;

  declare function updateReturn(
    node: ReturnStatement,
    expression: Expression | void
  ): ReturnStatement;

  declare function createWith(
    expression: Expression,
    statement: Statement
  ): WithStatement;

  declare function updateWith(
    node: WithStatement,
    expression: Expression,
    statement: Statement
  ): WithStatement;

  declare function createSwitch(
    expression: Expression,
    caseBlock: CaseBlock
  ): SwitchStatement;

  declare function updateSwitch(
    node: SwitchStatement,
    expression: Expression,
    caseBlock: CaseBlock
  ): SwitchStatement;

  declare function createLabel(
    label: string | Identifier,
    statement: Statement
  ): LabeledStatement;

  declare function updateLabel(
    node: LabeledStatement,
    label: Identifier,
    statement: Statement
  ): LabeledStatement;

  declare function createThrow(expression: Expression): ThrowStatement;

  declare function updateThrow(
    node: ThrowStatement,
    expression: Expression
  ): ThrowStatement;

  declare function createTry(
    tryBlock: Block,
    catchClause: CatchClause | void,
    finallyBlock: Block | void
  ): TryStatement;

  declare function updateTry(
    node: TryStatement,
    tryBlock: Block,
    catchClause: CatchClause | void,
    finallyBlock: Block | void
  ): TryStatement;

  declare function createDebuggerStatement(): DebuggerStatement;

  declare function createVariableDeclaration(
    name: string | BindingName,
    type?: TypeNode,
    initializer?: Expression
  ): VariableDeclaration;

  declare function updateVariableDeclaration(
    node: VariableDeclaration,
    name: BindingName,
    type: TypeNode | void,
    initializer: Expression | void
  ): VariableDeclaration;

  declare function createVariableDeclarationList(
    declarations: $ReadOnlyArray<VariableDeclaration>,
    flags?: NodeFlags
  ): VariableDeclarationList;

  declare function updateVariableDeclarationList(
    node: VariableDeclarationList,
    declarations: $ReadOnlyArray<VariableDeclaration>
  ): VariableDeclarationList;

  declare function createFunctionDeclaration(
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    asteriskToken: AsteriskToken | void,
    name: string | Identifier | void,
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    type: TypeNode | void,
    body: Block | void
  ): FunctionDeclaration;

  declare function updateFunctionDeclaration(
    node: FunctionDeclaration,
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    asteriskToken: AsteriskToken | void,
    name: Identifier | void,
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    parameters: $ReadOnlyArray<ParameterDeclaration>,
    type: TypeNode | void,
    body: Block | void
  ): FunctionDeclaration;

  declare function createClassDeclaration(
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: string | Identifier | void,
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    heritageClauses: $ReadOnlyArray<HeritageClause> | void,
    members: $ReadOnlyArray<ClassElement>
  ): ClassDeclaration;

  declare function updateClassDeclaration(
    node: ClassDeclaration,
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: Identifier | void,
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    heritageClauses: $ReadOnlyArray<HeritageClause> | void,
    members: $ReadOnlyArray<ClassElement>
  ): ClassDeclaration;

  declare function createInterfaceDeclaration(
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: string | Identifier,
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    heritageClauses: $ReadOnlyArray<HeritageClause> | void,
    members: $ReadOnlyArray<TypeElement>
  ): InterfaceDeclaration;

  declare function updateInterfaceDeclaration(
    node: InterfaceDeclaration,
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: Identifier,
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    heritageClauses: $ReadOnlyArray<HeritageClause> | void,
    members: $ReadOnlyArray<TypeElement>
  ): InterfaceDeclaration;

  declare function createTypeAliasDeclaration(
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: string | Identifier,
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    type: TypeNode
  ): TypeAliasDeclaration;

  declare function updateTypeAliasDeclaration(
    node: TypeAliasDeclaration,
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: Identifier,
    typeParameters: $ReadOnlyArray<TypeParameterDeclaration> | void,
    type: TypeNode
  ): TypeAliasDeclaration;

  declare function createEnumDeclaration(
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: string | Identifier,
    members: $ReadOnlyArray<EnumMember>
  ): EnumDeclaration;

  declare function updateEnumDeclaration(
    node: EnumDeclaration,
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: Identifier,
    members: $ReadOnlyArray<EnumMember>
  ): EnumDeclaration;

  declare function createModuleDeclaration(
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: ModuleName,
    body: ModuleBody | void,
    flags?: NodeFlags
  ): ModuleDeclaration;

  declare function updateModuleDeclaration(
    node: ModuleDeclaration,
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: ModuleName,
    body: ModuleBody | void
  ): ModuleDeclaration;

  declare function createModuleBlock(
    statements: $ReadOnlyArray<Statement>
  ): ModuleBlock;

  declare function updateModuleBlock(
    node: ModuleBlock,
    statements: $ReadOnlyArray<Statement>
  ): ModuleBlock;

  declare function createCaseBlock(
    clauses: $ReadOnlyArray<CaseOrDefaultClause>
  ): CaseBlock;

  declare function updateCaseBlock(
    node: CaseBlock,
    clauses: $ReadOnlyArray<CaseOrDefaultClause>
  ): CaseBlock;

  declare function createNamespaceExportDeclaration(
    name: string | Identifier
  ): NamespaceExportDeclaration;

  declare function updateNamespaceExportDeclaration(
    node: NamespaceExportDeclaration,
    name: Identifier
  ): NamespaceExportDeclaration;

  declare function createImportEqualsDeclaration(
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: string | Identifier,
    moduleReference: ModuleReference
  ): ImportEqualsDeclaration;

  declare function updateImportEqualsDeclaration(
    node: ImportEqualsDeclaration,
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    name: Identifier,
    moduleReference: ModuleReference
  ): ImportEqualsDeclaration;

  declare function createImportDeclaration(
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    importClause: ImportClause | void,
    moduleSpecifier: Expression
  ): ImportDeclaration;

  declare function updateImportDeclaration(
    node: ImportDeclaration,
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    importClause: ImportClause | void,
    moduleSpecifier: Expression
  ): ImportDeclaration;

  declare function createImportClause(
    name: Identifier | void,
    namedBindings: NamedImportBindings | void
  ): ImportClause;

  declare function updateImportClause(
    node: ImportClause,
    name: Identifier | void,
    namedBindings: NamedImportBindings | void
  ): ImportClause;

  declare function createNamespaceImport(name: Identifier): NamespaceImport;

  declare function updateNamespaceImport(
    node: NamespaceImport,
    name: Identifier
  ): NamespaceImport;

  declare function createNamedImports(
    elements: $ReadOnlyArray<ImportSpecifier>
  ): NamedImports;

  declare function updateNamedImports(
    node: NamedImports,
    elements: $ReadOnlyArray<ImportSpecifier>
  ): NamedImports;

  declare function createImportSpecifier(
    propertyName: Identifier | void,
    name: Identifier
  ): ImportSpecifier;

  declare function updateImportSpecifier(
    node: ImportSpecifier,
    propertyName: Identifier | void,
    name: Identifier
  ): ImportSpecifier;

  declare function createExportAssignment(
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    isExportEquals: boolean | void,
    expression: Expression
  ): ExportAssignment;

  declare function updateExportAssignment(
    node: ExportAssignment,
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    expression: Expression
  ): ExportAssignment;

  declare function createExportDeclaration(
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    exportClause: NamedExports | void,
    moduleSpecifier?: Expression
  ): ExportDeclaration;

  declare function updateExportDeclaration(
    node: ExportDeclaration,
    decorators: $ReadOnlyArray<Decorator> | void,
    modifiers: $ReadOnlyArray<Modifier> | void,
    exportClause: NamedExports | void,
    moduleSpecifier: Expression | void
  ): ExportDeclaration;

  declare function createNamedExports(
    elements: $ReadOnlyArray<ExportSpecifier>
  ): NamedExports;

  declare function updateNamedExports(
    node: NamedExports,
    elements: $ReadOnlyArray<ExportSpecifier>
  ): NamedExports;

  declare function createExportSpecifier(
    propertyName: string | Identifier | void,
    name: string | Identifier
  ): ExportSpecifier;

  declare function updateExportSpecifier(
    node: ExportSpecifier,
    propertyName: Identifier | void,
    name: Identifier
  ): ExportSpecifier;

  declare function createExternalModuleReference(
    expression: Expression
  ): ExternalModuleReference;

  declare function updateExternalModuleReference(
    node: ExternalModuleReference,
    expression: Expression
  ): ExternalModuleReference;

  declare function createJsxElement(
    openingElement: JsxOpeningElement,
    children: $ReadOnlyArray<JsxChild>,
    closingElement: JsxClosingElement
  ): JsxElement;

  declare function updateJsxElement(
    node: JsxElement,
    openingElement: JsxOpeningElement,
    children: $ReadOnlyArray<JsxChild>,
    closingElement: JsxClosingElement
  ): JsxElement;

  declare function createJsxSelfClosingElement(
    tagName: JsxTagNameExpression,
    typeArguments: $ReadOnlyArray<TypeNode> | void,
    attributes: JsxAttributes
  ): JsxSelfClosingElement;

  declare function updateJsxSelfClosingElement(
    node: JsxSelfClosingElement,
    tagName: JsxTagNameExpression,
    typeArguments: $ReadOnlyArray<TypeNode> | void,
    attributes: JsxAttributes
  ): JsxSelfClosingElement;

  declare function createJsxOpeningElement(
    tagName: JsxTagNameExpression,
    typeArguments: $ReadOnlyArray<TypeNode> | void,
    attributes: JsxAttributes
  ): JsxOpeningElement;

  declare function updateJsxOpeningElement(
    node: JsxOpeningElement,
    tagName: JsxTagNameExpression,
    typeArguments: $ReadOnlyArray<TypeNode> | void,
    attributes: JsxAttributes
  ): JsxOpeningElement;

  declare function createJsxClosingElement(
    tagName: JsxTagNameExpression
  ): JsxClosingElement;

  declare function updateJsxClosingElement(
    node: JsxClosingElement,
    tagName: JsxTagNameExpression
  ): JsxClosingElement;

  declare function createJsxFragment(
    openingFragment: JsxOpeningFragment,
    children: $ReadOnlyArray<JsxChild>,
    closingFragment: JsxClosingFragment
  ): JsxFragment;

  declare function updateJsxFragment(
    node: JsxFragment,
    openingFragment: JsxOpeningFragment,
    children: $ReadOnlyArray<JsxChild>,
    closingFragment: JsxClosingFragment
  ): JsxFragment;

  declare function createJsxAttribute(
    name: Identifier,
    initializer: StringLiteral | JsxExpression
  ): JsxAttribute;

  declare function updateJsxAttribute(
    node: JsxAttribute,
    name: Identifier,
    initializer: StringLiteral | JsxExpression
  ): JsxAttribute;

  declare function createJsxAttributes(
    properties: $ReadOnlyArray<JsxAttributeLike>
  ): JsxAttributes;

  declare function updateJsxAttributes(
    node: JsxAttributes,
    properties: $ReadOnlyArray<JsxAttributeLike>
  ): JsxAttributes;

  declare function createJsxSpreadAttribute(
    expression: Expression
  ): JsxSpreadAttribute;

  declare function updateJsxSpreadAttribute(
    node: JsxSpreadAttribute,
    expression: Expression
  ): JsxSpreadAttribute;

  declare function createJsxExpression(
    dotDotDotToken: DotDotDotToken | void,
    expression: Expression | void
  ): JsxExpression;

  declare function updateJsxExpression(
    node: JsxExpression,
    expression: Expression | void
  ): JsxExpression;

  declare function createCaseClause(
    expression: Expression,
    statements: $ReadOnlyArray<Statement>
  ): CaseClause;

  declare function updateCaseClause(
    node: CaseClause,
    expression: Expression,
    statements: $ReadOnlyArray<Statement>
  ): CaseClause;

  declare function createDefaultClause(
    statements: $ReadOnlyArray<Statement>
  ): DefaultClause;

  declare function updateDefaultClause(
    node: DefaultClause,
    statements: $ReadOnlyArray<Statement>
  ): DefaultClause;

  declare function createHeritageClause(
    token: $ElementType<HeritageClause, "token">,
    types: $ReadOnlyArray<ExpressionWithTypeArguments>
  ): HeritageClause;

  declare function updateHeritageClause(
    node: HeritageClause,
    types: $ReadOnlyArray<ExpressionWithTypeArguments>
  ): HeritageClause;

  declare function createCatchClause(
    variableDeclaration: string | VariableDeclaration | void,
    block: Block
  ): CatchClause;

  declare function updateCatchClause(
    node: CatchClause,
    variableDeclaration: VariableDeclaration | void,
    block: Block
  ): CatchClause;

  declare function createPropertyAssignment(
    name: string | PropertyName,
    initializer: Expression
  ): PropertyAssignment;

  declare function updatePropertyAssignment(
    node: PropertyAssignment,
    name: PropertyName,
    initializer: Expression
  ): PropertyAssignment;

  declare function createShorthandPropertyAssignment(
    name: string | Identifier,
    objectAssignmentInitializer?: Expression
  ): ShorthandPropertyAssignment;

  declare function updateShorthandPropertyAssignment(
    node: ShorthandPropertyAssignment,
    name: Identifier,
    objectAssignmentInitializer: Expression | void
  ): ShorthandPropertyAssignment;

  declare function createSpreadAssignment(
    expression: Expression
  ): SpreadAssignment;

  declare function updateSpreadAssignment(
    node: SpreadAssignment,
    expression: Expression
  ): SpreadAssignment;

  declare function createEnumMember(
    name: string | PropertyName,
    initializer?: Expression
  ): EnumMember;

  declare function updateEnumMember(
    node: EnumMember,
    name: PropertyName,
    initializer: Expression | void
  ): EnumMember;

  declare function updateSourceFileNode(
    node: SourceFile,
    statements: $ReadOnlyArray<Statement>,
    isDeclarationFile?: boolean,
    referencedFiles?: $ElementType<SourceFile, "referencedFiles">,
    typeReferences?: $ElementType<SourceFile, "typeReferenceDirectives">,
    hasNoDefaultLib?: boolean,
    libReferences?: $ElementType<SourceFile, "libReferenceDirectives">
  ): SourceFile;

  declare function getMutableClone<T: Node>(node: T): T;

  declare function createNotEmittedStatement(
    original: Node
  ): NotEmittedStatement;

  declare function createPartiallyEmittedExpression(
    expression: Expression,
    original?: Node
  ): PartiallyEmittedExpression;

  declare function updatePartiallyEmittedExpression(
    node: PartiallyEmittedExpression,
    expression: Expression
  ): PartiallyEmittedExpression;

  declare function createCommaList(
    elements: $ReadOnlyArray<Expression>
  ): CommaListExpression;

  declare function updateCommaList(
    node: CommaListExpression,
    elements: $ReadOnlyArray<Expression>
  ): CommaListExpression;

  declare function createBundle(
    sourceFiles: $ReadOnlyArray<SourceFile>,
    prepends?: $ReadOnlyArray<UnparsedSource | InputFiles>
  ): Bundle;

  declare function createUnparsedSourceFile(text: string): UnparsedSource;

  declare function createUnparsedSourceFile(
    inputFile: InputFiles,
    type: "js" | "dts"
  ): UnparsedSource;

  declare function createUnparsedSourceFile(
    text: string,
    mapPath: string | void,
    map: string | void
  ): UnparsedSource;

  declare function createInputFiles(
    javascriptText: string,
    declarationText: string
  ): InputFiles;

  declare function createInputFiles(
    readFileText: (path: string) => string | void,
    javascriptPath: string,
    javascriptMapPath: string | void,
    declarationPath: string,
    declarationMapPath: string | void
  ): InputFiles;

  declare function createInputFiles(
    javascriptText: string,
    declarationText: string,
    javascriptMapPath: string | void,
    javascriptMapText: string | void,
    declarationMapPath: string | void,
    declarationMapText: string | void
  ): InputFiles;

  declare function updateBundle(
    node: Bundle,
    sourceFiles: $ReadOnlyArray<SourceFile>,
    prepends?: $ReadOnlyArray<UnparsedSource>
  ): Bundle;

  declare function createImmediatelyInvokedFunctionExpression(
    statements: $ReadOnlyArray<Statement>
  ): CallExpression;

  declare function createImmediatelyInvokedFunctionExpression(
    statements: $ReadOnlyArray<Statement>,
    param: ParameterDeclaration,
    paramValue: Expression
  ): CallExpression;

  declare function createImmediatelyInvokedArrowFunction(
    statements: $ReadOnlyArray<Statement>
  ): CallExpression;

  declare function createImmediatelyInvokedArrowFunction(
    statements: $ReadOnlyArray<Statement>,
    param: ParameterDeclaration,
    paramValue: Expression
  ): CallExpression;

  declare function createComma(left: Expression, right: Expression): Expression;

  declare function createLessThan(
    left: Expression,
    right: Expression
  ): Expression;

  declare function createAssignment(
    left: ObjectLiteralExpression | ArrayLiteralExpression,
    right: Expression
  ): DestructuringAssignment;

  declare function createAssignment(
    left: Expression,
    right: Expression
  ): BinaryExpression;

  declare function createStrictEquality(
    left: Expression,
    right: Expression
  ): BinaryExpression;

  declare function createStrictInequality(
    left: Expression,
    right: Expression
  ): BinaryExpression;

  declare function createAdd(
    left: Expression,
    right: Expression
  ): BinaryExpression;

  declare function createSubtract(
    left: Expression,
    right: Expression
  ): BinaryExpression;

  declare function createPostfixIncrement(
    operand: Expression
  ): PostfixUnaryExpression;

  declare function createLogicalAnd(
    left: Expression,
    right: Expression
  ): BinaryExpression;

  declare function createLogicalOr(
    left: Expression,
    right: Expression
  ): BinaryExpression;

  declare function createLogicalNot(operand: Expression): PrefixUnaryExpression;

  declare function createVoidZero(): VoidExpression;

  declare function createExportDefault(
    expression: Expression
  ): ExportAssignment;

  declare function createExternalModuleExport(
    exportName: Identifier
  ): ExportDeclaration;

  declare function disposeEmitNodes(sourceFile: SourceFile): void;

  declare function setTextRange<T: TextRange>(
    range: T,
    location: TextRange | void
  ): T;

  declare function setEmitFlags<T: Node>(node: T, emitFlags: EmitFlags): T;

  declare function getSourceMapRange(node: Node): SourceMapRange;

  declare function setSourceMapRange<T: Node>(
    node: T,
    range: SourceMapRange | void
  ): T;

  declare function createSourceMapSource(
    fileName: string,
    text: string,
    skipTrivia?: (pos: number) => number
  ): SourceMapSource;

  declare function getTokenSourceMapRange(
    node: Node,
    token: SyntaxKind
  ): SourceMapRange | void;

  declare function setTokenSourceMapRange<T: Node>(
    node: T,
    token: SyntaxKind,
    range: SourceMapRange | void
  ): T;

  declare function getCommentRange(node: Node): TextRange;

  declare function setCommentRange<T: Node>(node: T, range: TextRange): T;

  declare function getSyntheticLeadingComments(
    node: Node
  ): SynthesizedComment[] | void;

  declare function setSyntheticLeadingComments<T: Node>(
    node: T,
    comments: SynthesizedComment[] | void
  ): T;

  declare function addSyntheticLeadingComment<T: Node>(
    node: T,
    kind:
      | SyntaxKind.SingleLineCommentTrivia
      | SyntaxKind.MultiLineCommentTrivia,
    text: string,
    hasTrailingNewLine?: boolean
  ): T;

  declare function getSyntheticTrailingComments(
    node: Node
  ): SynthesizedComment[] | void;

  declare function setSyntheticTrailingComments<T: Node>(
    node: T,
    comments: SynthesizedComment[] | void
  ): T;

  declare function addSyntheticTrailingComment<T: Node>(
    node: T,
    kind:
      | SyntaxKind.SingleLineCommentTrivia
      | SyntaxKind.MultiLineCommentTrivia,
    text: string,
    hasTrailingNewLine?: boolean
  ): T;

  declare function moveSyntheticComments<T: Node>(node: T, original: Node): T;

  declare function getConstantValue(
    node: PropertyAccessExpression | ElementAccessExpression
  ): string | number | void;

  declare function setConstantValue(
    node: PropertyAccessExpression | ElementAccessExpression,
    value: string | number
  ): PropertyAccessExpression | ElementAccessExpression;

  declare function addEmitHelper<T: Node>(node: T, helper: EmitHelper): T;

  declare function addEmitHelpers<T: Node>(
    node: T,
    helpers: EmitHelper[] | void
  ): T;

  declare function removeEmitHelper(node: Node, helper: EmitHelper): boolean;

  declare function getEmitHelpers(node: Node): EmitHelper[] | void;

  declare function moveEmitHelpers(
    source: Node,
    target: Node,
    predicate: (helper: EmitHelper) => boolean
  ): void;

  declare function setOriginalNode<T: Node>(node: T, original: Node | void): T;

  declare function visitNode<T: Node>(
    node: T | void,
    visitor: Visitor | void,
    test?: (node: Node) => boolean,
    lift?: (node: NodeArray<Node>) => T
  ): T;

  declare function visitNode<T: Node>(
    node: T | void,
    visitor: Visitor | void,
    test?: (node: Node) => boolean,
    lift?: (node: NodeArray<Node>) => T
  ): T | void;

  declare function visitNodes<T: Node>(
    nodes: NodeArray<T> | void,
    visitor: Visitor,
    test?: (node: Node) => boolean,
    start?: number,
    count?: number
  ): NodeArray<T>;

  declare function visitNodes<T: Node>(
    nodes: NodeArray<T> | void,
    visitor: Visitor,
    test?: (node: Node) => boolean,
    start?: number,
    count?: number
  ): NodeArray<T> | void;

  declare function visitLexicalEnvironment(
    statements: NodeArray<Statement>,
    visitor: Visitor,
    context: TransformationContext,
    start?: number,
    ensureUseStrict?: boolean
  ): NodeArray<Statement>;

  declare function visitParameterList(
    nodes: NodeArray<ParameterDeclaration> | void,
    visitor: Visitor,
    context: TransformationContext,
    nodesVisitor?: typeof visitNodes
  ): NodeArray<ParameterDeclaration>;

  declare function visitFunctionBody(
    node: FunctionBody,
    visitor: Visitor,
    context: TransformationContext
  ): FunctionBody;

  declare function visitFunctionBody(
    node: FunctionBody | void,
    visitor: Visitor,
    context: TransformationContext
  ): FunctionBody | void;

  declare function visitFunctionBody(
    node: ConciseBody,
    visitor: Visitor,
    context: TransformationContext
  ): ConciseBody;

  declare function visitEachChild<T: Node>(
    node: T,
    visitor: Visitor,
    context: TransformationContext
  ): T;

  declare function visitEachChild<T: Node>(
    node: T | void,
    visitor: Visitor,
    context: TransformationContext,
    nodesVisitor?: typeof visitNodes,
    tokenVisitor?: Visitor
  ): T | void;

  declare function createPrinter(
    printerOptions?: PrinterOptions,
    handlers?: PrintHandlers
  ): Printer;

  declare function findConfigFile(
    searchPath: string,
    fileExists: (fileName: string) => boolean,
    configName?: string
  ): string | void;

  declare function resolveTripleslashReference(
    moduleName: string,
    containingFile: string
  ): string;

  declare function createCompilerHost(
    options: CompilerOptions,
    setParentNodes?: boolean
  ): CompilerHost;

  declare function getPreEmitDiagnostics(
    program: Program,
    sourceFile?: SourceFile,
    cancellationToken?: CancellationToken
  ): $ReadOnlyArray<Diagnostic>;

  declare type FormatDiagnosticsHost = {
    getCurrentDirectory(): string,
    getCanonicalFileName(fileName: string): string,
    getNewLine(): string
  };

  declare function formatDiagnostics(
    diagnostics: $ReadOnlyArray<Diagnostic>,
    host: FormatDiagnosticsHost
  ): string;

  declare function formatDiagnostic(
    diagnostic: Diagnostic,
    host: FormatDiagnosticsHost
  ): string;

  declare function formatDiagnosticsWithColorAndContext(
    diagnostics: $ReadOnlyArray<Diagnostic>,
    host: FormatDiagnosticsHost
  ): string;

  declare function flattenDiagnosticMessageText(
    messageText: string | DiagnosticMessageChain | void,
    newLine: string
  ): string;

  declare function getConfigFileParsingDiagnostics(
    configFileParseResult: ParsedCommandLine
  ): $ReadOnlyArray<Diagnostic>;

  declare function createProgram(
    createProgramOptions: CreateProgramOptions
  ): Program;

  declare function createProgram(
    rootNames: $ReadOnlyArray<string>,
    options: CompilerOptions,
    host?: CompilerHost,
    oldProgram?: Program,
    configFileParsingDiagnostics?: $ReadOnlyArray<Diagnostic>
  ): Program;

  declare type ResolveProjectReferencePathHost = {
    fileExists(fileName: string): boolean
  };

  declare function resolveProjectReferencePath(
    ref: ProjectReference
  ): ResolvedConfigFileName;

  declare function resolveProjectReferencePath(
    host: ResolveProjectReferencePathHost,
    ref: ProjectReference
  ): ResolvedConfigFileName;

  declare type EmitOutput = {
    outputFiles: OutputFile[],
    emitSkipped: boolean
  };

  declare type OutputFile = {
    name: string,
    writeByteOrderMark: boolean,
    text: string
  };

  declare type AffectedFileResult<T> = {
    result: T,
    affected: SourceFile | Program
  } | void;
  declare type BuilderProgramHost = {
    useCaseSensitiveFileNames(): boolean,
    createHash?: (data: string) => string,
    writeFile?: WriteFileCallback
  };

  declare type BuilderProgram = {
    getProgram(): Program,
    getCompilerOptions(): CompilerOptions,
    getSourceFile(fileName: string): SourceFile | void,
    getSourceFiles(): $ReadOnlyArray<SourceFile>,
    getOptionsDiagnostics(
      cancellationToken?: CancellationToken
    ): $ReadOnlyArray<Diagnostic>,
    getGlobalDiagnostics(
      cancellationToken?: CancellationToken
    ): $ReadOnlyArray<Diagnostic>,
    getConfigFileParsingDiagnostics(): $ReadOnlyArray<Diagnostic>,
    getSyntacticDiagnostics(
      sourceFile?: SourceFile,
      cancellationToken?: CancellationToken
    ): $ReadOnlyArray<Diagnostic>,
    getDeclarationDiagnostics(
      sourceFile?: SourceFile,
      cancellationToken?: CancellationToken
    ): $ReadOnlyArray<DiagnosticWithLocation>,
    getAllDependencies(sourceFile: SourceFile): $ReadOnlyArray<string>,
    getSemanticDiagnostics(
      sourceFile?: SourceFile,
      cancellationToken?: CancellationToken
    ): $ReadOnlyArray<Diagnostic>,
    emit(
      targetSourceFile?: SourceFile,
      writeFile?: WriteFileCallback,
      cancellationToken?: CancellationToken,
      emitOnlyDtsFiles?: boolean,
      customTransformers?: CustomTransformers
    ): EmitResult,
    getCurrentDirectory(): string
  };

  declare type SemanticDiagnosticsBuilderProgram = {
    ...$Exact<BuilderProgram>,

    getSemanticDiagnosticsOfNextAffectedFile(
      cancellationToken?: CancellationToken,
      ignoreSourceFile?: (sourceFile: SourceFile) => boolean
    ): AffectedFileResult<$ReadOnlyArray<Diagnostic>>
  };

  declare type EmitAndSemanticDiagnosticsBuilderProgram = {
    ...$Exact<BuilderProgram>,

    emitNextAffectedFile(
      writeFile?: WriteFileCallback,
      cancellationToken?: CancellationToken,
      emitOnlyDtsFiles?: boolean,
      customTransformers?: CustomTransformers
    ): AffectedFileResult<EmitResult>
  };

  declare function createSemanticDiagnosticsBuilderProgram(
    newProgram: Program,
    host: BuilderProgramHost,
    oldProgram?: SemanticDiagnosticsBuilderProgram,
    configFileParsingDiagnostics?: $ReadOnlyArray<Diagnostic>
  ): SemanticDiagnosticsBuilderProgram;

  declare function createSemanticDiagnosticsBuilderProgram(
    rootNames: $ReadOnlyArray<string> | void,
    options: CompilerOptions | void,
    host?: CompilerHost,
    oldProgram?: SemanticDiagnosticsBuilderProgram,
    configFileParsingDiagnostics?: $ReadOnlyArray<Diagnostic>,
    projectReferences?: $ReadOnlyArray<ProjectReference>
  ): SemanticDiagnosticsBuilderProgram;

  declare function createEmitAndSemanticDiagnosticsBuilderProgram(
    newProgram: Program,
    host: BuilderProgramHost,
    oldProgram?: EmitAndSemanticDiagnosticsBuilderProgram,
    configFileParsingDiagnostics?: $ReadOnlyArray<Diagnostic>
  ): EmitAndSemanticDiagnosticsBuilderProgram;

  declare function createEmitAndSemanticDiagnosticsBuilderProgram(
    rootNames: $ReadOnlyArray<string> | void,
    options: CompilerOptions | void,
    host?: CompilerHost,
    oldProgram?: EmitAndSemanticDiagnosticsBuilderProgram,
    configFileParsingDiagnostics?: $ReadOnlyArray<Diagnostic>,
    projectReferences?: $ReadOnlyArray<ProjectReference>
  ): EmitAndSemanticDiagnosticsBuilderProgram;

  declare function createAbstractBuilder(
    newProgram: Program,
    host: BuilderProgramHost,
    oldProgram?: BuilderProgram,
    configFileParsingDiagnostics?: $ReadOnlyArray<Diagnostic>
  ): BuilderProgram;

  declare function createAbstractBuilder(
    rootNames: $ReadOnlyArray<string> | void,
    options: CompilerOptions | void,
    host?: CompilerHost,
    oldProgram?: BuilderProgram,
    configFileParsingDiagnostics?: $ReadOnlyArray<Diagnostic>,
    projectReferences?: $ReadOnlyArray<ProjectReference>
  ): BuilderProgram;

  declare type WatchStatusReporter = (
    diagnostic: Diagnostic,
    newLine: string,
    options: CompilerOptions
  ) => void;
  declare type CreateProgram<T: BuilderProgram> = (
    rootNames: $ReadOnlyArray<string> | void,
    options: CompilerOptions | void,
    host?: CompilerHost,
    oldProgram?: T,
    configFileParsingDiagnostics?: $ReadOnlyArray<Diagnostic>,
    projectReferences?: $ReadOnlyArray<ProjectReference> | void
  ) => T;
  declare type WatchHost = {
    onWatchStatusChange(
      diagnostic: Diagnostic,
      newLine: string,
      options: CompilerOptions
    ): void,
    watchFile(
      path: string,
      callback: FileWatcherCallback,
      pollingInterval?: number
    ): FileWatcher,
    watchDirectory(
      path: string,
      callback: DirectoryWatcherCallback,
      recursive?: boolean
    ): FileWatcher,
    setTimeout(
      callback: (...args: any[]) => void,
      ms: number,
      ...args: any[]
    ): any,
    clearTimeout(timeoutId: any): void
  };

  declare type ProgramHost<T: BuilderProgram> = {
    createProgram: CreateProgram<T>,
    useCaseSensitiveFileNames(): boolean,
    getNewLine(): string,
    getCurrentDirectory(): string,
    getDefaultLibFileName(options: CompilerOptions): string,
    getDefaultLibLocation(): string,
    createHash(data: string): string,
    fileExists(path: string): boolean,
    readFile(path: string, encoding?: string): string | void,
    directoryExists(path: string): boolean,
    getDirectories(path: string): string[],
    readDirectory(
      path: string,
      extensions?: $ReadOnlyArray<string>,
      exclude?: $ReadOnlyArray<string>,
      include?: $ReadOnlyArray<string>,
      depth?: number
    ): string[],
    realpath(path: string): string,
    trace(s: string): void,
    getEnvironmentVariable(name: string): string | void,
    resolveModuleNames(
      moduleNames: string[],
      containingFile: string,
      reusedNames?: string[],
      redirectedReference?: ResolvedProjectReference
    ): (ResolvedModule | void)[],
    resolveTypeReferenceDirectives(
      typeReferenceDirectiveNames: string[],
      containingFile: string,
      redirectedReference?: ResolvedProjectReference
    ): (ResolvedTypeReferenceDirective | void)[]
  };

  declare type WatchCompilerHost<T: BuilderProgram> = {
    ...$Exact<ProgramHost<T>>,
    ...$Exact<WatchHost>,

    afterProgramCreate(program: T): void
  };

  declare type WatchCompilerHostOfFilesAndCompilerOptions<T: BuilderProgram> = {
    ...$Exact<WatchCompilerHost<T>>,

    rootFiles: string[],
    options: CompilerOptions,
    projectReferences?: $ReadOnlyArray<ProjectReference>
  };

  declare type WatchCompilerHostOfConfigFile<T: BuilderProgram> = {
    ...$Exact<WatchCompilerHost<T>>,
    ...$Exact<ConfigFileDiagnosticsReporter>,

    configFileName: string,
    optionsToExtend?: CompilerOptions,
    readDirectory(
      path: string,
      extensions?: $ReadOnlyArray<string>,
      exclude?: $ReadOnlyArray<string>,
      include?: $ReadOnlyArray<string>,
      depth?: number
    ): string[]
  };

  declare type Watch<T> = {
    getProgram(): T
  };

  declare type WatchOfConfigFile<T> = { ...$Exact<Watch<T>> };

  declare type WatchOfFilesAndCompilerOptions<T> = {
    ...$Exact<Watch<T>>,

    updateRootFileNames(fileNames: string[]): void
  };

  declare function createWatchCompilerHost<T: BuilderProgram>(
    configFileName: string,
    optionsToExtend: CompilerOptions | void,
    system: System,
    createProgram?: CreateProgram<T>,
    reportDiagnostic?: DiagnosticReporter,
    reportWatchStatus?: WatchStatusReporter
  ): WatchCompilerHostOfConfigFile<T>;

  declare function createWatchCompilerHost<T: BuilderProgram>(
    rootFiles: string[],
    options: CompilerOptions,
    system: System,
    createProgram?: CreateProgram<T>,
    reportDiagnostic?: DiagnosticReporter,
    reportWatchStatus?: WatchStatusReporter,
    projectReferences?: $ReadOnlyArray<ProjectReference>
  ): WatchCompilerHostOfFilesAndCompilerOptions<T>;

  declare function createWatchProgram<T: BuilderProgram>(
    host: WatchCompilerHostOfFilesAndCompilerOptions<T>
  ): WatchOfFilesAndCompilerOptions<T>;

  declare function createWatchProgram<T: BuilderProgram>(
    host: WatchCompilerHostOfConfigFile<T>
  ): WatchOfConfigFile<T>;

  declare type SourceFileLike = {
    getLineAndCharacterOfPosition(pos: number): LineAndCharacter
  };

  declare type IScriptSnapshot = {
    getText(start: number, end: number): string,
    getLength(): number,
    getChangeRange(oldSnapshot: IScriptSnapshot): TextChangeRange | void,
    dispose(): void
  };

  declare var npm$namespace$ScriptSnapshot: {
    fromString: typeof ScriptSnapshot$fromString
  };
  declare function ScriptSnapshot$fromString(text: string): IScriptSnapshot;

  declare type PreProcessedFileInfo = {
    referencedFiles: FileReference[],
    typeReferenceDirectives: FileReference[],
    libReferenceDirectives: FileReference[],
    importedFiles: FileReference[],
    ambientExternalModules?: string[],
    isLibFile: boolean
  };

  declare type HostCancellationToken = {
    isCancellationRequested(): boolean
  };

  declare type InstallPackageOptions = {
    fileName: Path,
    packageName: string
  };

  declare type LanguageServiceHost = {
    ...$Exact<GetEffectiveTypeRootsHost>,

    getCompilationSettings(): CompilerOptions,
    getNewLine(): string,
    getProjectVersion(): string,
    getScriptFileNames(): string[],
    getScriptKind(fileName: string): ScriptKind,
    getScriptVersion(fileName: string): string,
    getScriptSnapshot(fileName: string): IScriptSnapshot | void,
    getProjectReferences(): $ReadOnlyArray<ProjectReference> | void,
    getLocalizedDiagnosticMessages(): any,
    getCancellationToken(): HostCancellationToken,
    getCurrentDirectory(): string,
    getDefaultLibFileName(options: CompilerOptions): string,
    log(s: string): void,
    trace(s: string): void,
    error(s: string): void,
    useCaseSensitiveFileNames(): boolean,
    readDirectory(
      path: string,
      extensions?: $ReadOnlyArray<string>,
      exclude?: $ReadOnlyArray<string>,
      include?: $ReadOnlyArray<string>,
      depth?: number
    ): string[],
    readFile(path: string, encoding?: string): string | void,
    realpath(path: string): string,
    fileExists(path: string): boolean,
    getTypeRootsVersion(): number,
    resolveModuleNames(
      moduleNames: string[],
      containingFile: string,
      reusedNames?: string[],
      redirectedReference?: ResolvedProjectReference
    ): (ResolvedModule | void)[],
    getResolvedModuleWithFailedLookupLocationsFromCache(
      modulename: string,
      containingFile: string
    ): ResolvedModuleWithFailedLookupLocations | void,
    resolveTypeReferenceDirectives(
      typeDirectiveNames: string[],
      containingFile: string,
      redirectedReference?: ResolvedProjectReference
    ): (ResolvedTypeReferenceDirective | void)[],
    getDirectories(directoryName: string): string[],
    getCustomTransformers(): CustomTransformers | void,
    isKnownTypesPackageName(name: string): boolean,
    installPackage(
      options: InstallPackageOptions
    ): Promise<ApplyCodeActionCommandResult>,
    writeFile(fileName: string, content: string): void
  };

  declare type WithMetadata<T> = T & {
    metadata?: mixed
  };
  declare type LanguageService = {
    cleanupSemanticCache(): void,
    getSyntacticDiagnostics(fileName: string): DiagnosticWithLocation[],
    getSemanticDiagnostics(fileName: string): Diagnostic[],
    getSuggestionDiagnostics(fileName: string): DiagnosticWithLocation[],
    getCompilerOptionsDiagnostics(): Diagnostic[],
    getSyntacticClassifications(
      fileName: string,
      span: TextSpan
    ): ClassifiedSpan[],
    getSemanticClassifications(
      fileName: string,
      span: TextSpan
    ): ClassifiedSpan[],
    getEncodedSyntacticClassifications(
      fileName: string,
      span: TextSpan
    ): Classifications,
    getEncodedSemanticClassifications(
      fileName: string,
      span: TextSpan
    ): Classifications,
    getCompletionsAtPosition(
      fileName: string,
      position: number,
      options: GetCompletionsAtPositionOptions | void
    ): WithMetadata<CompletionInfo> | void,
    getCompletionEntryDetails(
      fileName: string,
      position: number,
      name: string,
      formatOptions: FormatCodeOptions | FormatCodeSettings | void,
      source: string | void,
      preferences: UserPreferences | void
    ): CompletionEntryDetails | void,
    getCompletionEntrySymbol(
      fileName: string,
      position: number,
      name: string,
      source: string | void
    ): Symbol | void,
    getQuickInfoAtPosition(
      fileName: string,
      position: number
    ): QuickInfo | void,
    getNameOrDottedNameSpan(
      fileName: string,
      startPos: number,
      endPos: number
    ): TextSpan | void,
    getBreakpointStatementAtPosition(
      fileName: string,
      position: number
    ): TextSpan | void,
    getSignatureHelpItems(
      fileName: string,
      position: number,
      options: SignatureHelpItemsOptions | void
    ): SignatureHelpItems | void,
    getRenameInfo(
      fileName: string,
      position: number,
      options?: RenameInfoOptions
    ): RenameInfo,
    findRenameLocations(
      fileName: string,
      position: number,
      findInStrings: boolean,
      findInComments: boolean,
      providePrefixAndSuffixTextForRename?: boolean
    ): $ReadOnlyArray<RenameLocation> | void,
    getDefinitionAtPosition(
      fileName: string,
      position: number
    ): $ReadOnlyArray<DefinitionInfo> | void,
    getDefinitionAndBoundSpan(
      fileName: string,
      position: number
    ): DefinitionInfoAndBoundSpan | void,
    getTypeDefinitionAtPosition(
      fileName: string,
      position: number
    ): $ReadOnlyArray<DefinitionInfo> | void,
    getImplementationAtPosition(
      fileName: string,
      position: number
    ): $ReadOnlyArray<ImplementationLocation> | void,
    getReferencesAtPosition(
      fileName: string,
      position: number
    ): ReferenceEntry[] | void,
    findReferences(
      fileName: string,
      position: number
    ): ReferencedSymbol[] | void,
    getDocumentHighlights(
      fileName: string,
      position: number,
      filesToSearch: string[]
    ): DocumentHighlights[] | void,
    getOccurrencesAtPosition(
      fileName: string,
      position: number
    ): $ReadOnlyArray<ReferenceEntry> | void,
    getNavigateToItems(
      searchValue: string,
      maxResultCount?: number,
      fileName?: string,
      excludeDtsFiles?: boolean
    ): NavigateToItem[],
    getNavigationBarItems(fileName: string): NavigationBarItem[],
    getNavigationTree(fileName: string): NavigationTree,
    getOutliningSpans(fileName: string): OutliningSpan[],
    getTodoComments(
      fileName: string,
      descriptors: TodoCommentDescriptor[]
    ): TodoComment[],
    getBraceMatchingAtPosition(fileName: string, position: number): TextSpan[],
    getIndentationAtPosition(
      fileName: string,
      position: number,
      options: EditorOptions | EditorSettings
    ): number,
    getFormattingEditsForRange(
      fileName: string,
      start: number,
      end: number,
      options: FormatCodeOptions | FormatCodeSettings
    ): TextChange[],
    getFormattingEditsForDocument(
      fileName: string,
      options: FormatCodeOptions | FormatCodeSettings
    ): TextChange[],
    getFormattingEditsAfterKeystroke(
      fileName: string,
      position: number,
      key: string,
      options: FormatCodeOptions | FormatCodeSettings
    ): TextChange[],
    getDocCommentTemplateAtPosition(
      fileName: string,
      position: number
    ): TextInsertion | void,
    isValidBraceCompletionAtPosition(
      fileName: string,
      position: number,
      openingBrace: number
    ): boolean,
    getJsxClosingTagAtPosition(
      fileName: string,
      position: number
    ): JsxClosingTagInfo | void,
    getSpanOfEnclosingComment(
      fileName: string,
      position: number,
      onlyMultiLine: boolean
    ): TextSpan | void,
    toLineColumnOffset(fileName: string, position: number): LineAndCharacter,
    getCodeFixesAtPosition(
      fileName: string,
      start: number,
      end: number,
      errorCodes: $ReadOnlyArray<number>,
      formatOptions: FormatCodeSettings,
      preferences: UserPreferences
    ): $ReadOnlyArray<CodeFixAction>,
    getCombinedCodeFix(
      scope: CombinedCodeFixScope,
      fixId: {},
      formatOptions: FormatCodeSettings,
      preferences: UserPreferences
    ): CombinedCodeActions,
    applyCodeActionCommand(
      action: CodeActionCommand,
      formatSettings?: FormatCodeSettings
    ): Promise<ApplyCodeActionCommandResult>,
    applyCodeActionCommand(
      action: CodeActionCommand[],
      formatSettings?: FormatCodeSettings
    ): Promise<ApplyCodeActionCommandResult[]>,
    applyCodeActionCommand(
      action: CodeActionCommand | CodeActionCommand[],
      formatSettings?: FormatCodeSettings
    ): Promise<ApplyCodeActionCommandResult | ApplyCodeActionCommandResult[]>,
    applyCodeActionCommand(
      fileName: string,
      action: CodeActionCommand
    ): Promise<ApplyCodeActionCommandResult>,
    applyCodeActionCommand(
      fileName: string,
      action: CodeActionCommand[]
    ): Promise<ApplyCodeActionCommandResult[]>,
    applyCodeActionCommand(
      fileName: string,
      action: CodeActionCommand | CodeActionCommand[]
    ): Promise<ApplyCodeActionCommandResult | ApplyCodeActionCommandResult[]>,
    getApplicableRefactors(
      fileName: string,
      positionOrRange: number | TextRange,
      preferences: UserPreferences | void
    ): ApplicableRefactorInfo[],
    getEditsForRefactor(
      fileName: string,
      formatOptions: FormatCodeSettings,
      positionOrRange: number | TextRange,
      refactorName: string,
      actionName: string,
      preferences: UserPreferences | void
    ): RefactorEditInfo | void,
    organizeImports(
      scope: OrganizeImportsScope,
      formatOptions: FormatCodeSettings,
      preferences: UserPreferences | void
    ): $ReadOnlyArray<FileTextChanges>,
    getEditsForFileRename(
      oldFilePath: string,
      newFilePath: string,
      formatOptions: FormatCodeSettings,
      preferences: UserPreferences | void
    ): $ReadOnlyArray<FileTextChanges>,
    getEmitOutput(fileName: string, emitOnlyDtsFiles?: boolean): EmitOutput,
    getProgram(): Program | void,
    dispose(): void
  };

  declare type JsxClosingTagInfo = {
    newText: string
  };

  declare type CombinedCodeFixScope = {
    type: "file",
    fileName: string
  };

  declare type OrganizeImportsScope = CombinedCodeFixScope;
  declare type CompletionsTriggerCharacter =
    | "."
    | '"'
    | "'"
    | "`"
    | "/"
    | "@"
    | "<";
  declare type GetCompletionsAtPositionOptions = {
    ...$Exact<UserPreferences>,

    triggerCharacter?: CompletionsTriggerCharacter,
    includeExternalModuleExports?: boolean,
    includeInsertTextCompletions?: boolean
  };

  declare type SignatureHelpTriggerCharacter = "," | "(" | "<";
  declare type SignatureHelpRetriggerCharacter =
    | SignatureHelpTriggerCharacter
    | ")";
  declare type SignatureHelpItemsOptions = {
    triggerReason?: SignatureHelpTriggerReason
  };

  declare type SignatureHelpTriggerReason =
    | SignatureHelpInvokedReason
    | SignatureHelpCharacterTypedReason
    | SignatureHelpRetriggeredReason;
  declare type SignatureHelpInvokedReason = {
    kind: "invoked",
    triggerCharacter?: void
  };

  declare type SignatureHelpCharacterTypedReason = {
    kind: "characterTyped",
    triggerCharacter: SignatureHelpTriggerCharacter
  };

  declare type SignatureHelpRetriggeredReason = {
    kind: "retrigger",
    triggerCharacter?: SignatureHelpRetriggerCharacter
  };

  declare type ApplyCodeActionCommandResult = {
    successMessage: string
  };

  declare type Classifications = {
    spans: number[],
    endOfLineState: EndOfLineState
  };

  declare type ClassifiedSpan = {
    textSpan: TextSpan,
    classificationType: ClassificationTypeNames
  };

  declare type NavigationBarItem = {
    text: string,
    kind: ScriptElementKind,
    kindModifiers: string,
    spans: TextSpan[],
    childItems: NavigationBarItem[],
    indent: number,
    bolded: boolean,
    grayed: boolean
  };

  declare type NavigationTree = {
    text: string,
    kind: ScriptElementKind,
    kindModifiers: string,
    spans: TextSpan[],
    nameSpan: TextSpan | void,
    childItems?: NavigationTree[]
  };

  declare type TodoCommentDescriptor = {
    text: string,
    priority: number
  };

  declare type TodoComment = {
    descriptor: TodoCommentDescriptor,
    message: string,
    position: number
  };

  declare type TextChange = {
    span: TextSpan,
    newText: string
  };

  declare type FileTextChanges = {
    fileName: string,
    textChanges: TextChange[],
    isNewFile?: boolean
  };

  declare type CodeAction = {
    description: string,
    changes: FileTextChanges[],
    commands?: CodeActionCommand[]
  };

  declare type CodeFixAction = {
    ...$Exact<CodeAction>,

    fixName: string,
    fixId?: {},
    fixAllDescription?: string
  };

  declare type CombinedCodeActions = {
    changes: $ReadOnlyArray<FileTextChanges>,
    commands?: $ReadOnlyArray<CodeActionCommand>
  };

  declare type CodeActionCommand = InstallPackageAction | GenerateTypesAction;
  declare type InstallPackageAction = {};

  declare type GenerateTypesAction = { ...$Exact<GenerateTypesOptions> };

  declare type GenerateTypesOptions = {
    file: string,
    fileToGenerateTypesFor: string,
    outputFileName: string
  };

  declare type ApplicableRefactorInfo = {
    name: string,
    description: string,
    inlineable?: boolean,
    actions: RefactorActionInfo[]
  };

  declare type RefactorActionInfo = {
    name: string,
    description: string
  };

  declare type RefactorEditInfo = {
    edits: FileTextChanges[],
    renameFilename?: string,
    renameLocation?: number,
    commands?: CodeActionCommand[]
  };

  declare type TextInsertion = {
    newText: string,
    caretOffset: number
  };

  declare type DocumentSpan = {
    textSpan: TextSpan,
    fileName: string,
    originalTextSpan?: TextSpan,
    originalFileName?: string
  };

  declare type RenameLocation = {
    ...$Exact<DocumentSpan>,

    prefixText?: string,
    suffixText?: string
  };

  declare type ReferenceEntry = {
    ...$Exact<DocumentSpan>,

    isWriteAccess: boolean,
    isDefinition: boolean,
    isInString?: true
  };

  declare type ImplementationLocation = {
    ...$Exact<DocumentSpan>,

    kind: ScriptElementKind,
    displayParts: SymbolDisplayPart[]
  };

  declare type DocumentHighlights = {
    fileName: string,
    highlightSpans: HighlightSpan[]
  };

  declare class HighlightSpanKind {
    static +none: Class<HighlightSpanKind__none> &
      HighlightSpanKind__none &
      "none"; // "none"
    static +definition: Class<HighlightSpanKind__definition> &
      HighlightSpanKind__definition &
      "definition"; // "definition"
    static +reference: Class<HighlightSpanKind__reference> &
      HighlightSpanKind__reference &
      "reference"; // "reference"
    static +writtenReference: Class<HighlightSpanKind__writtenReference> &
      HighlightSpanKind__writtenReference &
      "writtenReference"; // "writtenReference"
  }

  declare class HighlightSpanKind__none mixins HighlightSpanKind {}
  declare class HighlightSpanKind__definition mixins HighlightSpanKind {}
  declare class HighlightSpanKind__reference mixins HighlightSpanKind {}
  declare class HighlightSpanKind__writtenReference mixins HighlightSpanKind {}

  declare type HighlightSpan = {
    fileName?: string,
    isInString?: true,
    textSpan: TextSpan,
    kind: HighlightSpanKind
  };

  declare type NavigateToItem = {
    name: string,
    kind: ScriptElementKind,
    kindModifiers: string,
    matchKind: "exact" | "prefix" | "substring" | "camelCase",
    isCaseSensitive: boolean,
    fileName: string,
    textSpan: TextSpan,
    containerName: string,
    containerKind: ScriptElementKind
  };

  declare class IndentStyle {
    static +None: Class<IndentStyle__None> & IndentStyle__None & 0; // 0
    static +Block: Class<IndentStyle__Block> & IndentStyle__Block & 1; // 1
    static +Smart: Class<IndentStyle__Smart> & IndentStyle__Smart & 2; // 2
  }

  declare class IndentStyle__None mixins IndentStyle {}
  declare class IndentStyle__Block mixins IndentStyle {}
  declare class IndentStyle__Smart mixins IndentStyle {}

  declare type EditorOptions = {
    BaseIndentSize?: number,
    IndentSize: number,
    TabSize: number,
    NewLineCharacter: string,
    ConvertTabsToSpaces: boolean,
    IndentStyle: IndentStyle
  };

  declare type EditorSettings = {
    baseIndentSize?: number,
    indentSize?: number,
    tabSize?: number,
    newLineCharacter?: string,
    convertTabsToSpaces?: boolean,
    indentStyle?: IndentStyle
  };

  declare type FormatCodeOptions = {
    ...$Exact<EditorOptions>,

    InsertSpaceAfterCommaDelimiter: boolean,
    InsertSpaceAfterSemicolonInForStatements: boolean,
    InsertSpaceBeforeAndAfterBinaryOperators: boolean,
    InsertSpaceAfterConstructor?: boolean,
    InsertSpaceAfterKeywordsInControlFlowStatements: boolean,
    InsertSpaceAfterFunctionKeywordForAnonymousFunctions: boolean,
    InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: boolean,
    InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: boolean,
    InsertSpaceAfterOpeningAndBeforeClosingNonemptyBraces?: boolean,
    InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: boolean,
    InsertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces?: boolean,
    InsertSpaceAfterTypeAssertion?: boolean,
    InsertSpaceBeforeFunctionParenthesis?: boolean,
    PlaceOpenBraceOnNewLineForFunctions: boolean,
    PlaceOpenBraceOnNewLineForControlBlocks: boolean,
    insertSpaceBeforeTypeAnnotation?: boolean
  };

  declare type FormatCodeSettings = {
    ...$Exact<EditorSettings>,

    insertSpaceAfterCommaDelimiter?: boolean,
    insertSpaceAfterSemicolonInForStatements?: boolean,
    insertSpaceBeforeAndAfterBinaryOperators?: boolean,
    insertSpaceAfterConstructor?: boolean,
    insertSpaceAfterKeywordsInControlFlowStatements?: boolean,
    insertSpaceAfterFunctionKeywordForAnonymousFunctions?: boolean,
    insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis?: boolean,
    insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets?: boolean,
    insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces?: boolean,
    insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces?: boolean,
    insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces?: boolean,
    insertSpaceAfterTypeAssertion?: boolean,
    insertSpaceBeforeFunctionParenthesis?: boolean,
    placeOpenBraceOnNewLineForFunctions?: boolean,
    placeOpenBraceOnNewLineForControlBlocks?: boolean,
    insertSpaceBeforeTypeAnnotation?: boolean,
    indentMultiLineObjectLiteralBeginningOnBlankLine?: boolean
  };

  declare function getDefaultFormatCodeSettings(
    newLineCharacter?: string
  ): FormatCodeSettings;

  declare type DefinitionInfo = {
    ...$Exact<DocumentSpan>,

    kind: ScriptElementKind,
    name: string,
    containerKind: ScriptElementKind,
    containerName: string
  };

  declare type DefinitionInfoAndBoundSpan = {
    definitions?: $ReadOnlyArray<DefinitionInfo>,
    textSpan: TextSpan
  };

  declare type ReferencedSymbolDefinitionInfo = {
    ...$Exact<DefinitionInfo>,

    displayParts: SymbolDisplayPart[]
  };

  declare type ReferencedSymbol = {
    definition: ReferencedSymbolDefinitionInfo,
    references: ReferenceEntry[]
  };

  declare class SymbolDisplayPartKind {
    static +aliasName: Class<SymbolDisplayPartKind__aliasName> &
      SymbolDisplayPartKind__aliasName &
      0; // 0
    static +className: Class<SymbolDisplayPartKind__className> &
      SymbolDisplayPartKind__className &
      1; // 1
    static +enumName: Class<SymbolDisplayPartKind__enumName> &
      SymbolDisplayPartKind__enumName &
      2; // 2
    static +fieldName: Class<SymbolDisplayPartKind__fieldName> &
      SymbolDisplayPartKind__fieldName &
      3; // 3
    static +interfaceName: Class<SymbolDisplayPartKind__interfaceName> &
      SymbolDisplayPartKind__interfaceName &
      4; // 4
    static +keyword: Class<SymbolDisplayPartKind__keyword> &
      SymbolDisplayPartKind__keyword &
      5; // 5
    static +lineBreak: Class<SymbolDisplayPartKind__lineBreak> &
      SymbolDisplayPartKind__lineBreak &
      6; // 6
    static +numericLiteral: Class<SymbolDisplayPartKind__numericLiteral> &
      SymbolDisplayPartKind__numericLiteral &
      7; // 7
    static +stringLiteral: Class<SymbolDisplayPartKind__stringLiteral> &
      SymbolDisplayPartKind__stringLiteral &
      8; // 8
    static +localName: Class<SymbolDisplayPartKind__localName> &
      SymbolDisplayPartKind__localName &
      9; // 9
    static +methodName: Class<SymbolDisplayPartKind__methodName> &
      SymbolDisplayPartKind__methodName &
      10; // 10
    static +moduleName: Class<SymbolDisplayPartKind__moduleName> &
      SymbolDisplayPartKind__moduleName &
      11; // 11
    static +operator: Class<SymbolDisplayPartKind__operator> &
      SymbolDisplayPartKind__operator &
      12; // 12
    static +parameterName: Class<SymbolDisplayPartKind__parameterName> &
      SymbolDisplayPartKind__parameterName &
      13; // 13
    static +propertyName: Class<SymbolDisplayPartKind__propertyName> &
      SymbolDisplayPartKind__propertyName &
      14; // 14
    static +punctuation: Class<SymbolDisplayPartKind__punctuation> &
      SymbolDisplayPartKind__punctuation &
      15; // 15
    static +space: Class<SymbolDisplayPartKind__space> &
      SymbolDisplayPartKind__space &
      16; // 16
    static +text: Class<SymbolDisplayPartKind__text> &
      SymbolDisplayPartKind__text &
      17; // 17
    static +typeParameterName: Class<SymbolDisplayPartKind__typeParameterName> &
      SymbolDisplayPartKind__typeParameterName &
      18; // 18
    static +enumMemberName: Class<SymbolDisplayPartKind__enumMemberName> &
      SymbolDisplayPartKind__enumMemberName &
      19; // 19
    static +functionName: Class<SymbolDisplayPartKind__functionName> &
      SymbolDisplayPartKind__functionName &
      20; // 20
    static +regularExpressionLiteral: Class<SymbolDisplayPartKind__regularExpressionLiteral> &
      SymbolDisplayPartKind__regularExpressionLiteral &
      21; // 21
  }

  declare class SymbolDisplayPartKind__aliasName mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__className mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__enumName mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__fieldName mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__interfaceName
    mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__keyword mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__lineBreak mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__numericLiteral
    mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__stringLiteral
    mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__localName mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__methodName
    mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__moduleName
    mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__operator mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__parameterName
    mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__propertyName
    mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__punctuation
    mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__space mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__text mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__typeParameterName
    mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__enumMemberName
    mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__functionName
    mixins SymbolDisplayPartKind {}
  declare class SymbolDisplayPartKind__regularExpressionLiteral
    mixins SymbolDisplayPartKind {}

  declare type SymbolDisplayPart = {
    text: string,
    kind: string
  };

  declare type JSDocTagInfo = {
    name: string,
    text?: string
  };

  declare type QuickInfo = {
    kind: ScriptElementKind,
    kindModifiers: string,
    textSpan: TextSpan,
    displayParts?: SymbolDisplayPart[],
    documentation?: SymbolDisplayPart[],
    tags?: JSDocTagInfo[]
  };

  declare type RenameInfo = RenameInfoSuccess | RenameInfoFailure;
  declare type RenameInfoSuccess = {
    canRename: true,
    fileToRename?: string,
    displayName: string,
    fullDisplayName: string,
    kind: ScriptElementKind,
    kindModifiers: string,
    triggerSpan: TextSpan
  };

  declare type RenameInfoFailure = {
    canRename: false,
    localizedErrorMessage: string
  };

  declare type RenameInfoOptions = {
    allowRenameOfImportPath?: boolean
  };

  declare type SignatureHelpParameter = {
    name: string,
    documentation: SymbolDisplayPart[],
    displayParts: SymbolDisplayPart[],
    isOptional: boolean
  };

  declare type SignatureHelpItem = {
    isVariadic: boolean,
    prefixDisplayParts: SymbolDisplayPart[],
    suffixDisplayParts: SymbolDisplayPart[],
    separatorDisplayParts: SymbolDisplayPart[],
    parameters: SignatureHelpParameter[],
    documentation: SymbolDisplayPart[],
    tags: JSDocTagInfo[]
  };

  declare type SignatureHelpItems = {
    items: SignatureHelpItem[],
    applicableSpan: TextSpan,
    selectedItemIndex: number,
    argumentIndex: number,
    argumentCount: number
  };

  declare type CompletionInfo = {
    isGlobalCompletion: boolean,
    isMemberCompletion: boolean,
    isNewIdentifierLocation: boolean,
    entries: CompletionEntry[]
  };

  declare type CompletionEntry = {
    name: string,
    kind: ScriptElementKind,
    kindModifiers?: string,
    sortText: string,
    insertText?: string,
    replacementSpan?: TextSpan,
    hasAction?: true,
    source?: string,
    isRecommended?: true
  };

  declare type CompletionEntryDetails = {
    name: string,
    kind: ScriptElementKind,
    kindModifiers: string,
    displayParts: SymbolDisplayPart[],
    documentation?: SymbolDisplayPart[],
    tags?: JSDocTagInfo[],
    codeActions?: CodeAction[],
    source?: SymbolDisplayPart[]
  };

  declare type OutliningSpan = {
    textSpan: TextSpan,
    hintSpan: TextSpan,
    bannerText: string,
    autoCollapse: boolean,
    kind: OutliningSpanKind
  };

  declare class OutliningSpanKind {
    static +Comment: Class<OutliningSpanKind__Comment> &
      OutliningSpanKind__Comment &
      "comment"; // "comment"
    static +Region: Class<OutliningSpanKind__Region> &
      OutliningSpanKind__Region &
      "region"; // "region"
    static +Code: Class<OutliningSpanKind__Code> &
      OutliningSpanKind__Code &
      "code"; // "code"
    static +Imports: Class<OutliningSpanKind__Imports> &
      OutliningSpanKind__Imports &
      "imports"; // "imports"
  }

  declare class OutliningSpanKind__Comment mixins OutliningSpanKind {}
  declare class OutliningSpanKind__Region mixins OutliningSpanKind {}
  declare class OutliningSpanKind__Code mixins OutliningSpanKind {}
  declare class OutliningSpanKind__Imports mixins OutliningSpanKind {}

  declare class OutputFileType {
    static +JavaScript: Class<OutputFileType__JavaScript> &
      OutputFileType__JavaScript &
      0; // 0
    static +SourceMap: Class<OutputFileType__SourceMap> &
      OutputFileType__SourceMap &
      1; // 1
    static +Declaration: Class<OutputFileType__Declaration> &
      OutputFileType__Declaration &
      2; // 2
  }

  declare class OutputFileType__JavaScript mixins OutputFileType {}
  declare class OutputFileType__SourceMap mixins OutputFileType {}
  declare class OutputFileType__Declaration mixins OutputFileType {}

  declare class EndOfLineState {
    static +None: Class<EndOfLineState__None> & EndOfLineState__None & 0; // 0
    static +InMultiLineCommentTrivia: Class<EndOfLineState__InMultiLineCommentTrivia> &
      EndOfLineState__InMultiLineCommentTrivia &
      1; // 1
    static +InSingleQuoteStringLiteral: Class<EndOfLineState__InSingleQuoteStringLiteral> &
      EndOfLineState__InSingleQuoteStringLiteral &
      2; // 2
    static +InDoubleQuoteStringLiteral: Class<EndOfLineState__InDoubleQuoteStringLiteral> &
      EndOfLineState__InDoubleQuoteStringLiteral &
      3; // 3
    static +InTemplateHeadOrNoSubstitutionTemplate: Class<EndOfLineState__InTemplateHeadOrNoSubstitutionTemplate> &
      EndOfLineState__InTemplateHeadOrNoSubstitutionTemplate &
      4; // 4
    static +InTemplateMiddleOrTail: Class<EndOfLineState__InTemplateMiddleOrTail> &
      EndOfLineState__InTemplateMiddleOrTail &
      5; // 5
    static +InTemplateSubstitutionPosition: Class<EndOfLineState__InTemplateSubstitutionPosition> &
      EndOfLineState__InTemplateSubstitutionPosition &
      6; // 6
  }

  declare class EndOfLineState__None mixins EndOfLineState {}
  declare class EndOfLineState__InMultiLineCommentTrivia
    mixins EndOfLineState {}
  declare class EndOfLineState__InSingleQuoteStringLiteral
    mixins EndOfLineState {}
  declare class EndOfLineState__InDoubleQuoteStringLiteral
    mixins EndOfLineState {}
  declare class EndOfLineState__InTemplateHeadOrNoSubstitutionTemplate
    mixins EndOfLineState {}
  declare class EndOfLineState__InTemplateMiddleOrTail mixins EndOfLineState {}
  declare class EndOfLineState__InTemplateSubstitutionPosition
    mixins EndOfLineState {}

  declare class TokenClass {
    static +Punctuation: Class<TokenClass__Punctuation> &
      TokenClass__Punctuation &
      0; // 0
    static +Keyword: Class<TokenClass__Keyword> & TokenClass__Keyword & 1; // 1
    static +Operator: Class<TokenClass__Operator> & TokenClass__Operator & 2; // 2
    static +Comment: Class<TokenClass__Comment> & TokenClass__Comment & 3; // 3
    static +Whitespace: Class<TokenClass__Whitespace> &
      TokenClass__Whitespace &
      4; // 4
    static +Identifier: Class<TokenClass__Identifier> &
      TokenClass__Identifier &
      5; // 5
    static +NumberLiteral: Class<TokenClass__NumberLiteral> &
      TokenClass__NumberLiteral &
      6; // 6
    static +BigIntLiteral: Class<TokenClass__BigIntLiteral> &
      TokenClass__BigIntLiteral &
      7; // 7
    static +StringLiteral: Class<TokenClass__StringLiteral> &
      TokenClass__StringLiteral &
      8; // 8
    static +RegExpLiteral: Class<TokenClass__RegExpLiteral> &
      TokenClass__RegExpLiteral &
      9; // 9
  }

  declare class TokenClass__Punctuation mixins TokenClass {}
  declare class TokenClass__Keyword mixins TokenClass {}
  declare class TokenClass__Operator mixins TokenClass {}
  declare class TokenClass__Comment mixins TokenClass {}
  declare class TokenClass__Whitespace mixins TokenClass {}
  declare class TokenClass__Identifier mixins TokenClass {}
  declare class TokenClass__NumberLiteral mixins TokenClass {}
  declare class TokenClass__BigIntLiteral mixins TokenClass {}
  declare class TokenClass__StringLiteral mixins TokenClass {}
  declare class TokenClass__RegExpLiteral mixins TokenClass {}

  declare type ClassificationResult = {
    finalLexState: EndOfLineState,
    entries: ClassificationInfo[]
  };

  declare type ClassificationInfo = {
    length: number,
    classification: TokenClass
  };

  declare type Classifier = {
    getClassificationsForLine(
      text: string,
      lexState: EndOfLineState,
      syntacticClassifierAbsent: boolean
    ): ClassificationResult,
    getEncodedLexicalClassifications(
      text: string,
      endOfLineState: EndOfLineState,
      syntacticClassifierAbsent: boolean
    ): Classifications
  };

  declare class ScriptElementKind {
    static +unknown: Class<ScriptElementKind__unknown> &
      ScriptElementKind__unknown &
      ""; // ""
    static +warning: Class<ScriptElementKind__warning> &
      ScriptElementKind__warning &
      "warning"; // "warning"
    static +keyword: Class<ScriptElementKind__keyword> &
      ScriptElementKind__keyword &
      "keyword"; // "keyword"
    static +scriptElement: Class<ScriptElementKind__scriptElement> &
      ScriptElementKind__scriptElement &
      "script"; // "script"
    static +moduleElement: Class<ScriptElementKind__moduleElement> &
      ScriptElementKind__moduleElement &
      "module"; // "module"
    static +classElement: Class<ScriptElementKind__classElement> &
      ScriptElementKind__classElement &
      "class"; // "class"
    static +localClassElement: Class<ScriptElementKind__localClassElement> &
      ScriptElementKind__localClassElement &
      "local class"; // "local class"
    static +interfaceElement: Class<ScriptElementKind__interfaceElement> &
      ScriptElementKind__interfaceElement &
      "interface"; // "interface"
    static +typeElement: Class<ScriptElementKind__typeElement> &
      ScriptElementKind__typeElement &
      "type"; // "type"
    static +enumElement: Class<ScriptElementKind__enumElement> &
      ScriptElementKind__enumElement &
      "enum"; // "enum"
    static +enumMemberElement: Class<ScriptElementKind__enumMemberElement> &
      ScriptElementKind__enumMemberElement &
      "enum member"; // "enum member"
    static +variableElement: Class<ScriptElementKind__variableElement> &
      ScriptElementKind__variableElement &
      "var"; // "var"
    static +localVariableElement: Class<ScriptElementKind__localVariableElement> &
      ScriptElementKind__localVariableElement &
      "local var"; // "local var"
    static +functionElement: Class<ScriptElementKind__functionElement> &
      ScriptElementKind__functionElement &
      "function"; // "function"
    static +localFunctionElement: Class<ScriptElementKind__localFunctionElement> &
      ScriptElementKind__localFunctionElement &
      "local function"; // "local function"
    static +memberFunctionElement: Class<ScriptElementKind__memberFunctionElement> &
      ScriptElementKind__memberFunctionElement &
      "method"; // "method"
    static +memberGetAccessorElement: Class<ScriptElementKind__memberGetAccessorElement> &
      ScriptElementKind__memberGetAccessorElement &
      "getter"; // "getter"
    static +memberSetAccessorElement: Class<ScriptElementKind__memberSetAccessorElement> &
      ScriptElementKind__memberSetAccessorElement &
      "setter"; // "setter"
    static +memberVariableElement: Class<ScriptElementKind__memberVariableElement> &
      ScriptElementKind__memberVariableElement &
      "property"; // "property"
    static +constructorImplementationElement: Class<ScriptElementKind__constructorImplementationElement> &
      ScriptElementKind__constructorImplementationElement &
      "constructor"; // "constructor"
    static +callSignatureElement: Class<ScriptElementKind__callSignatureElement> &
      ScriptElementKind__callSignatureElement &
      "call"; // "call"
    static +indexSignatureElement: Class<ScriptElementKind__indexSignatureElement> &
      ScriptElementKind__indexSignatureElement &
      "index"; // "index"
    static +constructSignatureElement: Class<ScriptElementKind__constructSignatureElement> &
      ScriptElementKind__constructSignatureElement &
      "construct"; // "construct"
    static +parameterElement: Class<ScriptElementKind__parameterElement> &
      ScriptElementKind__parameterElement &
      "parameter"; // "parameter"
    static +typeParameterElement: Class<ScriptElementKind__typeParameterElement> &
      ScriptElementKind__typeParameterElement &
      "type parameter"; // "type parameter"
    static +primitiveType: Class<ScriptElementKind__primitiveType> &
      ScriptElementKind__primitiveType &
      "primitive type"; // "primitive type"
    static +label: Class<ScriptElementKind__label> &
      ScriptElementKind__label &
      "label"; // "label"
    static +alias: Class<ScriptElementKind__alias> &
      ScriptElementKind__alias &
      "alias"; // "alias"
    static +constElement: Class<ScriptElementKind__constElement> &
      ScriptElementKind__constElement &
      "const"; // "const"
    static +letElement: Class<ScriptElementKind__letElement> &
      ScriptElementKind__letElement &
      "let"; // "let"
    static +directory: Class<ScriptElementKind__directory> &
      ScriptElementKind__directory &
      "directory"; // "directory"
    static +externalModuleName: Class<ScriptElementKind__externalModuleName> &
      ScriptElementKind__externalModuleName &
      "external module name"; // "external module name"
    static +jsxAttribute: Class<ScriptElementKind__jsxAttribute> &
      ScriptElementKind__jsxAttribute &
      "JSX attribute"; // "JSX attribute"
    static +string: Class<ScriptElementKind__string> &
      ScriptElementKind__string &
      "string"; // "string"
  }

  declare class ScriptElementKind__unknown mixins ScriptElementKind {}
  declare class ScriptElementKind__warning mixins ScriptElementKind {}
  declare class ScriptElementKind__keyword mixins ScriptElementKind {}
  declare class ScriptElementKind__scriptElement mixins ScriptElementKind {}
  declare class ScriptElementKind__moduleElement mixins ScriptElementKind {}
  declare class ScriptElementKind__classElement mixins ScriptElementKind {}
  declare class ScriptElementKind__localClassElement mixins ScriptElementKind {}
  declare class ScriptElementKind__interfaceElement mixins ScriptElementKind {}
  declare class ScriptElementKind__typeElement mixins ScriptElementKind {}
  declare class ScriptElementKind__enumElement mixins ScriptElementKind {}
  declare class ScriptElementKind__enumMemberElement mixins ScriptElementKind {}
  declare class ScriptElementKind__variableElement mixins ScriptElementKind {}
  declare class ScriptElementKind__localVariableElement
    mixins ScriptElementKind {}
  declare class ScriptElementKind__functionElement mixins ScriptElementKind {}
  declare class ScriptElementKind__localFunctionElement
    mixins ScriptElementKind {}
  declare class ScriptElementKind__memberFunctionElement
    mixins ScriptElementKind {}
  declare class ScriptElementKind__memberGetAccessorElement
    mixins ScriptElementKind {}
  declare class ScriptElementKind__memberSetAccessorElement
    mixins ScriptElementKind {}
  declare class ScriptElementKind__memberVariableElement
    mixins ScriptElementKind {}
  declare class ScriptElementKind__constructorImplementationElement
    mixins ScriptElementKind {}
  declare class ScriptElementKind__callSignatureElement
    mixins ScriptElementKind {}
  declare class ScriptElementKind__indexSignatureElement
    mixins ScriptElementKind {}
  declare class ScriptElementKind__constructSignatureElement
    mixins ScriptElementKind {}
  declare class ScriptElementKind__parameterElement mixins ScriptElementKind {}
  declare class ScriptElementKind__typeParameterElement
    mixins ScriptElementKind {}
  declare class ScriptElementKind__primitiveType mixins ScriptElementKind {}
  declare class ScriptElementKind__label mixins ScriptElementKind {}
  declare class ScriptElementKind__alias mixins ScriptElementKind {}
  declare class ScriptElementKind__constElement mixins ScriptElementKind {}
  declare class ScriptElementKind__letElement mixins ScriptElementKind {}
  declare class ScriptElementKind__directory mixins ScriptElementKind {}
  declare class ScriptElementKind__externalModuleName
    mixins ScriptElementKind {}
  declare class ScriptElementKind__jsxAttribute mixins ScriptElementKind {}
  declare class ScriptElementKind__string mixins ScriptElementKind {}

  declare class ScriptElementKindModifier {
    static +none: Class<ScriptElementKindModifier__none> &
      ScriptElementKindModifier__none &
      ""; // ""
    static +publicMemberModifier: Class<ScriptElementKindModifier__publicMemberModifier> &
      ScriptElementKindModifier__publicMemberModifier &
      "public"; // "public"
    static +privateMemberModifier: Class<ScriptElementKindModifier__privateMemberModifier> &
      ScriptElementKindModifier__privateMemberModifier &
      "private"; // "private"
    static +protectedMemberModifier: Class<ScriptElementKindModifier__protectedMemberModifier> &
      ScriptElementKindModifier__protectedMemberModifier &
      "protected"; // "protected"
    static +exportedModifier: Class<ScriptElementKindModifier__exportedModifier> &
      ScriptElementKindModifier__exportedModifier &
      "export"; // "export"
    static +ambientModifier: Class<ScriptElementKindModifier__ambientModifier> &
      ScriptElementKindModifier__ambientModifier &
      "declare"; // "declare"
    static +staticModifier: Class<ScriptElementKindModifier__staticModifier> &
      ScriptElementKindModifier__staticModifier &
      "static"; // "static"
    static +abstractModifier: Class<ScriptElementKindModifier__abstractModifier> &
      ScriptElementKindModifier__abstractModifier &
      "abstract"; // "abstract"
    static +optionalModifier: Class<ScriptElementKindModifier__optionalModifier> &
      ScriptElementKindModifier__optionalModifier &
      "optional"; // "optional"
    static +dtsModifier: Class<ScriptElementKindModifier__dtsModifier> &
      ScriptElementKindModifier__dtsModifier &
      ".d.ts"; // ".d.ts"
    static +tsModifier: Class<ScriptElementKindModifier__tsModifier> &
      ScriptElementKindModifier__tsModifier &
      ".ts"; // ".ts"
    static +tsxModifier: Class<ScriptElementKindModifier__tsxModifier> &
      ScriptElementKindModifier__tsxModifier &
      ".tsx"; // ".tsx"
    static +jsModifier: Class<ScriptElementKindModifier__jsModifier> &
      ScriptElementKindModifier__jsModifier &
      ".js"; // ".js"
    static +jsxModifier: Class<ScriptElementKindModifier__jsxModifier> &
      ScriptElementKindModifier__jsxModifier &
      ".jsx"; // ".jsx"
    static +jsonModifier: Class<ScriptElementKindModifier__jsonModifier> &
      ScriptElementKindModifier__jsonModifier &
      ".json"; // ".json"
  }

  declare class ScriptElementKindModifier__none
    mixins ScriptElementKindModifier {}
  declare class ScriptElementKindModifier__publicMemberModifier
    mixins ScriptElementKindModifier {}
  declare class ScriptElementKindModifier__privateMemberModifier
    mixins ScriptElementKindModifier {}
  declare class ScriptElementKindModifier__protectedMemberModifier
    mixins ScriptElementKindModifier {}
  declare class ScriptElementKindModifier__exportedModifier
    mixins ScriptElementKindModifier {}
  declare class ScriptElementKindModifier__ambientModifier
    mixins ScriptElementKindModifier {}
  declare class ScriptElementKindModifier__staticModifier
    mixins ScriptElementKindModifier {}
  declare class ScriptElementKindModifier__abstractModifier
    mixins ScriptElementKindModifier {}
  declare class ScriptElementKindModifier__optionalModifier
    mixins ScriptElementKindModifier {}
  declare class ScriptElementKindModifier__dtsModifier
    mixins ScriptElementKindModifier {}
  declare class ScriptElementKindModifier__tsModifier
    mixins ScriptElementKindModifier {}
  declare class ScriptElementKindModifier__tsxModifier
    mixins ScriptElementKindModifier {}
  declare class ScriptElementKindModifier__jsModifier
    mixins ScriptElementKindModifier {}
  declare class ScriptElementKindModifier__jsxModifier
    mixins ScriptElementKindModifier {}
  declare class ScriptElementKindModifier__jsonModifier
    mixins ScriptElementKindModifier {}

  declare class ClassificationTypeNames {
    static +comment: Class<ClassificationTypeNames__comment> &
      ClassificationTypeNames__comment &
      "comment"; // "comment"
    static +identifier: Class<ClassificationTypeNames__identifier> &
      ClassificationTypeNames__identifier &
      "identifier"; // "identifier"
    static +keyword: Class<ClassificationTypeNames__keyword> &
      ClassificationTypeNames__keyword &
      "keyword"; // "keyword"
    static +numericLiteral: Class<ClassificationTypeNames__numericLiteral> &
      ClassificationTypeNames__numericLiteral &
      "number"; // "number"
    static +bigintLiteral: Class<ClassificationTypeNames__bigintLiteral> &
      ClassificationTypeNames__bigintLiteral &
      "bigint"; // "bigint"
    static +operator: Class<ClassificationTypeNames__operator> &
      ClassificationTypeNames__operator &
      "operator"; // "operator"
    static +stringLiteral: Class<ClassificationTypeNames__stringLiteral> &
      ClassificationTypeNames__stringLiteral &
      "string"; // "string"
    static +whiteSpace: Class<ClassificationTypeNames__whiteSpace> &
      ClassificationTypeNames__whiteSpace &
      "whitespace"; // "whitespace"
    static +text: Class<ClassificationTypeNames__text> &
      ClassificationTypeNames__text &
      "text"; // "text"
    static +punctuation: Class<ClassificationTypeNames__punctuation> &
      ClassificationTypeNames__punctuation &
      "punctuation"; // "punctuation"
    static +className: Class<ClassificationTypeNames__className> &
      ClassificationTypeNames__className &
      "class name"; // "class name"
    static +enumName: Class<ClassificationTypeNames__enumName> &
      ClassificationTypeNames__enumName &
      "enum name"; // "enum name"
    static +interfaceName: Class<ClassificationTypeNames__interfaceName> &
      ClassificationTypeNames__interfaceName &
      "interface name"; // "interface name"
    static +moduleName: Class<ClassificationTypeNames__moduleName> &
      ClassificationTypeNames__moduleName &
      "module name"; // "module name"
    static +typeParameterName: Class<ClassificationTypeNames__typeParameterName> &
      ClassificationTypeNames__typeParameterName &
      "type parameter name"; // "type parameter name"
    static +typeAliasName: Class<ClassificationTypeNames__typeAliasName> &
      ClassificationTypeNames__typeAliasName &
      "type alias name"; // "type alias name"
    static +parameterName: Class<ClassificationTypeNames__parameterName> &
      ClassificationTypeNames__parameterName &
      "parameter name"; // "parameter name"
    static +docCommentTagName: Class<ClassificationTypeNames__docCommentTagName> &
      ClassificationTypeNames__docCommentTagName &
      "doc comment tag name"; // "doc comment tag name"
    static +jsxOpenTagName: Class<ClassificationTypeNames__jsxOpenTagName> &
      ClassificationTypeNames__jsxOpenTagName &
      "jsx open tag name"; // "jsx open tag name"
    static +jsxCloseTagName: Class<ClassificationTypeNames__jsxCloseTagName> &
      ClassificationTypeNames__jsxCloseTagName &
      "jsx close tag name"; // "jsx close tag name"
    static +jsxSelfClosingTagName: Class<ClassificationTypeNames__jsxSelfClosingTagName> &
      ClassificationTypeNames__jsxSelfClosingTagName &
      "jsx self closing tag name"; // "jsx self closing tag name"
    static +jsxAttribute: Class<ClassificationTypeNames__jsxAttribute> &
      ClassificationTypeNames__jsxAttribute &
      "jsx attribute"; // "jsx attribute"
    static +jsxText: Class<ClassificationTypeNames__jsxText> &
      ClassificationTypeNames__jsxText &
      "jsx text"; // "jsx text"
    static +jsxAttributeStringLiteralValue: Class<ClassificationTypeNames__jsxAttributeStringLiteralValue> &
      ClassificationTypeNames__jsxAttributeStringLiteralValue &
      "jsx attribute string literal value"; // "jsx attribute string literal value"
  }

  declare class ClassificationTypeNames__comment
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__identifier
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__keyword
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__numericLiteral
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__bigintLiteral
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__operator
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__stringLiteral
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__whiteSpace
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__text mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__punctuation
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__className
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__enumName
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__interfaceName
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__moduleName
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__typeParameterName
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__typeAliasName
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__parameterName
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__docCommentTagName
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__jsxOpenTagName
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__jsxCloseTagName
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__jsxSelfClosingTagName
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__jsxAttribute
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__jsxText
    mixins ClassificationTypeNames {}
  declare class ClassificationTypeNames__jsxAttributeStringLiteralValue
    mixins ClassificationTypeNames {}

  declare class ClassificationType {
    static +comment: Class<ClassificationType__comment> &
      ClassificationType__comment &
      1; // 1
    static +identifier: Class<ClassificationType__identifier> &
      ClassificationType__identifier &
      2; // 2
    static +keyword: Class<ClassificationType__keyword> &
      ClassificationType__keyword &
      3; // 3
    static +numericLiteral: Class<ClassificationType__numericLiteral> &
      ClassificationType__numericLiteral &
      4; // 4
    static +operator: Class<ClassificationType__operator> &
      ClassificationType__operator &
      5; // 5
    static +stringLiteral: Class<ClassificationType__stringLiteral> &
      ClassificationType__stringLiteral &
      6; // 6
    static +regularExpressionLiteral: Class<ClassificationType__regularExpressionLiteral> &
      ClassificationType__regularExpressionLiteral &
      7; // 7
    static +whiteSpace: Class<ClassificationType__whiteSpace> &
      ClassificationType__whiteSpace &
      8; // 8
    static +text: Class<ClassificationType__text> &
      ClassificationType__text &
      9; // 9
    static +punctuation: Class<ClassificationType__punctuation> &
      ClassificationType__punctuation &
      10; // 10
    static +className: Class<ClassificationType__className> &
      ClassificationType__className &
      11; // 11
    static +enumName: Class<ClassificationType__enumName> &
      ClassificationType__enumName &
      12; // 12
    static +interfaceName: Class<ClassificationType__interfaceName> &
      ClassificationType__interfaceName &
      13; // 13
    static +moduleName: Class<ClassificationType__moduleName> &
      ClassificationType__moduleName &
      14; // 14
    static +typeParameterName: Class<ClassificationType__typeParameterName> &
      ClassificationType__typeParameterName &
      15; // 15
    static +typeAliasName: Class<ClassificationType__typeAliasName> &
      ClassificationType__typeAliasName &
      16; // 16
    static +parameterName: Class<ClassificationType__parameterName> &
      ClassificationType__parameterName &
      17; // 17
    static +docCommentTagName: Class<ClassificationType__docCommentTagName> &
      ClassificationType__docCommentTagName &
      18; // 18
    static +jsxOpenTagName: Class<ClassificationType__jsxOpenTagName> &
      ClassificationType__jsxOpenTagName &
      19; // 19
    static +jsxCloseTagName: Class<ClassificationType__jsxCloseTagName> &
      ClassificationType__jsxCloseTagName &
      20; // 20
    static +jsxSelfClosingTagName: Class<ClassificationType__jsxSelfClosingTagName> &
      ClassificationType__jsxSelfClosingTagName &
      21; // 21
    static +jsxAttribute: Class<ClassificationType__jsxAttribute> &
      ClassificationType__jsxAttribute &
      22; // 22
    static +jsxText: Class<ClassificationType__jsxText> &
      ClassificationType__jsxText &
      23; // 23
    static +jsxAttributeStringLiteralValue: Class<ClassificationType__jsxAttributeStringLiteralValue> &
      ClassificationType__jsxAttributeStringLiteralValue &
      24; // 24
    static +bigintLiteral: Class<ClassificationType__bigintLiteral> &
      ClassificationType__bigintLiteral &
      25; // 25
  }

  declare class ClassificationType__comment mixins ClassificationType {}
  declare class ClassificationType__identifier mixins ClassificationType {}
  declare class ClassificationType__keyword mixins ClassificationType {}
  declare class ClassificationType__numericLiteral mixins ClassificationType {}
  declare class ClassificationType__operator mixins ClassificationType {}
  declare class ClassificationType__stringLiteral mixins ClassificationType {}
  declare class ClassificationType__regularExpressionLiteral
    mixins ClassificationType {}
  declare class ClassificationType__whiteSpace mixins ClassificationType {}
  declare class ClassificationType__text mixins ClassificationType {}
  declare class ClassificationType__punctuation mixins ClassificationType {}
  declare class ClassificationType__className mixins ClassificationType {}
  declare class ClassificationType__enumName mixins ClassificationType {}
  declare class ClassificationType__interfaceName mixins ClassificationType {}
  declare class ClassificationType__moduleName mixins ClassificationType {}
  declare class ClassificationType__typeParameterName
    mixins ClassificationType {}
  declare class ClassificationType__typeAliasName mixins ClassificationType {}
  declare class ClassificationType__parameterName mixins ClassificationType {}
  declare class ClassificationType__docCommentTagName
    mixins ClassificationType {}
  declare class ClassificationType__jsxOpenTagName mixins ClassificationType {}
  declare class ClassificationType__jsxCloseTagName mixins ClassificationType {}
  declare class ClassificationType__jsxSelfClosingTagName
    mixins ClassificationType {}
  declare class ClassificationType__jsxAttribute mixins ClassificationType {}
  declare class ClassificationType__jsxText mixins ClassificationType {}
  declare class ClassificationType__jsxAttributeStringLiteralValue
    mixins ClassificationType {}
  declare class ClassificationType__bigintLiteral mixins ClassificationType {}

  declare function createClassifier(): Classifier;

  declare type DocumentRegistry = {
    acquireDocument(
      fileName: string,
      compilationSettings: CompilerOptions,
      scriptSnapshot: IScriptSnapshot,
      version: string,
      scriptKind?: ScriptKind
    ): SourceFile,
    acquireDocumentWithKey(
      fileName: string,
      path: Path,
      compilationSettings: CompilerOptions,
      key: DocumentRegistryBucketKey,
      scriptSnapshot: IScriptSnapshot,
      version: string,
      scriptKind?: ScriptKind
    ): SourceFile,
    updateDocument(
      fileName: string,
      compilationSettings: CompilerOptions,
      scriptSnapshot: IScriptSnapshot,
      version: string,
      scriptKind?: ScriptKind
    ): SourceFile,
    updateDocumentWithKey(
      fileName: string,
      path: Path,
      compilationSettings: CompilerOptions,
      key: DocumentRegistryBucketKey,
      scriptSnapshot: IScriptSnapshot,
      version: string,
      scriptKind?: ScriptKind
    ): SourceFile,
    getKeyForCompilationSettings(
      settings: CompilerOptions
    ): DocumentRegistryBucketKey,
    releaseDocument(
      fileName: string,
      compilationSettings: CompilerOptions
    ): void,
    releaseDocumentWithKey(path: Path, key: DocumentRegistryBucketKey): void,
    reportStats(): string
  };

  declare type DocumentRegistryBucketKey = string & {
    __bucketKey: any
  };
  declare function createDocumentRegistry(
    useCaseSensitiveFileNames?: boolean,
    currentDirectory?: string
  ): DocumentRegistry;

  declare function preProcessFile(
    sourceText: string,
    readImportFiles?: boolean,
    detectJavaScriptImports?: boolean
  ): PreProcessedFileInfo;

  declare type TranspileOptions = {
    compilerOptions?: CompilerOptions,
    fileName?: string,
    reportDiagnostics?: boolean,
    moduleName?: string,
    renamedDependencies?: MapLike<string>,
    transformers?: CustomTransformers
  };

  declare type TranspileOutput = {
    outputText: string,
    diagnostics?: Diagnostic[],
    sourceMapText?: string
  };

  declare function transpileModule(
    input: string,
    transpileOptions: TranspileOptions
  ): TranspileOutput;

  declare function transpile(
    input: string,
    compilerOptions?: CompilerOptions,
    fileName?: string,
    diagnostics?: Diagnostic[],
    moduleName?: string
  ): string;

  declare function generateTypesForModule(
    name: string,
    moduleValue: mixed,
    formatSettings: FormatCodeSettings
  ): string;

  declare function generateTypesForGlobal(
    name: string,
    globalValue: mixed,
    formatSettings: FormatCodeSettings
  ): string;

  declare var servicesVersion: "0.8";
  declare function toEditorSettings(
    options: EditorOptions | EditorSettings
  ): EditorSettings;

  declare function displayPartsToString(
    displayParts: SymbolDisplayPart[] | void
  ): string;

  declare function getDefaultCompilerOptions(): CompilerOptions;

  declare function getSupportedCodeFixes(): string[];

  declare function createLanguageServiceSourceFile(
    fileName: string,
    scriptSnapshot: IScriptSnapshot,
    scriptTarget: ScriptTarget,
    version: string,
    setNodeParents: boolean,
    scriptKind?: ScriptKind
  ): SourceFile;

  declare var disableIncrementalParsing: boolean;
  declare function updateLanguageServiceSourceFile(
    sourceFile: SourceFile,
    scriptSnapshot: IScriptSnapshot,
    version: string,
    textChangeRange: TextChangeRange | void,
    aggressiveChecks?: boolean
  ): SourceFile;

  declare function createLanguageService(
    host: LanguageServiceHost,
    documentRegistry?: DocumentRegistry,
    syntaxOnly?: boolean
  ): LanguageService;

  declare function getDefaultLibFilePath(options: CompilerOptions): string;

  declare function transform<T: Node>(
    source: T | T[],
    transformers: TransformerFactory<T>[],
    compilerOptions?: CompilerOptions
  ): TransformationResult<T>;
  declare type ActionSet = "action::set";
  declare type ActionInvalidate = "action::invalidate";
  declare type ActionPackageInstalled = "action::packageInstalled";
  declare type ActionValueInspected = "action::valueInspected";
  declare type EventTypesRegistry = "event::typesRegistry";
  declare type EventBeginInstallTypes = "event::beginInstallTypes";
  declare type EventEndInstallTypes = "event::endInstallTypes";
  declare type EventInitializationFailed = "event::initializationFailed";
  declare type TypingInstallerResponse = {
    kind:
      | ActionSet
      | ActionInvalidate
      | EventTypesRegistry
      | ActionPackageInstalled
      | ActionValueInspected
      | EventBeginInstallTypes
      | EventEndInstallTypes
      | EventInitializationFailed
  };

  declare type TypingInstallerRequestWithProjectName = {
    projectName: string
  };

  declare type DiscoverTypings = {
    ...$Exact<TypingInstallerRequestWithProjectName>,

    fileNames: string[],
    projectRootPath: Path,
    compilerOptions: CompilerOptions,
    typeAcquisition: TypeAcquisition,
    unresolvedImports: SortedReadonlyArray<string>,
    cachePath?: string,
    kind: "discover"
  };

  declare type CloseProject = {
    ...$Exact<TypingInstallerRequestWithProjectName>,

    kind: "closeProject"
  };

  declare type TypesRegistryRequest = {
    kind: "typesRegistry"
  };

  declare type InstallPackageRequest = {
    ...$Exact<TypingInstallerRequestWithProjectName>,

    kind: "installPackage",
    fileName: Path,
    packageName: string,
    projectRootPath: Path
  };

  declare type PackageInstalledResponse = {
    ...$Exact<ProjectResponse>,

    kind: ActionPackageInstalled,
    success: boolean,
    message: string
  };

  declare type InitializationFailedResponse = {
    ...$Exact<TypingInstallerResponse>,

    kind: EventInitializationFailed,
    message: string
  };

  declare type ProjectResponse = {
    ...$Exact<TypingInstallerResponse>,

    projectName: string
  };

  declare type InvalidateCachedTypings = {
    ...$Exact<ProjectResponse>,

    kind: ActionInvalidate
  };

  declare type InstallTypes = {
    ...$Exact<ProjectResponse>,

    kind: EventBeginInstallTypes | EventEndInstallTypes,
    eventId: number,
    typingsInstallerVersion: string,
    packagesToInstall: $ReadOnlyArray<string>
  };

  declare type BeginInstallTypes = {
    ...$Exact<InstallTypes>,

    kind: EventBeginInstallTypes
  };

  declare type EndInstallTypes = {
    ...$Exact<InstallTypes>,

    kind: EventEndInstallTypes,
    installSuccess: boolean
  };

  declare type SetTypings = {
    ...$Exact<ProjectResponse>,

    typeAcquisition: TypeAcquisition,
    compilerOptions: CompilerOptions,
    typings: string[],
    unresolvedImports: SortedReadonlyArray<string>,
    kind: ActionSet
  };
}
