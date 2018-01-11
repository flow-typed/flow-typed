// @flow

import pull from "pull-stream"
import type { Source, Through, Sink } from "pull-stream"

void (pull.cout(5): Source<*, string>)

void pull.ct("hi")
