import play.twirl.sbt.Import._

name := "poc-fft-billetterie"

version := "1.1"

scalaVersion := "2.11.1"

resolvers += Resolver.mavenLocal

libraryDependencies += "io.prismic" % "java-kit" % "1.2.1"

libraryDependencies += javaWs

TwirlKeys.templateImports += "controllers.Prismic._"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

libraryDependencies ++= Seq(
  ws,
  "org.webjars" %% "webjars-play" % "2.3.0-2",
  "org.webjars" % "bootstrap" % "3.3.4",
  "org.webjars" % "jquery" % "2.1.4",
  "org.webjars" % "requirejs" % "2.1.17",
  "org.webjars" % "backbonejs" % "1.1.2-4",
  "org.webjars" % "lodash" % "3.6.0",
  "org.webjars" % "react" % "0.13.3"
)