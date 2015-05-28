import play.twirl.sbt.Import._

name := "poc-fft-billetterie"

version := "1.1"

scalaVersion := "2.11.6"

resolvers ++= Seq(
  Resolver.mavenLocal,
  "Spy Repository" at "http://files.couchbase.com/maven2" // required to resolve `spymemcached`, the plugin's dependency.
)

TwirlKeys.templateImports += "controllers.Prismic._"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

libraryDependencies ++= Seq(
  "io.prismic" % "java-kit" % "1.2.1",
  javaWs,
  ws,
  "org.webjars" %% "webjars-play" % "2.3.0-2",
  "org.webjars" % "bootstrap" % "3.3.4",
  "org.webjars" % "jquery" % "2.1.4",
  "org.webjars" % "backbonejs" % "1.1.2-4",
  "org.webjars" % "react" % "0.13.3",
  play.PlayImport.cache,
  "com.github.mumoshu" %% "play2-memcached" % "0.6.0"
)
