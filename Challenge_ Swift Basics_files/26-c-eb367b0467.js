(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[26],{"71EO":function(t,e,i){"use strict"
var s=function(t,e){return function(){return t.apply(e,arguments)}},n={}.hasOwnProperty
e["a"]=function(){function t(t){null==t&&(t={})
this.normalizeBoolean=s(this.normalizeBoolean,this)
this.present=s(this.present,this)
this.excludesSmallMatches=s(this.excludesSmallMatches,this)
this.toJSON=s(this.toJSON,this)
this.percent=s(this.percent,this)
this.words=s(this.words,this)
this.originalityReportVisibility=t.originality_report_visibility||"immediate"
this.sPaperCheck=this.normalizeBoolean(t.s_paper_check)
this.internetCheck=this.normalizeBoolean(t.internet_check)
this.excludeBiblio=this.normalizeBoolean(t.exclude_biblio)
this.excludeQuoted=this.normalizeBoolean(t.exclude_quoted)
this.journalCheck=this.normalizeBoolean(t.journal_check)
this.excludeSmallMatchesType=t.exclude_small_matches_type
this.excludeSmallMatchesValue=t.exclude_small_matches_value||0
this.submitPapersTo=!t.hasOwnProperty("submit_papers_to")||this.normalizeBoolean(t.submit_papers_to)}t.prototype.words=function(){return"words"===this.excludeSmallMatchesType?this.excludeSmallMatchesValue:""}
t.prototype.percent=function(){return"percent"===this.excludeSmallMatchesType?this.excludeSmallMatchesValue:""}
t.prototype.toJSON=function(){return{s_paper_check:this.sPaperCheck,originality_report_visibility:this.originalityReportVisibility,internet_check:this.internetCheck,exclude_biblio:this.excludeBiblio,exclude_quoted:this.excludeQuoted,journal_check:this.journalCheck,exclude_small_matches_type:this.excludeSmallMatchesType,exclude_small_matches_value:this.excludeSmallMatchesValue,submit_papers_to:this.submitPapersTo}}
t.prototype.excludesSmallMatches=function(){return!(null==this.excludeSmallMatchesType)}
t.prototype.present=function(){var t,e,i,s
t={}
i=this
for(e in i){if(!n.call(i,e))continue
s=i[e]
t[e]=s}t.excludesSmallMatches=this.excludesSmallMatches()
t.words=this.words()
t.percent=this.percent()
return t}
t.prototype.normalizeBoolean=function(t){return["1",true,"true",1].includes(t)}
return t}()},Et5h:function(t,e,i){"use strict"
var s=i("ouhR")
var n=i.n(s)
var r=i("GLiE")
var o=i.n(r)
var a=i("FIFq")
var u=i("fPNa")
var l=i("71EO")
var h=i("b1L6")
var c=i("MZ3O")
var p=i("OzZ7")
var _=i("Lox5")
var d=i("pQTu")
var m=i("m0r6")
Object(m["a"])(JSON.parse('{"ar":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"لا يمكن إلغاء نشر %{name} في حال وجود عمليات إرسال لطالب"},"cy":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Does dim modd dad-gyhoeddi %{name} os oes gwaith wedi’i gyflwyno gan fyfyrwyr"},"da":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Kan ikke annullere offentliggørelse af %{name}, hvis det indeholder afleveringer fra studerende"},"da-x-k12":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Kan ikke annullere offentliggørelse af %{name}, hvis det indeholder afleveringer fra elever"},"de":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Veröffentlichen von %{name} kann nicht rückgängig gemacht werden, wenn es Abgaben von Studenten gibt."},"el":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Δεν γίνεται να απενεργοποιηθεί η δημοσίευση %{name} αν υπάρχουν υποβολές σπουδαστών"},"en-AU":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Can\'t unpublish %{name} if there are student submissions"},"en-AU-x-unimelb":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Can\'t unpublish %{name} if there are student submissions"},"en-CA":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Can\'t unpublish %{name} if there are student submissions"},"en-GB":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Cannot unpublish %{name} if there are student submissions"},"en-GB-x-lbs":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Cannot unpublish %{name} if there are student submissions"},"en-GB-x-ukhe":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Cannot unpublish %{name} if there are student submissions"},"es":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"No se puede cancelar la publicación de %{name} si hay presentaciones de alumnos"},"fa":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"اگر موردهای ارسالی دانشجو وجود داشته باشد، نمی توان انتشار %{name} را لغو کرد"},"fi":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Julkaisua %{name} ei voida peruuttaa, jos on opiskelijalähetyksiä."},"fr":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Impossible de retirer la publication %{name} s’il y a des soumissions d’étudiants"},"fr-CA":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Ne peut retirer %{name} de la publication si des étudiants ont envois"},"he":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"לא ניתן לבטל את הפרסום %{name} אם יש הגשות תלמידים"},"ht":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Ou paka pa pibliye %{name} si gen soumisyon elèv"},"hu":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Nem lehet visszavonni %{name} publikálását, ha már vannak hallgatói munkák beadva"},"is":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Ekki hægt að afbirta %{name} ef skil nemenda eru til staðar"},"it":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Impossibile annullare la pubblicazione %{name} se ci sono consegne degli studenti"},"ja":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"受講生の提出物がある場合は、%{name}を未公開にできません"},"mi":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Kāore e taea te tāngia %{name} ki te reira e tāpaetanga ākonga"},"nb":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Kan ikke avpublisere %{name} hvis det er innleveringer fra student"},"nb-x-k12":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Kan ikke avpublisere %{name} hvis det er innleveringer fra elev"},"nl":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Kan publicatie %{name} niet ongedaan maken als er inzendingen van cursisten zijn"},"nn":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Kan ikkje fjerne publisering av %{name} dersom det finst studentinnleveringar"},"pl":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Nie można cofnąć publikowania %{name}, jeśli znajdują się przesłane zadania uczestnika"},"pt":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Não é possível publicar%{name} se existirem envios de alunos"},"pt-BR":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Não é possível remover a publicação de %{name} se houver trabalhos submetidos pelos alunos"},"ru":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Невозможно отменить публикацию %{name}, если есть отправленные студентами задания"},"sl":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Neobjava %{name} ni mogoča, če obstajajo oddaje študentov."},"sv":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Kan inte opublicera %{name} om det finns studentinlämningar"},"sv-x-k12":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Kan inte opublicera %{name} om det finns elevinlämningar"},"tr":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Öğrenci gönderileri varsa %{name} yayından kaldırılamaz"},"uk":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"Неможливо скасувати публікацію %{name} якщо присутні студентські матеріали"},"zh-Hans":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"如果有学生提交，则无法取消发布的%{name}"},"zh-Hant":{"can_t_unpublish_name_if_there_are_student_submissi_8ab8086c":"如果有學生提交件，則無法取消發佈 %{name}"}}'))
i("jQeR")
i("0sPK")
var f=d["default"].scoped("models_Assignment")
var g=i("e/kD")
var y=i("2DhO")
var b=i("HbFp")
var v=i("oNm9")
function D(t,e){if(!(t&&e))return false
const i=new URL(t)
const s=new URL(e)
return i.origin===s.origin}var T,S=function(t,e){return function(){return t.apply(e,arguments)}},w=function(t,e){for(var i in e)A.call(e,i)&&(t[i]=e[i])
function s(){this.constructor=t}s.prototype=e.prototype
t.prototype=new s
t.__super__=e.prototype
return t},A={}.hasOwnProperty
T=function(){return o.a.includes(ENV.current_user_roles,"admin")}
e["a"]=function(t){w(e,t)
function e(){this.showGradersAnonymousToGradersCheckbox=S(this.showGradersAnonymousToGradersCheckbox,this)
this.pollUntilFinished=S(this.pollUntilFinished,this)
this.pollUntilFinishedLoading=S(this.pollUntilFinishedLoading,this)
this.pollUntilFinishedImporting=S(this.pollUntilFinishedImporting,this)
this.pollUntilFinishedDuplicating=S(this.pollUntilFinishedDuplicating,this)
this.duplicate_failed=S(this.duplicate_failed,this)
this.duplicate=S(this.duplicate,this)
this.setNullDates=S(this.setNullDates,this)
this._filterFrozenAttributes=S(this._filterFrozenAttributes,this)
this._getAssignmentType=S(this._getAssignmentType,this)
this._hasOnlyType=S(this._hasOnlyType,this)
this._submissionTypes=S(this._submissionTypes,this)
this.toView=S(this.toView,this)
this.submissionTypesFrozen=S(this.submissionTypesFrozen,this)
this.failedToImport=S(this.failedToImport,this)
this.isImporting=S(this.isImporting,this)
this.isQuizLTIAssignment=S(this.isQuizLTIAssignment,this)
this.is_quiz_assignment=S(this.is_quiz_assignment,this)
this.originalAssignmentName=S(this.originalAssignmentName,this)
this.originalAssignmentID=S(this.originalAssignmentID,this)
this.originalCourseID=S(this.originalCourseID,this)
this.failedToDuplicate=S(this.failedToDuplicate,this)
this.isDuplicating=S(this.isDuplicating,this)
this.canDuplicate=S(this.canDuplicate,this)
this.singleSectionDueDate=S(this.singleSectionDueDate,this)
this.allDates=S(this.allDates,this)
this.nonBaseDates=S(this.nonBaseDates,this)
this.hasPointsPossible=S(this.hasPointsPossible,this)
this.hasDueDate=S(this.hasDueDate,this)
this.multipleDueDates=S(this.multipleDueDates,this)
this.defaultDates=S(this.defaultDates,this)
this.dueDateRequiredForAccount=S(this.dueDateRequiredForAccount,this)
this.maxNameLengthRequiredForAccount=S(this.maxNameLengthRequiredForAccount,this)
this.maxNameLength=S(this.maxNameLength,this)
this.sisIntegrationSettingsEnabled=S(this.sisIntegrationSettingsEnabled,this)
this.postToSISName=S(this.postToSISName,this)
this.postToSISEnabled=S(this.postToSISEnabled,this)
this.labelId=S(this.labelId,this)
this.htmlEditUrl=S(this.htmlEditUrl,this)
this.htmlUrl=S(this.htmlUrl,this)
this.objectType=S(this.objectType,this)
this.iconType=S(this.iconType,this)
this.published=S(this.published,this)
this.isGpaScaled=S(this.isGpaScaled,this)
this.isLetterGraded=S(this.isLetterGraded,this)
this.isSimple=S(this.isSimple,this)
this.externalToolNewTab=S(this.externalToolNewTab,this)
this.externalToolUrl=S(this.externalToolUrl,this)
this.gradingStandardId=S(this.gradingStandardId,this)
this.groupCategoryId=S(this.groupCategoryId,this)
this.vericiteEnabled=S(this.vericiteEnabled,this)
this.turnitinEnabled=S(this.turnitinEnabled,this)
this.gradeGroupStudentsIndividually=S(this.gradeGroupStudentsIndividually,this)
this.vericiteAvailable=S(this.vericiteAvailable,this)
this.turnitinAvailable=S(this.turnitinAvailable,this)
this.allowedExtensions=S(this.allowedExtensions,this)
this.restrictFileExtensions=S(this.restrictFileExtensions,this)
this.notifyOfUpdate=S(this.notifyOfUpdate,this)
this.peerReviewsAssignAt=S(this.peerReviewsAssignAt,this)
this.peerReviewCount=S(this.peerReviewCount,this)
this.automaticPeerReviews=S(this.automaticPeerReviews,this)
this.anonymousPeerReviews=S(this.anonymousPeerReviews,this)
this.peerReviews=S(this.peerReviews,this)
this.graderCommentsVisibleToGraders=S(this.graderCommentsVisibleToGraders,this)
this.gradersAnonymousToGraders=S(this.gradersAnonymousToGraders,this)
this.anonymousGrading=S(this.anonymousGrading,this)
this.anonymousInstructorAnnotations=S(this.anonymousInstructorAnnotations,this)
this.moderatedGrading=S(this.moderatedGrading,this)
this.postToSIS=S(this.postToSIS,this)
this.isOnlineSubmission=S(this.isOnlineSubmission,this)
this.acceptsOnlineTextEntries=S(this.acceptsOnlineTextEntries,this)
this.acceptsMediaRecording=S(this.acceptsMediaRecording,this)
this.acceptsOnlineURL=S(this.acceptsOnlineURL,this)
this.acceptsOnlineUpload=S(this.acceptsOnlineUpload,this)
this.withoutGradedSubmission=S(this.withoutGradedSubmission,this)
this.hasSubmittedSubmissions=S(this.hasSubmittedSubmissions,this)
this.allowedToSubmit=S(this.allowedToSubmit,this)
this.expectsSubmission=S(this.expectsSubmission,this)
this.submissionType=S(this.submissionType,this)
this.isNonDefaultExternalTool=S(this.isNonDefaultExternalTool,this)
this.defaultToolSelected=S(this.defaultToolSelected,this)
this.isQuickCreateDefaultTool=S(this.isQuickCreateDefaultTool,this)
this.defaultToOnPaper=S(this.defaultToOnPaper,this)
this.defaultToOnline=S(this.defaultToOnline,this)
this.defaultToNone=S(this.defaultToNone,this)
this.isDefaultTool=S(this.isDefaultTool,this)
this.shouldShowDefaultTool=S(this.shouldShowDefaultTool,this)
this.isNewAssignment=S(this.isNewAssignment,this)
this.submissionTypes=S(this.submissionTypes,this)
this.courseID=S(this.courseID,this)
this.omitFromFinalGrade=S(this.omitFromFinalGrade,this)
this.gradingType=S(this.gradingType,this)
this.inClosedGradingPeriod=S(this.inClosedGradingPeriod,this)
this.frozenAttributes=S(this.frozenAttributes,this)
this.frozen=S(this.frozen,this)
this.freezeOnCopy=S(this.freezeOnCopy,this)
this.canMove=S(this.canMove,this)
this.canDelete=S(this.canDelete,this)
this.canFreeze=S(this.canFreeze,this)
this.assignmentGroupId=S(this.assignmentGroupId,this)
this.secureParams=S(this.secureParams,this)
this.pointsPossible=S(this.pointsPossible,this)
this.name=S(this.name,this)
this.description=S(this.description,this)
this.dueDateRequired=S(this.dueDateRequired,this)
this.lockAt=S(this.lockAt,this)
this.unlockAt=S(this.unlockAt,this)
this.dueAt=S(this.dueAt,this)
this.assignmentType=S(this.assignmentType,this)
this.isAssignment=S(this.isAssignment,this)
this.isNotGraded=S(this.isNotGraded,this)
this.defaultToolUrl=S(this.defaultToolUrl,this)
this.defaultToolName=S(this.defaultToolName,this)
this.isExternalTool=S(this.isExternalTool,this)
this.isPage=S(this.isPage,this)
this.isDiscussionTopic=S(this.isDiscussionTopic,this)
this.isQuiz=S(this.isQuiz,this)
return e.__super__.constructor.apply(this,arguments)}e.mixin(u["a"])
e.prototype.resourceName="assignments"
e.prototype.urlRoot=function(){return this._defaultUrl()}
e.prototype.defaults={publishable:true,hidden:false,unpublishable:true}
e.prototype.initialize=function(){var t,e,i,s
null!=(e=this.get("assignment_overrides"))&&this.set("assignment_overrides",new p["a"](e))
null!=(i=this.get("turnitin_settings"))&&this.set("turnitin_settings",new l["a"](i),{silent:true})
null!=(s=this.get("vericite_settings"))&&this.set("vericite_settings",new h["a"](s),{silent:true})
null!=(t=this.get("all_dates"))&&this.set("all_dates",new _["a"](t))
if(this.postToSISEnabled()&&!this.get("id")&&false!==this.get("post_to_sis"))return this.set("post_to_sis",!!("undefined"!==typeof ENV&&null!==ENV?ENV.POST_TO_SIS_DEFAULT:void 0))}
e.prototype.isQuiz=function(){return this._hasOnlyType("online_quiz")}
e.prototype.isDiscussionTopic=function(){return this._hasOnlyType("discussion_topic")}
e.prototype.isPage=function(){return this._hasOnlyType("wiki_page")}
e.prototype.isExternalTool=function(){return this._hasOnlyType("external_tool")}
e.prototype.defaultToolName=function(){return ENV.DEFAULT_ASSIGNMENT_TOOL_NAME&&escape(ENV.DEFAULT_ASSIGNMENT_TOOL_NAME).replace(/%20/g," ")}
e.prototype.defaultToolUrl=function(){return ENV.DEFAULT_ASSIGNMENT_TOOL_URL}
e.prototype.isNotGraded=function(){return this._hasOnlyType("not_graded")}
e.prototype.isAssignment=function(){return!o.a.includes(this._submissionTypes(),"online_quiz","discussion_topic","not_graded","external_tool")}
e.prototype.assignmentType=function(t){if(!(arguments.length>0))return this._getAssignmentType()
return"assignment"===t?this.set("submission_types",["none"]):this.set("submission_types",[t])}
e.prototype.dueAt=function(t){if(!(arguments.length>0))return this.get("due_at")
return this.set("due_at",t)}
e.prototype.unlockAt=function(t){if(!(arguments.length>0))return this.get("unlock_at")
return this.set("unlock_at",t)}
e.prototype.lockAt=function(t){if(!(arguments.length>0))return this.get("lock_at")
return this.set("lock_at",t)}
e.prototype.dueDateRequired=function(t){if(!(arguments.length>0))return this.get("dueDateRequired")
return this.set("dueDateRequired",t)}
e.prototype.description=function(t){if(!(arguments.length>0))return this.get("description")
return this.set("description",t)}
e.prototype.name=function(t){if(!(arguments.length>0))return this.get("name")
return this.set("name",t)}
e.prototype.pointsPossible=function(t){if(!(arguments.length>0))return this.get("points_possible")||0
return b["a"].validate(t)?this.set("points_possible",b["a"].parse(t)):this.set("points_possible",t)}
e.prototype.secureParams=function(){return this.get("secure_params")}
e.prototype.assignmentGroupId=function(t){if(!(arguments.length>0))return this.get("assignment_group_id")
return this.set("assignment_group_id",t)}
e.prototype.canFreeze=function(){return null!=this.get("frozen_attributes")&&!this.frozen()&&!this.isQuizLTIAssignment()}
e.prototype.canDelete=function(){return!this.inClosedGradingPeriod()&&!this.frozen()}
e.prototype.canMove=function(){return!this.inClosedGradingPeriod()&&!o.a.includes(this.frozenAttributes(),"assignment_group_id")}
e.prototype.freezeOnCopy=function(){return this.get("freeze_on_copy")}
e.prototype.frozen=function(){return this.get("frozen")}
e.prototype.frozenAttributes=function(){return this.get("frozen_attributes")||[]}
e.prototype.inClosedGradingPeriod=function(){if(T())return false
return this.get("in_closed_grading_period")}
e.prototype.gradingType=function(t){if(!t)return this.get("grading_type")||"points"
return this.set("grading_type",t)}
e.prototype.omitFromFinalGrade=function(t){if(!(arguments.length>0))return this.get("omit_from_final_grade")
return this.set("omit_from_final_grade",t)}
e.prototype.courseID=function(){return this.get("course_id")}
e.prototype.submissionTypes=function(t){if(!(arguments.length>0))return this._submissionTypes()
return this.set("submission_types",t)}
e.prototype.isNewAssignment=function(){return!this.name()}
e.prototype.shouldShowDefaultTool=function(){if(!this.defaultToolUrl())return false
return this.defaultToolSelected()||this.isQuickCreateDefaultTool()||this.isNewAssignment()}
e.prototype.isDefaultTool=function(){return"external_tool"===this.submissionType()&&this.shouldShowDefaultTool()}
e.prototype.defaultToNone=function(){return"none"===this.submissionType()&&!this.shouldShowDefaultTool()}
e.prototype.defaultToOnline=function(){return"online"===this.submissionType()&&!this.shouldShowDefaultTool()}
e.prototype.defaultToOnPaper=function(){return"on_paper"===this.submissionType()&&!this.shouldShowDefaultTool()}
e.prototype.isQuickCreateDefaultTool=function(){return this.submissionTypes().includes("default_external_tool")}
e.prototype.defaultToolSelected=function(){return D(this.defaultToolUrl(),this.externalToolUrl())}
e.prototype.isNonDefaultExternalTool=function(){return"external_tool"===this.submissionType()&&!this.isDefaultTool()}
e.prototype.submissionType=function(){var t
t=this._submissionTypes()
return o.a.includes(t,"none")||0===t.length?"none":o.a.includes(t,"on_paper")?"on_paper":o.a.includes(t,"external_tool")?"external_tool":o.a.includes(t,"default_external_tool")?"external_tool":"online"}
e.prototype.expectsSubmission=function(){var t
t=this._submissionTypes()
return t.length>0&&!o.a.includes(t,"")&&!o.a.includes(t,"none")&&!o.a.includes(t,"not_graded")&&!o.a.includes(t,"on_paper")&&!o.a.includes(t,"external_tool")}
e.prototype.allowedToSubmit=function(){var t
t=this._submissionTypes()
return this.expectsSubmission()&&!this.get("locked_for_user")&&!o.a.includes(t,"online_quiz")&&!o.a.includes(t,"attendance")}
e.prototype.hasSubmittedSubmissions=function(){return this.get("has_submitted_submissions")}
e.prototype.withoutGradedSubmission=function(){var t
t=this.get("submission")
return null==t||t.withoutGradedSubmission()}
e.prototype.acceptsOnlineUpload=function(){return!!o.a.includes(this._submissionTypes(),"online_upload")}
e.prototype.acceptsOnlineURL=function(){return!!o.a.includes(this._submissionTypes(),"online_url")}
e.prototype.acceptsMediaRecording=function(){return!!o.a.includes(this._submissionTypes(),"media_recording")}
e.prototype.acceptsOnlineTextEntries=function(){return!!o.a.includes(this._submissionTypes(),"online_text_entry")}
e.prototype.isOnlineSubmission=function(){return o.a.some(this._submissionTypes(),function(t){return"online"===t||"online_text_entry"===t||"media_recording"===t||"online_url"===t||"online_upload"===t})}
e.prototype.postToSIS=function(t){if(!(arguments.length>0))return this.get("post_to_sis")
return this.set("post_to_sis",t)}
e.prototype.moderatedGrading=function(t){if(!(arguments.length>0))return this.get("moderated_grading")||false
return this.set("moderated_grading",t)}
e.prototype.anonymousInstructorAnnotations=function(t){if(!(arguments.length>0))return this.get("anonymous_instructor_annotations")
return this.set("anonymous_instructor_annotations",t)}
e.prototype.anonymousGrading=function(t){if(!(arguments.length>0))return this.get("anonymous_grading")
return this.set("anonymous_grading",t)}
e.prototype.gradersAnonymousToGraders=function(t){if(!(arguments.length>0))return this.get("graders_anonymous_to_graders")
return this.set("graders_anonymous_to_graders",t)}
e.prototype.graderCommentsVisibleToGraders=function(t){if(!(arguments.length>0))return!!this.get("grader_comments_visible_to_graders")
return this.set("grader_comments_visible_to_graders",t)}
e.prototype.peerReviews=function(t){if(!(arguments.length>0))return this.get("peer_reviews")
return this.set("peer_reviews",t)}
e.prototype.anonymousPeerReviews=function(t){if(!(arguments.length>0))return this.get("anonymous_peer_reviews")
return this.set("anonymous_peer_reviews",t)}
e.prototype.automaticPeerReviews=function(t){if(!(arguments.length>0))return this.get("automatic_peer_reviews")
return this.set("automatic_peer_reviews",t)}
e.prototype.peerReviewCount=function(t){if(!(arguments.length>0))return this.get("peer_review_count")||0
return this.set("peer_review_count",t)}
e.prototype.peerReviewsAssignAt=function(t){if(!(arguments.length>0))return this.get("peer_reviews_assign_at")||null
return this.set("peer_reviews_assign_at",t)}
e.prototype.intraGroupPeerReviews=function(){return this.get("intra_group_peer_reviews")}
e.prototype.notifyOfUpdate=function(t){if(!(arguments.length>0))return this.get("notify_of_update")
return this.set("notify_of_update",t)}
e.prototype.restrictFileExtensions=function(){return!!this.allowedExtensions()}
e.prototype.allowedExtensions=function(t){if(!(arguments.length>0))return this.get("allowed_extensions")
return this.set("allowed_extensions",t)}
e.prototype.turnitinAvailable=function(){return"undefined"!==typeof this.get("turnitin_enabled")}
e.prototype.vericiteAvailable=function(){return"undefined"!==typeof this.get("vericite_enabled")}
e.prototype.gradeGroupStudentsIndividually=function(t){if(!(arguments.length>0))return this.get("grade_group_students_individually")
return this.set("grade_group_students_individually",t)}
e.prototype.turnitinEnabled=function(t){return 0===arguments.length?void 0!==this.get("turnitin_enabled")&&!!this.get("turnitin_enabled"):this.set("turnitin_enabled",t)}
e.prototype.vericiteEnabled=function(t){return 0===arguments.length?void 0!==this.get("vericite_enabled")&&!!this.get("vericite_enabled"):this.set("vericite_enabled",t)}
e.prototype.groupCategoryId=function(t){if(!(arguments.length>0))return this.get("group_category_id")
return this.set("group_category_id",t)}
e.prototype.canGroup=function(){return!this.get("has_submitted_submissions")}
e.prototype.gradingStandardId=function(t){if(!(arguments.length>0))return this.get("grading_standard_id")
return this.set("grading_standard_id",t)}
e.prototype.externalToolUrl=function(t){var e
e=this.get("external_tool_tag_attributes")||{}
if(!(arguments.length>0))return e.url
e.url=t
return this.set("external_tool_tag_attributes",e)}
e.prototype.externalToolNewTab=function(t){var e
e=this.get("external_tool_tag_attributes")||{}
if(!(arguments.length>0))return e.new_tab
e.new_tab=t
return this.set("external_tool_tag_attributes",e)}
e.prototype.isSimple=function(){var t
t=this.get("assignment_overrides")
return"points"===this.gradingType()&&"none"===this.submissionType()&&!this.groupCategoryId()&&!this.peerReviews()&&!this.frozen()&&(!t||t.isSimple())}
e.prototype.isLetterGraded=function(){return"letter_grade"===this.gradingType()}
e.prototype.isGpaScaled=function(){return"gpa_scale"===this.gradingType()}
e.prototype.published=function(t){if(!(arguments.length>0))return this.get("published")
return this.set("published",t)}
e.prototype.position=function(t){if(!(arguments.length>0))return this.get("position")||0
return this.set("position",t)}
e.prototype.iconType=function(){if(this.isQuiz())return"quiz"
if(this.isDiscussionTopic())return"discussion"
if(this.isPage())return"document"
return"assignment"}
e.prototype.objectType=function(){if(this.isQuiz())return"Quiz"
if(this.isDiscussionTopic())return"Discussion"
if(this.isPage())return"WikiPage"
return"Assignment"}
e.prototype.htmlUrl=function(){return this.get("html_url")}
e.prototype.htmlEditUrl=function(){return this.get("html_url")+"/edit"}
e.prototype.labelId=function(){return this.id}
e.prototype.postToSISEnabled=function(){return ENV.POST_TO_SIS}
e.prototype.postToSISName=function(){return ENV.SIS_NAME}
e.prototype.sisIntegrationSettingsEnabled=function(){return ENV.SIS_INTEGRATION_SETTINGS_ENABLED}
e.prototype.maxNameLength=function(){return ENV.MAX_NAME_LENGTH}
e.prototype.maxNameLengthRequiredForAccount=function(){return ENV.MAX_NAME_LENGTH_REQUIRED_FOR_ACCOUNT}
e.prototype.dueDateRequiredForAccount=function(){return ENV.DUE_DATE_REQUIRED_FOR_ACCOUNT}
e.prototype.defaultDates=function(){return new c["a"]({due_at:this.get("due_at"),unlock_at:this.get("unlock_at"),lock_at:this.get("lock_at")})}
e.prototype.multipleDueDates=function(){var t,e
t=this.get("all_dates_count")
if(t&&t>1)return true
e=this.get("all_dates")
return e&&e.length>1}
e.prototype.hasDueDate=function(){return!this.isPage()}
e.prototype.hasPointsPossible=function(){return!this.isQuiz()&&!this.isPage()}
e.prototype.nonBaseDates=function(){var t,e
t=this.get("all_dates")
if(!t)return false
e=o.a.filter(t.models,function(t){return t&&!t.get("base")})
return e.length>0}
e.prototype.allDates=function(){var t,e
t=this.get("all_dates")
e=t&&t.models||[]
return o.a.map(e,function(t){return t.toJSON()})}
e.prototype.singleSectionDueDate=function(){var t,e,i,s
if(this.multipleDueDates()||this.dueAt())return this.dueAt()
t=this.allDates()
for(e=0,i=t.length;e<i;e++){s=t[e]
if(s.dueAt)return s.dueAt.toISOString()}}
e.prototype.canDuplicate=function(){return this.get("can_duplicate")}
e.prototype.isDuplicating=function(){return"duplicating"===this.get("workflow_state")}
e.prototype.failedToDuplicate=function(){return"failed_to_duplicate"===this.get("workflow_state")}
e.prototype.originalCourseID=function(){return this.get("original_course_id")}
e.prototype.originalAssignmentID=function(){return this.get("original_assignment_id")}
e.prototype.originalAssignmentName=function(){return this.get("original_assignment_name")}
e.prototype.is_quiz_assignment=function(){return this.get("is_quiz_assignment")}
e.prototype.isQuizLTIAssignment=function(){return this.get("is_quiz_lti_assignment")}
e.prototype.isImporting=function(){return"importing"===this.get("workflow_state")}
e.prototype.failedToImport=function(){return"failed_to_import"===this.get("workflow_state")}
e.prototype.submissionTypesFrozen=function(){return o.a.includes(this.frozenAttributes(),"submission_types")}
e.prototype.toView=function(){var t,e,i,s,n
e=["name","dueAt","description","pointsPossible","lockAt","unlockAt","gradingType","notifyOfUpdate","peerReviews","automaticPeerReviews","peerReviewCount","peerReviewsAssignAt","anonymousPeerReviews","acceptsOnlineUpload","acceptsMediaRecording","submissionType","acceptsOnlineTextEntries","acceptsOnlineURL","allowedExtensions","restrictFileExtensions","isOnlineSubmission","isNotGraded","isExternalTool","externalToolUrl","externalToolNewTab","turnitinAvailable","turnitinEnabled","vericiteAvailable","vericiteEnabled","gradeGroupStudentsIndividually","groupCategoryId","frozen","frozenAttributes","freezeOnCopy","canFreeze","isSimple","gradingStandardId","isLetterGraded","isGpaScaled","assignmentGroupId","iconType","published","htmlUrl","htmlEditUrl","labelId","position","postToSIS","multipleDueDates","nonBaseDates","allDates","hasDueDate","hasPointsPossible","singleSectionDueDate","moderatedGrading","postToSISEnabled","isOnlyVisibleToOverrides","omitFromFinalGrade","isDuplicating","failedToDuplicate","originalAssignmentName","is_quiz_assignment","isQuizLTIAssignment","isImporting","failedToImport","secureParams","inClosedGradingPeriod","dueDateRequired","submissionTypesFrozen","anonymousInstructorAnnotations","anonymousGrading","gradersAnonymousToGraders","showGradersAnonymousToGradersCheckbox","defaultToolName","isDefaultTool","isNonDefaultExternalTool","defaultToNone","defaultToOnline","defaultToOnPaper"]
i={id:this.get("id"),is_master_course_child_content:this.get("is_master_course_child_content"),restricted_by_master_course:this.get("restricted_by_master_course"),master_course_restrictions:this.get("master_course_restrictions")}
for(s=0,n=e.length;s<n;s++){t=e[s]
i[t]=this[t]()}return i}
e.prototype.toJSON=function(){var t,i,s,n
t=e.__super__.toJSON.apply(this,arguments)
t=this._filterFrozenAttributes(t);(null!=(i=ENV.MASTER_COURSE_DATA)?i.is_master_course_child_content:void 0)&&(null!=(s=ENV.MASTER_COURSE_DATA)&&null!=(n=s.master_course_restrictions)?n.content:void 0)&&delete t.description
return this.alreadyScoped?t:{assignment:t}}
e.prototype.inGradingPeriod=function(t){var e,i
e=this.get("all_dates")
i=new g["a"](t)
return e?o.a.some(e.models,function(e){return i.isDateInGradingPeriod(e.dueAt(),t.id)}):i.isDateInGradingPeriod(y["a"].parse(this.dueAt()),t.id)}
e.prototype.search=function(t,e){var i
i=""===t||this.get("name").match(t)
i&&e&&(i=this.inGradingPeriod(e))
if(i){this.set("hidden",false)
return true}this.set("hidden",true)
return false}
e.prototype.endSearch=function(){return this.set("hidden",false)}
e.prototype.parse=function(t){var i,s,n
t=e.__super__.parse.call(this,t)
null!=(i=t.assignment_overrides)&&(t.assignment_overrides=new p["a"](i))
null!=(s=t.turnitin_settings)&&(t.turnitin_settings=new l["a"](s))
null!=(n=t.vericite_settings)&&(t.vericite_settings=new h["a"](n))
return t}
e.prototype.doNotParse=function(){return this.parse=function(){return{}}}
e.prototype._submissionTypes=function(){return this.get("submission_types")||[]}
e.prototype._hasOnlyType=function(t){var e
e=this._submissionTypes()
return 1===e.length&&e[0]===t}
e.prototype._getAssignmentType=function(){return this.isDiscussionTopic()?"discussion_topic":this.isPage()?"wiki_page":this.isQuiz()?"online_quiz":this.isExternalTool()?"external_tool":this.isNotGraded()?"not_graded":"assignment"}
e.prototype._filterFrozenAttributes=function(t){var e,i
i=this.attributes
for(e in i){if(!A.call(i,e))continue
i[e]
o.a.includes(this.frozenAttributes(),e)&&delete t[e]}o.a.includes(this.frozenAttributes(),"title")&&delete t.name
o.a.includes(this.frozenAttributes(),"group_category_id")&&delete t.grade_group_students_individually
if(o.a.includes(this.frozenAttributes(),"peer_reviews")){delete t.automatic_peer_reviews
delete t.peer_review_count
delete t.peer_reviews_assign_at}delete t.frozen
delete t.frozen_attributes
return t}
e.prototype.setNullDates=function(){this.dueAt(null)
this.lockAt(null)
this.unlockAt(null)
return this}
e.prototype.publish=function(){return this.save("published",true)}
e.prototype.unpublish=function(){return this.save("published",false)}
e.prototype.disabledMessage=function(){return f.t("Can't unpublish %{name} if there are student submissions",{name:this.get("name")})}
e.prototype.duplicate=function(t){var e,i
i=this.courseID()
e=this.id
return n.a.ajaxJSON("/api/v1/courses/"+i+"/assignments/"+e+"/duplicate","POST",{},t)}
e.prototype.duplicate_failed=function(t){var e,i,s,r,o
o=this.courseID()
r=this.id
i=this.originalCourseID()
e=this.originalAssignmentID()
s="?target_assignment_id="+r
i!==o&&(s+="&target_course_id="+o)
return n.a.ajaxJSON("/api/v1/courses/"+i+"/assignments/"+e+"/duplicate"+s,"POST",{},t)}
e.prototype.pollUntilFinishedDuplicating=function(t){null==t&&(t=3e3)
return this.pollUntilFinished(t,this.isDuplicating)}
e.prototype.pollUntilFinishedImporting=function(t){null==t&&(t=3e3)
return this.pollUntilFinished(t,this.isImporting)}
e.prototype.pollUntilFinishedLoading=function(t){null==t&&(t=3e3)
if(this.isDuplicating())return this.pollUntilFinishedDuplicating(t)
if(this.isImporting())return this.pollUntilFinishedImporting(t)}
e.prototype.pollUntilFinished=function(t,e){var i
i=new v["a"](t,5*t,(s=this,function(t){return s.fetch().always(function(){t()
if(!e())return i.stop()})}))
var s
return i.start()}
e.prototype.isOnlyVisibleToOverrides=function(t){if(!(arguments.length>0))return this.get("only_visible_to_overrides")||false
return this.set("only_visible_to_overrides",t)}
e.prototype.isRestrictedByMasterCourse=function(){return this.get("is_master_course_child_content")&&this.get("restricted_by_master_course")}
e.prototype.showGradersAnonymousToGradersCheckbox=function(){return this.moderatedGrading()&&this.get("grader_comments_visible_to_graders")}
return e}(a["Model"])},HbFp:function(t,e,i){"use strict"
var s=i("qJBq")
var n=i.n(s)
var r=i("pQTu")
const o={_parseNumber:n.a,parse(t){if(null==t)return NaN
if("number"===typeof t)return t
let e=o._parseNumber(t.toString(),{thousands:r["default"].lookup("number.format.delimiter"),decimal:r["default"].lookup("number.format.separator")})
isNaN(e)&&(e=o._parseNumber(t))
return e},validate:t=>!isNaN(o.parse(t))}
e["a"]=o},Lox5:function(t,e,i){"use strict"
var s=i("FIFq")
var n=i.n(s)
i("GLiE")
i("ouhR")
var r=i("MZ3O")
var o=function(t,e){for(var i in e)a.call(e,i)&&(t[i]=e[i])
function s(){this.constructor=t}s.prototype=e.prototype
t.prototype=new s
t.__super__=e.prototype
return t},a={}.hasOwnProperty
e["a"]=function(t){o(e,t)
function e(){return e.__super__.constructor.apply(this,arguments)}e.prototype.model=r["a"]
return e}(n.a.Collection)},MZ3O:function(t,e,i){"use strict"
var s=i("FIFq")
var n=i.n(s)
var r=i("pQTu")
var o=i("m0r6")
Object(o["a"])(JSON.parse('{"ar":{"models_DateGroup":{"everyone_else":"أي شخص آخر"}},"cy":{"models_DateGroup":{"everyone_else":"Pawb arall"}},"da":{"models_DateGroup":{"everyone_else":"Alle andre"}},"el":{"models_DateGroup":{"everyone_else":"Όλοι οι άλλοι"}},"en-AU":{"models_DateGroup":{"everyone_else":"Everyone else"}},"en-AU-x-unimelb":{"models_DateGroup":{"everyone_else":"Everyone else"}},"en-CA":{"models_DateGroup":{"everyone_else":"Everyone else"}},"en-GB":{"models_DateGroup":{"everyone_else":"Everyone else"}},"en-GB-x-ukhe":{"models_DateGroup":{"everyone_else":"Everyone else"}},"fa":{"models_DateGroup":{"everyone_else":"هر شخص دیگر"}},"he":{"models_DateGroup":{"everyone_else":"כל אחד אחר"}},"hu":{"models_DateGroup":{"everyone_else":"Mindenki más "}},"hy":{"models_DateGroup":{"everyone_else":"Մնացած յուրաքանչյուրը"}},"is":{"models_DateGroup":{"everyone_else":"Allir aðrir"}},"ko":{"models_DateGroup":{"everyone_else":"다른 모든 사람"}},"mi":{"models_DateGroup":{"everyone_else":"tāngata katoa atu"}},"nn":{"models_DateGroup":{"everyone_else":"Alle andre"}},"pt":{"models_DateGroup":{"everyone_else":"Todos os outros"}},"ru":{"models_DateGroup":{"everyone_else":"Все остальные"}},"tr":{"models_DateGroup":{"everyone_else":"Geri kalan herkes"}}}'))
i("jQeR")
i("0sPK")
var a=r["default"].scoped("models_DateGroup")
var u=i("2DhO")
var l=function(t,e){for(var i in e)h.call(e,i)&&(t[i]=e[i])
function s(){this.constructor=t}s.prototype=e.prototype
t.prototype=new s
t.__super__=e.prototype
return t},h={}.hasOwnProperty
e["a"]=function(t){l(e,t)
function e(){return e.__super__.constructor.apply(this,arguments)}e.prototype.defaults={title:a.t("everyone_else","Everyone else"),due_at:null,unlock_at:null,lock_at:null}
e.prototype.dueAt=function(){var t
t=this.get("due_at")
return t?u["a"].parse(t):null}
e.prototype.unlockAt=function(){var t
t=this.get("unlock_at")
return t?u["a"].parse(t):null}
e.prototype.lockAt=function(){var t
t=this.get("lock_at")
return t?u["a"].parse(t):null}
e.prototype.now=function(){var t
t=this.get("now")
return t?u["a"].parse(t):new Date}
e.prototype.alwaysAvailable=function(){return!this.unlockAt()&&!this.lockAt()}
e.prototype.pending=function(){var t
t=this.unlockAt()
return t&&t>this.now()}
e.prototype.available=function(){return this.alwaysAvailable()||!this.lockAt()&&this.unlockAt()<this.now()}
e.prototype.open=function(){return this.lockAt()&&!this.pending()&&!this.closed()}
e.prototype.closed=function(){var t
t=this.lockAt()
return t&&t<this.now()}
e.prototype.toJSON=function(){return{dueFor:this.get("title"),dueAt:this.dueAt(),unlockAt:this.unlockAt(),lockAt:this.lockAt(),available:this.available(),pending:this.pending(),open:this.open(),closed:this.closed()}}
return e}(n.a.Model)},OzZ7:function(t,e,i){"use strict"
var s=i("FIFq")
var n=i.n(s)
var r=i("GLiE")
var o=i.n(r)
i("ouhR")
var a=i("yS2Q")
var u=i("mmEa")
var l=function(t,e){return function(){return t.apply(e,arguments)}},h=function(t,e){for(var i in e)c.call(e,i)&&(t[i]=e[i])
function s(){this.constructor=t}s.prototype=e.prototype
t.prototype=new s
t.__super__=e.prototype
return t},c={}.hasOwnProperty
e["a"]=function(t){h(e,t)
function e(){this.isSimple=l(this.isSimple,this)
this.datesJSON=l(this.datesJSON,this)
this.toJSON=l(this.toJSON,this)
this.blank=l(this.blank,this)
this.containsDefaultDueDate=l(this.containsDefaultDueDate,this)
this.getDefaultDueDate=l(this.getDefaultDueDate,this)
this.courseSectionIDs=l(this.courseSectionIDs,this)
return e.__super__.constructor.apply(this,arguments)}e.prototype.model=a["a"]
e.prototype.courseSectionIDs=function(){return this.pluck("course_section_id")}
e.prototype.comparator=function(t){return t.id}
e.prototype.getDefaultDueDate=function(){return this.detect(function(t){return t.getCourseSectionID()===u["a"].defaultDueDateSectionID})}
e.prototype.containsDefaultDueDate=function(){return!!this.getDefaultDueDate()}
e.prototype.blank=function(){return this.select(function(t){return t.isBlank()})}
e.prototype.toJSON=function(){var t
t=this.reject(function(t){return t.representsDefaultDueDate()})
return o.a.map(t,function(t){return t.toJSON().assignment_override})}
e.prototype.datesJSON=function(){return this.map(function(t){return t.toJSON().assignment_override})}
e.prototype.isSimple=function(){return 0===o.a.difference(this.courseSectionIDs(),[u["a"].defaultDueDateSectionID]).length}
return e}(n.a.Collection)},b1L6:function(t,e,i){"use strict"
var s=function(t,e){return function(){return t.apply(e,arguments)}},n={}.hasOwnProperty
e["a"]=function(){function t(t){null==t&&(t={})
this.normalizeBoolean=s(this.normalizeBoolean,this)
this.present=s(this.present,this)
this.toJSON=s(this.toJSON,this)
this.originalityReportVisibility=t.originality_report_visibility||"immediate"
this.excludeQuoted=this.normalizeBoolean(t.exclude_quoted)
this.excludeSelfPlag=this.normalizeBoolean(t.exclude_self_plag)
this.storeInIndex=this.normalizeBoolean(t.store_in_index)}t.prototype.toJSON=function(){return{originality_report_visibility:this.originalityReportVisibility,exclude_quoted:this.excludeQuoted,exclude_self_plag:this.excludeSelfPlag,store_in_index:this.storeInIndex}}
t.prototype.present=function(){var t,e,i,s
t={}
i=this
for(e in i){if(!n.call(i,e))continue
s=i[e]
t[e]=s}return t}
t.prototype.normalizeBoolean=function(t){return["1",true,"true",1].includes(t)}
return t}()},"e/kD":function(t,e,i){"use strict"
var s=i("GLiE")
var n=i.n(s)
function r(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
let i=n.a.isDate(t)
e&&!i&&(i=null===t)
if(!i)throw new Error("`".concat(t,"` must be a Date or null"))}function o(t){if(null==t)throw new Error("'".concat(t,"' must be an array or object"))
const e=["startDate","endDate","closeDate"]
const i=n.a.isArray(t)?t:[t]
n.a.each(i,t=>{n.a.each(e,e=>r(t[e]))})
return i}function a(t){const e=n.a.isString(t)
if(!e)throw new Error("Grading period id `".concat(t,"` must be a String"))}class u{constructor(t){this.gradingPeriods=o(t)}static isAllGradingPeriods(t){a(t)
return"0"===t}get earliestValidDueDate(){const t=n.a.sortBy(this.gradingPeriods,"startDate")
const e=n.a.find(t,{isClosed:false})
return e?e.startDate:null}gradingPeriodForDueAt(t){r(t,true)
return n.a.find(this.gradingPeriods,e=>this.isDateInGradingPeriod(t,e.id,false))||null}isDateInGradingPeriod(t,e){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
if(i){r(t,true)
a(e)}const s=n.a.find(this.gradingPeriods,{id:e})
if(!s)throw new Error("No grading period has id `".concat(e,"`"))
return null===t?s.isLast:s.startDate<t&&t<=s.endDate}isDateInClosedGradingPeriod(t){const e=this.gradingPeriodForDueAt(t)
return!!e&&e.isClosed}}e["a"]=u},mmEa:function(t,e,i){"use strict"
var s=i("FIFq")
var n=i("pQTu")
var r=i("m0r6")
Object(r["a"])(JSON.parse('{"ar":{"modelsSection":{"overrides":{"everyone":"الجميع"}}},"cy":{"modelsSection":{"overrides":{"everyone":"Pawb"}}},"da":{"modelsSection":{"overrides":{"everyone":"Alle"}}},"el":{"modelsSection":{"overrides":{"everyone":"Όλοι/ες"}}},"en-AU":{"modelsSection":{"overrides":{"everyone":"Everyone"}}},"en-AU-x-unimelb":{"modelsSection":{"overrides":{"everyone":"Everyone"}}},"en-CA":{"modelsSection":{"overrides":{"everyone":"Everyone"}}},"en-GB":{"modelsSection":{"overrides":{"everyone":"Everyone"}}},"en-GB-x-ukhe":{"modelsSection":{"overrides":{"everyone":"Everyone"}}},"fa":{"modelsSection":{"overrides":{"everyone":"همه"}}},"he":{"modelsSection":{"overrides":{"everyone":"כל אחד"}}},"hu":{"modelsSection":{"overrides":{"everyone":"Mindenki"}}},"hy":{"modelsSection":{"overrides":{"everyone":"Յուրաքանչյուրին"}}},"is":{"modelsSection":{"overrides":{"everyone":"Allir"}}},"ko":{"modelsSection":{"overrides":{"everyone":"모두"}}},"mi":{"modelsSection":{"overrides":{"everyone":"tāngata katoa"}}},"nn":{"modelsSection":{"overrides":{"everyone":"Alle"}}},"pt":{"modelsSection":{"overrides":{"everyone":"Todos"}}},"ru":{"modelsSection":{"overrides":{"everyone":"Все"}}},"tr":{"modelsSection":{"overrides":{"everyone":"Herkes"}}}}'))
i("jQeR")
i("0sPK")
var o=n["default"].scoped("modelsSection")
var a=function(t,e){return function(){return t.apply(e,arguments)}},u=function(t,e){for(var i in e)l.call(e,i)&&(t[i]=e[i])
function s(){this.constructor=t}s.prototype=e.prototype
t.prototype=new s
t.__super__=e.prototype
return t},l={}.hasOwnProperty
e["a"]=function(t){u(e,t)
function e(){this.isDefaultDueDateSection=a(this.isDefaultDueDateSection,this)
return e.__super__.constructor.apply(this,arguments)}e.defaultDueDateSection=function(){return new e({id:e.defaultDueDateSectionID,name:o.t("overrides.everyone","Everyone")})}
e.defaultDueDateSectionID="0"
e.prototype.isDefaultDueDateSection=function(){return this.id===e.defaultDueDateSectionID}
return e}(s["Model"])},oNm9:function(t,e,i){"use strict"
var s=i("u7Gu")
var n=i("ouhR")
var r=i.n(n)
class o{constructor(){this.enabled=s["a"].pandaPubSettings
this.subscribe=(t,e,i)=>{const n="/".concat(s["a"].pandaPubSettings.application_id).concat(t)
this.tokens[n]=e
const o=new r.a.Deferred
o.cancel=function(){}
this.client(t=>{const e=t.subscribe(n,t=>i(t))
e.then(o.resolve,o.reject)
return o.cancel=()=>e.cancel()})
return o}
this.on=(t,e)=>this.client(i=>i.on(t,e))
this.authExtension=()=>({outgoing:(t,e)=>{"/meta/subscribe"===t.channel&&t.subscription in this.tokens&&((t.ext||(t.ext={})).auth={token:this.tokens[t.subscription]})
return e(t)}})
this.subscribe=this.subscribe.bind(this)
this.on=this.on.bind(this)
this.authExtension=this.authExtension.bind(this)
this.faye=null
this.tokens={}}client(t){this.faye&&t(this.faye)
this.faye||r.a.getScript("".concat(s["a"].pandaPubSettings.push_url,"/client.js"),()=>{this.faye=new window.Faye.Client(s["a"].pandaPubSettings.push_url)
this.faye.addExtension(this.authExtension())
t(this.faye)})}}var a=new o
i.d(e,"a",function(){return u})
class u{constructor(t,e,i){this.setToken=(t,e)=>{this.channel=t
this.token=e
a.enabled&&this.running&&this.subscribe()}
this.setOnData=t=>{this.streamingCB=t}
this.start=()=>{this.lastUpdate=Date.now()
this.running=true
this.startTimeout()
a.enabled&&this.subscribe()}
this.stop=()=>{this.stopTimeout()
a.enabled&&this.unsubscribe()
this.running=false}
this.isRunning=()=>this.running
this.startTimeout=()=>this.timeout=setTimeout(this.considerPoll,this.pollInterval)
this.stopTimeout=()=>clearTimeout(this.timeout)
this.considerPoll=()=>{let t=this.pollInterval
a.enabled&&(t=this.rarePollInterval)
return Date.now()-this.lastUpdate>=t?this.pollCB(this.pollDone):this.startTimeout()}
this.pollDone=()=>{this.lastUpdate=Date.now()
this.startTimeout()}
this.subscribe=()=>{if(this.subscription)return
if(!this.channel||!this.token)return
this.subscription=a.subscribe(this.channel,this.token,t=>{this.lastUpdate=Date.now()
this.streamingCB(t)})}
this.unsubscribe=()=>{this.subscription&&this.subscription.cancel()}
this.pollInterval=t
this.rarePollInterval=e
this.pollCB=i
this.running=false
this.lastUpdate=null
r()(window).on("beforeunload",()=>{this.timeout&&this.stopTimeout()})}}},qJBq:function(t,e){(function(){var e,i,s
s=[]
e={}
t.exports=i=function(t,i,n){var r,o,a,u,l,h,c,p,_
null==n&&(n=true)
if("string"===typeof i){if(2!==i.length)throw{name:"ArgumentException",message:"The format for string options is '<thousands><decimal>' (exactly two characters)"}
_=i[0],r=i[1]}else if(Array.isArray(i)){if(2!==i.length)throw{name:"ArgumentException",message:"The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"}
_=i[0],r=i[1]}else{_=(null!=i?i.thousands:void 0)||(null!=i?i.group:void 0)||e.thousands
r=(null!=i?i.decimal:void 0)||e.decimal}c=""+_+r+n
h=s[c]
if(null==h){a=n?3:1
h=s[c]=new RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\"+_+"\\d{"+a+",3})+)|\\d*))(?:\\"+r+"(\\d*))?\\s*$")}p=t.match(h)
if(!(null!=p&&3===p.length))return NaN
u=p[1].replace(new RegExp("\\"+_,"g"),"")
o=p[2]
l=parseFloat(u+"."+o)
return l}
t.exports.setOptions=function(t){var i,s
for(i in t){s=t[i]
e[i]=s}}
t.exports.factoryReset=function(){e={thousands:",",decimal:"."}}
t.exports.withOptions=function(t,e){null==e&&(e=true)
return function(s){return i(s,t,e)}}
t.exports.factoryReset()}).call(this)},yS2Q:function(t,e,i){"use strict"
var s=i("FIFq")
var n=i.n(s)
var r=i("GLiE")
var o=i.n(r)
var a=i("mmEa")
var u=i("pQTu")
var l=i("m0r6")
Object(l["a"])(JSON.parse('{"ar":{"mastery_paths_cc4096c2":"مسارات الإتقان"},"cy":{"mastery_paths_cc4096c2":"Llwybrau Meistroli"},"da":{"mastery_paths_cc4096c2":"Læringsstier"},"da-x-k12":{"mastery_paths_cc4096c2":"Læringsstier"},"de":{"mastery_paths_cc4096c2":"Leistungsziel-Pfade"},"en-AU":{"mastery_paths_cc4096c2":"Mastery Paths"},"en-AU-x-unimelb":{"mastery_paths_cc4096c2":"Mastery Paths"},"en-CA":{"mastery_paths_cc4096c2":"Mastery Paths"},"en-GB":{"mastery_paths_cc4096c2":"Mastery paths"},"en-GB-x-lbs":{"mastery_paths_cc4096c2":"Mastery paths"},"en-GB-x-ukhe":{"mastery_paths_cc4096c2":"Mastery paths"},"es":{"mastery_paths_cc4096c2":"Caminos de dominio"},"fa":{"mastery_paths_cc4096c2":"مسیرهای تسلط"},"fi":{"mastery_paths_cc4096c2":"Hallintapolut"},"fr":{"mastery_paths_cc4096c2":"Parcours de maîtrise"},"fr-CA":{"mastery_paths_cc4096c2":"Parcours de maîtrise"},"he":{"mastery_paths_cc4096c2":"מסלולי התמחות"},"ht":{"mastery_paths_cc4096c2":"Pakou Prensipal"},"hu":{"mastery_paths_cc4096c2":"Jártassági útvonalak"},"is":{"mastery_paths_cc4096c2":"Tileinkunarslóðir"},"it":{"mastery_paths_cc4096c2":"Percorsi di acquisizione della padronanza"},"ja":{"mastery_paths_cc4096c2":"熟達の過程"},"mi":{"mastery_paths_cc4096c2":"Mana Ara"},"nb":{"mastery_paths_cc4096c2":"Læringsstier"},"nb-x-k12":{"mastery_paths_cc4096c2":"Læringsstier"},"nl":{"mastery_paths_cc4096c2":"Meesterschapspaden"},"nn":{"mastery_paths_cc4096c2":"Meistringsstiar"},"pl":{"mastery_paths_cc4096c2":"Ścieżki biegłości"},"pt":{"mastery_paths_cc4096c2":"Circuito Principal"},"pt-BR":{"mastery_paths_cc4096c2":"Caminhos de Domínio"},"ru":{"mastery_paths_cc4096c2":"Пути усвоения"},"sl":{"mastery_paths_cc4096c2":"Napredovanja v odličnosti"},"sv":{"mastery_paths_cc4096c2":"Måluppfyllnadsväg"},"sv-x-k12":{"mastery_paths_cc4096c2":"Måluppfyllnadsväg"},"tr":{"mastery_paths_cc4096c2":"Mastery Paths"},"uk":{"mastery_paths_cc4096c2":"Шляхи досягнення майстерності"},"zh-Hans":{"mastery_paths_cc4096c2":"掌握路径"},"zh-Hant":{"mastery_paths_cc4096c2":"精通路徑"}}'))
i("jQeR")
i("0sPK")
var h=u["default"].scoped("assignmentOverride")
var c=function(t,e){return function(){return t.apply(e,arguments)}},p=function(t,e){for(var i in e)_.call(e,i)&&(t[i]=e[i])
function s(){this.constructor=t}s.prototype=e.prototype
t.prototype=new s
t.__super__=e.prototype
return t},_={}.hasOwnProperty
e["a"]=function(t){p(e,t)
function e(){this.combinedDates=c(this.combinedDates,this)
this.representsDefaultDueDate=c(this.representsDefaultDueDate,this)
this.getCourseSectionID=c(this.getCourseSectionID,this)
this.isBlank=c(this.isBlank,this)
return e.__super__.constructor.apply(this,arguments)}e.prototype.defaults={due_at_overridden:true,due_at:null,all_day:false,all_day_date:null,unlock_at_overridden:true,unlock_at:null,lock_at_overridden:true,lock_at:null}
e.conditionalRelease={name:h.t("Mastery Paths"),noop_id:"1"}
e.prototype.initialize=function(){e.__super__.initialize.apply(this,arguments)
return this.on("change:course_section_id",this.clearID,this)}
e.prototype.clearID=function(){return this.set("id",void 0)}
e.prototype.parse=function(t){var e
e=t.assignment_override
return e}
e.prototype.toJSON=function(){return{assignment_override:e.__super__.toJSON.apply(this,arguments)}}
e.defaultDueDate=function(t){var i
null==t&&(t={})
i=o.a.extend(t,{course_section_id:a["a"].defaultDueDateSectionID})
return new e(i)}
e.prototype.isBlank=function(){return null==this.get("due_at")}
e.prototype.getCourseSectionID=function(){return this.get("course_section_id")}
e.prototype.representsDefaultDueDate=function(){return this.getCourseSectionID()===a["a"].defaultDueDateSectionID}
e.prototype.combinedDates=function(){var t
t=void 0===this.get("id")?null:this.get("id")
return""+(this.get("due_at")+this.get("unlock_at")+this.get("lock_at")+t)}
return e}(n.a.Model)}}])

//# sourceMappingURL=26-c-eb367b0467.js.map