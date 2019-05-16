Search.setIndex({docnames:["index","source/data_types","source/gripper_client","source/motion_client","source/motion_client_v2","source/motion_service","source/quick_start","source/world_view_client","source/world_view_client_v2"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","source/data_types.rst","source/gripper_client.rst","source/motion_client.rst","source/motion_client_v2.rst","source/motion_service.rst","source/quick_start.rst","source/world_view_client.rst","source/world_view_client_v2.rst"],objects:{"":{xamla_motion:[8,0,0,"-"]},"xamla_motion.CommonGripper":{move:[2,2,1,""]},"xamla_motion.CommonGripperProperties":{command_action_name:[2,3,1,""]},"xamla_motion.EndEffector":{compute_pose:[3,2,1,""],from_end_effector_name:[3,2,1,""],get_current_pose:[3,2,1,""],inverse_kinematics:[3,2,1,""],inverse_kinematics_many:[3,2,1,""],link_name:[3,3,1,""],motion_service:[3,3,1,""],move_group:[3,3,1,""],move_poses:[3,2,1,""],move_poses_collision_free:[3,2,1,""],move_poses_collision_free_supervised:[3,2,1,""],move_poses_linear:[3,2,1,""],move_poses_supervised:[3,2,1,""],name:[3,3,1,""],plan_poses_linear:[3,2,1,""]},"xamla_motion.MoveGroup":{acceleration_scaling:[3,3,1,""],collision_check:[3,3,1,""],default_plan_parameters:[3,3,1,""],default_task_space_plan_parameters:[3,3,1,""],end_effector_names:[3,3,1,""],get_current_joint_positions:[3,2,1,""],get_current_joint_states:[3,2,1,""],get_end_effector:[3,2,1,""],ik_jump_threshold:[3,3,1,""],joint_set:[3,3,1,""],max_deviation:[3,3,1,""],motion_service:[3,3,1,""],move_joints:[3,2,1,""],move_joints_collision_free:[3,2,1,""],move_joints_collision_free_supervised:[3,2,1,""],move_joints_supervised:[3,2,1,""],name:[3,3,1,""],plan_move_joints:[3,2,1,""],plan_move_joints_collision_free:[3,2,1,""],sample_resolution:[3,3,1,""],selected_end_effector:[3,3,1,""],set_default_end_effector:[3,2,1,""],velocity_scaling:[3,3,1,""]},"xamla_motion.WeissWsgGripper":{acknowledge_error:[2,2,1,""],get_status:[2,2,1,""],grasp:[2,2,1,""],homing:[2,2,1,""],move:[2,2,1,""],properties:[2,3,1,""],release:[2,2,1,""],set_acceleration:[2,2,1,""],stop:[2,2,1,""]},"xamla_motion.WeissWsgGripperProperties":{control_action_name:[2,3,1,""],set_acc_service_name:[2,3,1,""],status_service_name:[2,3,1,""]},"xamla_motion.WorldViewClient":{add_cartesian_path:[7,2,1,""],add_collision_object:[7,2,1,""],add_folder:[7,2,1,""],add_joint_values:[7,2,1,""],add_pose:[7,2,1,""],get_cartesian_path:[7,2,1,""],get_collision_object:[7,2,1,""],get_joint_values:[7,2,1,""],get_pose:[7,2,1,""],query_cartesian_pahts:[7,2,1,""],query_cartesian_paths:[7,2,1,""],query_collision_objects:[7,2,1,""],query_joint_values:[7,2,1,""],query_poses:[7,2,1,""],remove_element:[7,2,1,""],update_cartesian_path:[7,2,1,""],update_collision_object:[7,2,1,""],update_joint_values:[7,2,1,""],update_pose:[7,2,1,""]},"xamla_motion.data_types":{CartesianPath:[1,1,1,""],CollisionObject:[1,1,1,""],CollisionPrimitive:[1,1,1,""],EndEffectorDescription:[1,1,1,""],EndEffectorLimits:[1,1,1,""],IkResults:[1,1,1,""],JointLimits:[1,1,1,""],JointPath:[1,1,1,""],JointSet:[1,1,1,""],JointStates:[1,1,1,""],JointTrajectory:[1,1,1,""],JointTrajectoryPoint:[1,1,1,""],JointValues:[1,1,1,""],JointValuesCollisions:[1,1,1,""],MoveGripperResult:[1,1,1,""],MoveGroupDescription:[1,1,1,""],PlanParameters:[1,1,1,""],Pose:[1,1,1,""],SteppedMotionState:[1,1,1,""],TaskSpacePlanParameters:[1,1,1,""],WsgResult:[1,1,1,""]},"xamla_motion.data_types.CartesianPath":{append:[1,2,1,""],concat:[1,2,1,""],from_cartesian_path_msg:[1,4,1,""],from_one_point:[1,2,1,""],from_start_stop_point:[1,2,1,""],orientations:[1,3,1,""],points:[1,3,1,""],positions:[1,3,1,""],prepend:[1,2,1,""],to_cartesian_path_msg:[1,2,1,""],transform:[1,2,1,""]},"xamla_motion.data_types.CollisionObject":{frame_id:[1,3,1,""],from_collision_object_msg:[1,2,1,""],primitives:[1,3,1,""],to_collision_object_msg:[1,2,1,""]},"xamla_motion.data_types.CollisionPrimitive":{create_box:[1,2,1,""],create_cone:[1,2,1,""],create_cylinder:[1,2,1,""],create_plane:[1,2,1,""],create_sphere:[1,2,1,""],create_unit_box:[1,2,1,""],create_unit_sphere:[1,2,1,""],from_shape_msg:[1,2,1,""],kind:[1,3,1,""],parameters:[1,3,1,""],pose:[1,3,1,""],to_shape_msg:[1,2,1,""]},"xamla_motion.data_types.EndEffectorDescription":{joint_set:[1,3,1,""],link_name:[1,3,1,""],move_group_name:[1,3,1,""],name:[1,3,1,""],sub_move_group_ids:[1,3,1,""]},"xamla_motion.data_types.EndEffectorLimits":{max_angular_acceleration:[1,3,1,""],max_angular_velocity:[1,3,1,""],max_xyz_acceleration:[1,3,1,""],max_xyz_velocity:[1,3,1,""]},"xamla_motion.data_types.IkResults":{error_codes:[1,3,1,""],path:[1,3,1,""]},"xamla_motion.data_types.JointLimits":{joint_set:[1,3,1,""],max_acceleration:[1,3,1,""],max_position:[1,3,1,""],max_velocity:[1,3,1,""],min_position:[1,3,1,""],select:[1,2,1,""]},"xamla_motion.data_types.JointPath":{append:[1,2,1,""],concat:[1,2,1,""],from_one_point:[1,2,1,""],from_start_stop_point:[1,2,1,""],joint_set:[1,3,1,""],points:[1,3,1,""],prepend:[1,2,1,""],transform:[1,2,1,""]},"xamla_motion.data_types.JointSet":{add_prefix:[1,2,1,""],contains:[1,2,1,""],difference:[1,2,1,""],empty:[1,2,1,""],get_index_of:[1,2,1,""],intersection:[1,2,1,""],is_similar:[1,2,1,""],is_subset:[1,2,1,""],is_superset:[1,2,1,""],names:[1,3,1,""],try_get_index_of:[1,2,1,""],union:[1,2,1,""]},"xamla_motion.data_types.JointStates":{efforts:[1,3,1,""],joint_set:[1,3,1,""],positions:[1,3,1,""],reorder:[1,2,1,""],select:[1,2,1,""],velocities:[1,3,1,""]},"xamla_motion.data_types.JointTrajectory":{accelerations:[1,3,1,""],append:[1,2,1,""],duration:[1,3,1,""],efforts:[1,3,1,""],empty:[1,2,1,""],evaluate_at:[1,2,1,""],get_point_before:[1,2,1,""],has_acceleration:[1,3,1,""],has_effort:[1,3,1,""],has_velocity:[1,3,1,""],is_valid:[1,3,1,""],joint_set:[1,3,1,""],merge:[1,2,1,""],points:[1,3,1,""],positions:[1,3,1,""],prepend:[1,2,1,""],time_from_start:[1,3,1,""],to_joint_trajectory_msg:[1,2,1,""],transform:[1,2,1,""],velocities:[1,3,1,""]},"xamla_motion.data_types.JointTrajectoryPoint":{accelerations:[1,3,1,""],add_time_offset:[1,2,1,""],efforts:[1,3,1,""],from_joint_trajectory_point_msg:[1,2,1,""],interpolate_cubic:[1,2,1,""],joint_set:[1,3,1,""],merge:[1,2,1,""],positions:[1,3,1,""],time_from_start:[1,3,1,""],to_joint_trajectory_point_msg:[1,2,1,""],velocities:[1,3,1,""],with_time_from_start:[1,2,1,""]},"xamla_motion.data_types.JointValues":{empty:[1,2,1,""],from_joint_path_point_msg:[1,2,1,""],from_joint_values_point_msg:[1,4,1,""],joint_set:[1,3,1,""],merge:[1,2,1,""],reorder:[1,2,1,""],select:[1,2,1,""],set_values:[1,2,1,""],to_joint_path_point_msg:[1,2,1,""],to_joint_values_point_msg:[1,2,1,""],transform:[1,2,1,""],try_get_value:[1,2,1,""],values:[1,3,1,""],zero:[1,2,1,""]},"xamla_motion.data_types.JointValuesCollisions":{error_code:[1,3,1,""],error_message:[1,3,1,""],index:[1,3,1,""]},"xamla_motion.data_types.MoveGripperResult":{effort:[1,3,1,""],position:[1,3,1,""],reached_goal:[1,3,1,""],stalled:[1,3,1,""]},"xamla_motion.data_types.MoveGroupDescription":{end_effector_link_names:[1,3,1,""],end_effector_names:[1,3,1,""],joint_set:[1,3,1,""],name:[1,3,1,""],sub_move_group_ids:[1,3,1,""]},"xamla_motion.data_types.PlanParameters":{collision_check:[1,3,1,""],from_arguments:[1,4,1,""],from_builder:[1,4,1,""],joint_limits:[1,3,1,""],joint_set:[1,3,1,""],max_acceleration:[1,3,1,""],max_deviation:[1,3,1,""],max_position:[1,3,1,""],max_velocity:[1,3,1,""],min_position:[1,3,1,""],move_group_name:[1,3,1,""],sample_resolution:[1,3,1,""],to_builder:[1,2,1,""],with_collision_check:[1,2,1,""],with_max_deviation:[1,2,1,""],with_sample_resolution:[1,2,1,""]},"xamla_motion.data_types.Pose":{frame_id:[1,3,1,""],from_pose_msg:[1,2,1,""],from_posestamped_msg:[1,2,1,""],from_transformation_matrix:[1,2,1,""],identity:[1,4,1,""],inverse:[1,2,1,""],is_rotation_normalized:[1,2,1,""],normalize_rotation:[1,2,1,""],quaternion:[1,3,1,""],rotate:[1,2,1,""],rotation_matrix:[1,2,1,""],to_pose_msg:[1,2,1,""],to_posestamped_msg:[1,2,1,""],transformation_matrix:[1,2,1,""],translate:[1,2,1,""],translation:[1,3,1,""]},"xamla_motion.data_types.SteppedMotionState":{error_code:[1,3,1,""],error_message:[1,3,1,""],goal_id:[1,3,1,""],progress:[1,3,1,""]},"xamla_motion.data_types.TaskSpacePlanParameters":{collision_check:[1,3,1,""],end_effector_limits:[1,3,1,""],end_effector_name:[1,3,1,""],from_arguments:[1,4,1,""],from_builder:[1,4,1,""],ik_jump_threshold:[1,3,1,""],max_angular_acceleration:[1,3,1,""],max_angular_velocity:[1,3,1,""],max_deviation:[1,3,1,""],max_xyz_acceleration:[1,3,1,""],max_xyz_velocity:[1,3,1,""],sample_resolution:[1,3,1,""],to_builder:[1,2,1,""],with_collision_check:[1,2,1,""],with_ik_jump_threshold:[1,2,1,""],with_max_deviation:[1,2,1,""],with_sample_resolution:[1,2,1,""]},"xamla_motion.data_types.WsgResult":{force:[1,3,1,""],width:[1,3,1,""]},"xamla_motion.motion_operations":{MoveCartesianOperation:[4,1,1,""],MoveJointsOperation:[4,1,1,""],Plan:[4,1,1,""]},"xamla_motion.motion_operations.MoveCartesianOperation":{plan:[4,2,1,""],to_args:[4,2,1,""],with_acceleration_scaling:[4,2,1,""],with_args:[4,2,1,""],with_collision_check:[4,2,1,""],with_ik_jump_threshold:[4,2,1,""],with_max_deviation:[4,2,1,""],with_sample_resolution:[4,2,1,""],with_seed:[4,2,1,""],with_start:[4,2,1,""],with_velocity_scaling:[4,2,1,""]},"xamla_motion.motion_operations.MoveJointsOperation":{plan:[4,2,1,""],to_args:[4,2,1,""],with_acceleration_scaling:[4,2,1,""],with_args:[4,2,1,""],with_collision_check:[4,2,1,""],with_max_deviation:[4,2,1,""],with_sample_resolution:[4,2,1,""],with_start:[4,2,1,""],with_velocity_scaling:[4,2,1,""]},"xamla_motion.motion_operations.Plan":{execute_async:[4,2,1,""],execute_supervised:[4,2,1,""],move_group:[4,3,1,""],parameters:[4,3,1,""],trajectory:[4,3,1,""]},"xamla_motion.motion_service":{MotionService:[5,1,1,""]},"xamla_motion.motion_service.MotionService":{create_plan_parameters:[5,4,1,""],create_task_space_plan_parameters:[5,4,1,""],emergency_stop:[5,4,1,""],execute_joint_trajectory:[5,2,1,""],execute_joint_trajectory_supervised:[5,2,1,""],get_current_joint_values:[5,4,1,""],move_gripper:[5,2,1,""],plan_cartesian_path:[5,2,1,""],plan_collision_free_joint_path:[5,4,1,""],plan_move_joints:[5,4,1,""],plan_move_pose_linear:[5,4,1,""],query_available_end_effectors:[5,4,1,""],query_available_move_groups:[5,4,1,""],query_collision_free_joint_path:[5,4,1,""],query_endeffector_limits:[5,4,1,""],query_inverse_kinematics:[5,2,1,""],query_inverse_kinematics_many:[5,2,1,""],query_joint_limits:[5,4,1,""],query_joint_path_collisions:[5,4,1,""],query_joint_states:[5,4,1,""],query_joint_trajectory:[5,4,1,""],query_pose:[5,4,1,""],query_pose_many:[5,4,1,""],query_task_space_trajectory:[5,4,1,""],wsg_gripper_command:[5,2,1,""]},"xamla_motion.v2":{EndEffector:[4,1,1,""],MoveGroup:[4,1,1,""],WorldViewClient:[8,1,1,""]},"xamla_motion.v2.EndEffector":{compute_pose:[4,2,1,""],from_end_effector_name:[4,5,1,""],get_current_pose:[4,2,1,""],inverse_kinematics:[4,2,1,""],inverse_kinematics_many:[4,2,1,""],link_name:[4,3,1,""],motion_service:[4,3,1,""],move_cartesian:[4,2,1,""],move_cartesian_collision_free:[4,2,1,""],move_cartesian_linear:[4,2,1,""],move_group:[4,3,1,""],name:[4,3,1,""]},"xamla_motion.v2.MoveGroup":{acceleration_scaling:[4,3,1,""],collision_check:[4,3,1,""],default_plan_parameters:[4,3,1,""],default_task_space_plan_parameters:[4,3,1,""],end_effector_names:[4,3,1,""],get_current_joint_positions:[4,2,1,""],get_current_joint_states:[4,2,1,""],get_end_effector:[4,2,1,""],ik_jump_threshold:[4,3,1,""],joint_set:[4,3,1,""],max_deviation:[4,3,1,""],motion_service:[4,3,1,""],move_joints:[4,2,1,""],move_joints_collision_free:[4,2,1,""],name:[4,3,1,""],sample_resolution:[4,3,1,""],selected_end_effector:[4,3,1,""],set_default_end_effector:[4,2,1,""],velocity_scaling:[4,3,1,""]},"xamla_motion.v2.WorldViewClient":{add_cartesian_path:[8,2,1,""],add_collision_object:[8,2,1,""],add_folder:[8,2,1,""],add_joint_values:[8,2,1,""],add_pose:[8,2,1,""],get_cartesian_path:[8,2,1,""],get_collision_object:[8,2,1,""],get_joint_values:[8,2,1,""],get_pose:[8,2,1,""],query_cartesian_pahts:[8,2,1,""],query_cartesian_paths:[8,2,1,""],query_collision_objects:[8,2,1,""],query_joint_values:[8,2,1,""],query_poses:[8,2,1,""],remove_element:[8,2,1,""]},xamla_motion:{CommonGripper:[2,1,1,""],CommonGripperProperties:[2,1,1,""],EndEffector:[3,1,1,""],MoveGroup:[3,1,1,""],WeissWsgGripper:[2,1,1,""],WeissWsgGripperProperties:[2,1,1,""],WorldViewClient:[7,1,1,""],data_types:[1,0,0,"-"],motion_service:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","classmethod","Python class method"],"5":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:classmethod","5":"py:staticmethod"},terms:{"125hz":5,"3x3":1,"4x4":[1,6],"case":[3,4],"class":[1,2,3,4,5,6,7,8],"default":[1,2,3,4,5,6,7,8],"final":[2,3,4],"float":[1,2,3,4,5],"function":[1,3,4,5,7,8],"import":[1,2,3,4,6,7,8],"int":[1,3,4,5],"new":[1,3,4,5,6,7,8],"return":[1,2,3,4,5,7,8],"static":[1,3,4],"switch":6,"transient":[7,8],"true":[1,2,3,4,5,7,8],"try":[1,2,3,4],"while":[3,4,5],But:[6,7,8],For:[1,5,6],One:[1,7,8],ROS:[1,6],The:[1,2,3,4,5,6,7,8],Then:6,With:[6,7,8],__main__:[2,3,4,7,8],__name__:[2,3,4,7,8],_query_move_group_servic:5,abil:2,about:[1,5,6],abov:6,acc:1,acceler:[1,2,3,4,5],acceleration_sc:[3,4,5],accelert:1,access:[7,8],acknowledg:2,acknowledge_error:2,action:[1,2,5,6],action_done_futur:[3,4],action_nam:5,action_respons:5,activ:5,actuat:2,add:[1,6,7,8],add_cartesian_path:[7,8],add_collision_object:[7,8],add_fold:[7,8],add_joint_valu:[7,8],add_pos:[7,8],add_prefix:1,add_time_offset:1,added:[1,6,7,8],addit:6,advantag:4,after:[2,6],again:4,align:1,all:[1,3,4,5,6,7,8],allow:[3,4],alphanumer:[7,8],alreadi:[6,7,8],als:8,also:[1,3,4,5,6,7,8],angular:[1,5],anoth:[1,6],answer:6,api:[1,4,8],append:1,appli:[1,2,3,4,5],applic:6,arg:4,argument:[1,3,4,5],argumenterror:[1,5,7,8],argv:1,arrai:[1,6],asarrai:6,ascend:1,assembl:1,assign:[1,4],async:[2,3,4],asynchron:[2,3,4],asyncio:[2,3,4],attempt:[3,4,5],attributeerror:1,automat:[3,4,5],avail:[1,2,3,4,5,6,7,8],avalid:1,await:[3,4],base:[1,6],becaus:[3,4,6],befor:[1,3,4,6],behavior:8,behind:1,belong:[3,4],better:1,between:[1,3,4,5],bool:[1,2,3,4,5,7,8],both:[1,3,4],box:[1,7,8],build:6,builder:1,calcul:5,call:[2,5],callabl:[1,5],can:[1,4,6,7,8],cancel:[3,4],capabl:[2,6],carri:1,cartesian:[1,3,4,5,7,8],cartesian_path1:[7,8],cartesian_path:[3,4,5,7,8],cartesianpath:[3,4,5,7,8],castabl:1,castesian:[7,8],catkin:6,cell:[7,8],chain:5,chang:[1,4,6,8],chapter:6,check:[1,3,4,5],child:4,classmethod:[1,5],clean:[7,8],client:[0,5,6,8],clone:6,close:[2,3,4],cls:1,code:[1,3,4,5],collis:[1,3,4,5,7,8],collision_check:[1,3,4,5],collision_object1:[7,8],collision_object2:[7,8],collision_object3:[7,8],collision_object:[7,8],collisionobject:[7,8],collisionprimit:[7,8],collisionprimitivekind:1,collisionprimitv:1,collisionprimitvekind:1,com:6,comma:1,command:[1,2,5],command_action_nam:2,common:[1,2,6],commongripperproperti:2,commun:[2,3,4,5],comparis:1,compil:6,complet:[1,5],compon:6,comput:[3,4,5],compute_pos:[3,4],concat:1,concaten:1,concret:1,cone:[1,7,8],configr:[7,8],configur:[1,2,3,4,5,6,7,8],conflict:1,connect:[7,8],consecut:[4,5],consid:[7,8],consist:1,const_se:[3,4,5],constant:5,constrain:[1,5],constraint:[1,5],contain:[1,3,4,5,6,7,8],context:[7,8],control:[2,3,4,5,6],control_action_nam:2,convert:[1,2,3,4,5,8],convet:5,coordin:[1,6],correct:[1,3,4],could:[1,5,7,8],creat:[1,2,3,4,5,7,8],create_box:[1,7,8],create_con:[1,7,8],create_cylind:[1,7,8],create_plan:[1,7,8],create_plan_paramet:5,create_spher:[1,7,8],create_task_space_plan_paramet:5,create_unit_box:1,create_unit_spher:1,creation:6,cubic:1,current:[1,2,3,4,5,7,8],custom:4,cylind:[1,7,8],data:0,data_typ:[1,2,3,4,6,7,8],data_typesplanparamet:1,datatim:[1,3,4,5],datetim:1,decid:4,decis:6,def:[2,3,4,7,8],defaul:1,default_plan_paramet:[3,4],default_task_space_plan_paramet:[3,4],defin:[1,3,4,5,6,7,8],defini:[1,5],delai:1,delay_oth:1,delay_self:1,delimit:1,delta_t:5,demand:4,dens:5,depend:6,deprec:[4,8],dequ:1,describ:1,design:6,detail:[1,5,6],determin:[3,4],deviat:[1,3,4,5],devid:1,dict:[1,5],dictionari:5,differ:[1,2,3,4,7,8],dimens:1,dimension:[1,6],direct:6,directli:[4,5,6],doc:1,docker:6,document:[5,6],doe:1,done:8,dont:1,driver:2,dtype:1,due:[1,2,6,7,8],durat:1,dure:3,each:[1,3,4,5],eff:1,effector:[1,3,4,5],effort:1,element:[7,8],element_nam:[7,8],element_path:8,els:[1,3,4,5],emerg:5,emergency_stop:5,empti:[1,5,7,8],emtpi:1,enabl:5,encapsul:[3,4],end:[1,3,4,5],end_effector:[3,4,5],end_effector_limit:1,end_effector_limits_param:5,end_effector_link:5,end_effector_link_nam:[1,3,4],end_effector_nam:[1,3,4,5],endeffector:[1,5],endeffectordescript:5,endeffectorlimit:5,endeffectorpos:5,ensure_futur:[3,4],enter:[7,8],entiti:[7,8],equal:[1,5],equat:1,equival:[3,4,5],errocod:1,error:[1,2,3,4,5,6],error_cod:1,error_messag:1,errorcod:1,especi:[2,6],establish:[7,8],evalu:1,evaluate_at:1,everi:[1,5],exampl:[1,2,3,4,7,8],example_mov:[3,4],except:[3,4,8],excpet:1,execut:[2,3,4,5,6],execute_async:4,execute_joint_trajectori:5,execute_joint_trajectory_supervis:5,execute_supervis:4,executor:[3,4],exert:1,exist:[1,3,4,5,6,7,8],expect:[1,3,4,5],expectef:5,explor:6,eye:[1,6],fact:6,factor:[3,4],fail:2,fals:[1,3,4,5,7,8],featur:[7,8],field:1,filter:5,find:[1,3,4,5],finish:[3,4,5],first:[1,3,4,5],firt:3,five:1,flag:4,float64:1,fly:[1,3,4,5],folder:[7,8],folder_nam:7,folder_path:[7,8],follow:[1,4,6,7,8],forc:[1,2,5],form:1,format:[1,3,4],forward:5,found:[1,3,4,5],frame:[1,6],frame_id:[1,6],free:[3,4,5],freedom:4,frequenc:[3,4,5],friendli:5,from:[1,2,3,4,5,6,7,8],from_argu:1,from_build:1,from_cartesian_path_msg:1,from_collision_object_msg:1,from_end_effector_nam:[3,4],from_joint_path_point_msg:1,from_joint_trajectory_point_msg:1,from_joint_values_point_msg:1,from_one_point:1,from_pose_msg:1,from_posestamped_msg:1,from_shape_msg:1,from_start_stop_point:1,from_transformation_matrix:[1,6],front:1,full:[7,8],further:[5,6],furthermor:4,futur:6,gap:1,gener:[1,2,5],geometry_msg:1,get:[1,2,3,4,7,8],get_cartesian_path:[7,8],get_collision_object:[7,8],get_current_joint_posit:[3,4],get_current_joint_st:[3,4],get_current_joint_valu:5,get_current_pos:[3,4],get_end_effector:[3,4],get_event_loop:[2,3,4],get_index_of:1,get_joint_valu:[7,8],get_point_befor:1,get_pos:[7,8],get_statu:2,get_valu:[7,8],github:[1,6],give:1,given:[1,3,4],global:1,goal:1,goal_id:1,grasp:2,gripper:[0,1,5,6],gripper_cli:2,gripper_properti:2,grippercommandact:5,group1:1,group:[1,3,4,5],guid:0,hand:4,handl:1,hard:4,has:[1,5,6],has_acceler:1,has_effort:1,has_veloc:1,have:[1,2,4,5,6],header:1,heavili:6,height:1,help:[4,6,7,8],here:4,his:2,hold:[1,2,3,4],home:2,homogen:[1,6],how:1,html:1,http:[1,6],iden:1,ident:1,ids:1,iff:1,ik_jump_threshold:[1,3,4,5],ikresult:[3,4,5],imag:6,immut:6,implement:[4,5,6,8],improv:[4,8],index:[0,1],individu:2,inferfac:2,inform:[1,5,6],init:1,initi:[1,2,3,4,7,8],initializ:1,initil:1,input:[1,2,3,4,5,7,8],instanc:[1,2,3,4,5,6,7,8],instead:[1,5,8],interact:[6,7,8],interfac:[2,5],intern:1,interpol:1,interpolate_cub:1,interpret:5,intersect:1,inv_pos:1,invalid:5,invalid_joint:1,invalid_move_group:1,invers:[1,3,4,5],inverse_kinemat:[3,4],inverse_kinematics_mani:[3,4],ioloop:2,is_acceler:1,is_found:1,is_rotation_norm:1,is_similar:1,is_subset:1,is_superset:1,is_valid:1,ist:[1,3,4,5],item:1,iter:[1,5],its:[3,4],itself:[1,6],join:1,join_set:[1,5],joinset:1,joint0:1,joint1:[1,7,8],joint2:[1,7,8],joint3:[1,7,8],joint4:[7,8],joint:[3,4,5,7,8],joint_limit:1,joint_limits_param:5,joint_nam:[1,5],joint_path:[3,4,5],joint_posit:[3,4,5],joint_set1:[1,7,8],joint_set2:[1,7,8],joint_set3:[1,7,8],joint_set:[1,3,4,5],joint_stat:[3,4],joint_valu:[1,3,4,7,8],joint_values1:[7,8],joint_values2:[7,8],joint_values3:[7,8],jointlimit:5,jointlimt:1,jointpath:[3,4,5],jointpathmessag:1,jointpathpoint:1,jointset:[3,4,5,7,8],jointstat:[3,4,5],jointtrajectori:[3,4,5],jointtrajectorypoint:5,jointvalu:[3,4,5,7,8],jointvaluescollis:5,jointvaluespoint:1,jump:[1,3,4,5],kei:5,keyerror:5,kieranwynn:1,kind:[1,2,5,7,8],kinemat:[1,3,4,5],kinet:1,kwarg:[1,5],last:1,learn:6,left_arm:1,length:1,less:[1,6],level:5,lib:1,librari:[1,6],lie:4,like:[2,6],limit:[1,3,4,5],linear:[3,5],link:[1,3,4,5],link_nam:[1,3,4],list:[1,3,4,5,7,8],local:6,locat:[7,8],login:6,look:[5,6],loop:[3,4],lot:[4,8],low:5,machin:6,made:[4,8],mai:5,main:[2,3,4,6,7,8],major:[4,8],make:6,manag:[1,3,4],mani:[1,2,3,4,6],manipul:[6,7,8],map:1,martix:1,match:1,matrix:[1,6],max:[1,4,5],max_:5,max_a:1,max_acceler:[1,5],max_angular_acceler:[1,5],max_angular_veloc:[1,5],max_devi:[1,3,4,5],max_effort:[2,5],max_p:1,max_posit:1,max_v:1,max_veloc:[1,5],max_xyz_acceler:[1,5],max_xyz_veloc:[1,5],maxim:[1,2,3,4,5],maximum:1,merg:1,mergeabl:1,messag:[1,5],met:6,meter:[1,2,5,6],method:[1,2,4,8],mid:1,midpoint:1,min:1,min_p:1,min_posit:1,minimum:1,mininm:1,mismatch:[1,5],modifi:[1,4],modul:0,moment:[1,2,7,8],more:[1,5,6],most:6,motion:[0,1,2,6],motion_cli:[2,3],motion_oper:4,motion_servic:[2,3,4,5],motionservic:[2,3,4,5],move:[1,2,3,4,5,6,7,8],move_cartesian:4,move_cartesian_cf:4,move_cartesian_collision_fre:4,move_cartesian_linear:4,move_cartesian_plan:4,move_gripp:5,move_group:[2,3,4],move_group_nam:[1,3,4,5],move_joint:[3,4],move_joint_oper:4,move_joints_cf:4,move_joints_collision_fre:[3,4],move_joints_collision_free_supervis:3,move_joints_plan:4,move_joints_supervis:3,move_pos:3,move_poses_collision_fre:3,move_poses_collision_free_supervis:3,move_poses_linear:3,move_poses_supervis:3,movecartesianarg:4,movecartesiancollisionfreeoper:4,movecartesianlinearoper:4,movegripperresult:[2,5],movegroup:2,movegroupdescript:5,moveit:[1,2],moveit_msg:1,movejointsarg:4,movejointscollisionfreeoper:4,movejointsoper:3,movement:[2,3,5],msg:[1,2],multipl:[1,4],must:5,name:[1,2,3,4,5,7],nan:[1,5],ndarrai:[1,6],nearest:1,neccessari:6,necessari:[1,2,3,4,5,6,7,8],need:[1,4],new_frame_id:1,new_ord:1,newton:[1,2],next:[3,4],non:4,none:[1,3,4,5],normal:1,normalize_rot:1,now:[1,3,4,6,8],number:[1,3,4,5],numer:[1,3,4,5],numpi:[1,5,6],object:[1,4,7,8],objet:[7,8],occur:1,offer:[2,4],offset:1,onc:[7,8],one:[1,3,4,5,6,8],ones:[1,3,4],onli:[1,2,3,4,5,7,8],oper:[1,3,4],opert:1,optin:[1,3,5],option:[1,3,4,5],order:[1,7,8],org:1,orient:[1,6],origin:1,other:[1,3,4,5,6],our:6,out:5,output:1,over:4,own:6,packag:[0,6],page:0,param:[3,5],paramert:1,paramet:[1,2,3,4,5,6,7,8],part:[1,5],path:[1,3,4,5,7,8],pathlib:8,peopl:6,percent:[1,3,4],perform:[1,2,3,4,5,7,8],place:[7,8],plan:[1,2,3,5,6,7,8],plan_cartesian_path:5,plan_collision_free_joint_path:5,plan_move_joint:[3,5],plan_move_joints_collision_fre:3,plan_move_pose_linear:5,plan_paramet:[3,4],plan_poses_linear:3,plane:[1,3,4,7,8],planparamet:[3,4,5],pleas:[1,5,6],point:[1,3,4,5],pos:1,pose1:[7,8],pose2:[7,8],pose3:[7,8],pose:[3,4,5,6,7,8],pose_1:[3,4],pose_2:[3,4],pose_3:[3,4],posestamp:1,posit:[1,2,3,4,5],possibl:[1,3,4,5,6,7,8],prefix:[1,2,7,8],preinstal:6,prepend:1,presist:8,press:[7,8],primit:1,print:[2,3,4,6,7,8],prismat:1,problem:6,process:[1,3,4],progess:1,progress:[1,3,4],project:[7,8],properti:[1,2,4],properties1:2,provid:[1,2,3,4,5,7,8],purpos:1,pyquaternion:[1,3,4,6,7,8],python:6,quary_joint_states_servic:5,quaternion:[1,3,4,6,7,8],queri:[1,3,4,5,7,8],queried_valu:[7,8],query_available_end_effector:5,query_available_move_group:5,query_cartesian_paht:[7,8],query_cartesian_path:[7,8],query_collision_free_joint_path:5,query_collision_object:[7,8],query_endeffector_limit:5,query_inverse_kinemat:5,query_inverse_kinematics_mani:5,query_joint_limit:5,query_joint_path_collis:5,query_joint_st:5,query_joint_trajectori:5,query_joint_valu:[7,8],query_move_group_servic:5,query_pos:[5,7,8],query_pose_mani:5,query_task_space_trajectori:5,quick:0,quir:5,quri:5,rad:[1,5],radiu:1,rais:[1,2,3,4,5,7,8],raise_exception_if_exist:8,raise_exception_if_not_exist:8,rang:[1,4,5],rather:[4,6],reach:[1,5,6],reachabl:5,reached_go:1,read:[1,3,4,5],readonli:1,real:6,recurs:[7,8],refer:0,register_asyncio_shutdown_handl:[2,3,4],releas:2,relev:5,remov:[1,7,8],remove_el:[7,8],reorder:[1,5],replan:5,repositori:6,repres:[1,2,3,4,6],represent:[1,6],request:[2,3,4,5,7,8],requir:[1,5],reset:5,resolut:[1,4],respect:1,respons:5,respres:1,resturn:1,result1:2,result:[2,5,7,8],return_index:1,robot1_:1,robot1_joint1:1,robot1_joint2:1,robot:[3,4,5,6,7,8],root:[7,8],ros:[1,2,3,4,5],rosnod:2,rosvita:[2,7,8],rotat:1,rotated_pos:1,rotation_matrix:1,routin:[3,4],row:1,run_supervis:[3,4],run_until_complet:[2,3,4],runtimeerror:[2,3,4,5],runttimeerror:3,same:[1,3,4,5],sampl:[1,3,4,5],sample_resolut:[1,3,4,5],save:[7,8],scale:[3,4,5],scale_veloc:1,search:[0,1,7,8],second:[1,3,4,5,6],see:[6,7,8],seed:[3,4,5],select:[1,3,4],selected_end_effector:[3,4],self:[1,2],separ:1,seq:1,seri:2,server:[2,3,4,5,6],servic:[0,2,3,4,7,8],serviceerror:[2,7,8],serviceexcept:[3,4,5],serviceexept:[2,5],servicenotavailableexcept:5,session:[7,8],set:[1,2,3,4,5],set_acc_nam:2,set_acc_service_nam:2,set_acceler:2,set_default_end_effector:[3,4],set_valu:1,setpoint:1,setup:6,shape:1,shape_msg:1,should:[1,2,3,4,5,6,7,8],signatur:1,similar:[1,5],simpl:[1,6],simul:6,singl:1,size:1,sleep:[3,4],smaller:[1,3,4],smart:2,snapshot:1,solid:1,solidprimit:1,solut:[1,3,4,5],solv:6,some:[1,6],sourc:[1,2,3,4,5,7,8],space:[3,4,5],span:1,special:2,specif:[1,2,3,4,5,6,7,8],specifi:[2,3,4,5],specific:1,speed:[2,5],sphere:[1,7,8],split:8,stage:4,stall:1,standard:6,start:[0,1,3,4,7,8],state:[3,4,5,7,8],state_scene_collis:1,state_self_collis:1,state_valid:1,statu:[1,2],status_service_nam:2,step:[1,3,4],stepped_motion_cli:[3,4],steppedmotioncli:[3,4,5],stop:[1,2,5],stop_on_block:[2,5],store:[7,8],str:[1,2,3,4,5,7,8],str_convert:[3,4],string:[1,5,7,8],sub:[1,5],sub_move_group_id:1,subset:1,success:[2,3,4,5],successfulli:3,superset:1,supervis:[3,4,5],support:[1,2],sure:6,system:[1,6],take:[4,5,6],takesspaceplanparamet:5,target:[3,4],task:[3,4,5],task_next:[3,4],task_space_plan_paramet:[3,4],taskspac:1,taskspaceplanparamet:[3,4,5],tcp:1,tcp_link:1,tensor:6,test1:7,test:[3,4,7,8],than:1,thei:[3,4],them:[1,4,6],therefor:[1,5,6],thi:[1,2,3,4,5,6,7,8],think:6,third:6,three:[1,6],threshold:[1,3,4],time:[1,5],time_from_start:1,timedelta:[1,3,4,5],timedetla:1,timeout:[3,4,5],to_arg:4,to_build:1,to_cartesian_path_msg:1,to_collision_object_msg:1,to_joint_path_point_msg:1,to_joint_trajectory_msg:1,to_joint_trajectory_point_msg:1,to_joint_values_point_msg:1,to_pose_msg:1,to_posestamped_msg:1,to_shape_msg:1,tool1:1,tool:6,torqu:1,trajectori:[1,2,3,4,5,6,7,8],trajectory_msg:1,trajectorypoint:1,trajectroi:1,trajetori:6,tranform:1,tranlat:1,transform:[1,3,4,5,6],transform_funct:1,transformation_matrix:[1,6],translat:[1,5,6],translated_pos:1,tree:[7,8],tri:[1,3,4],try_get_index_of:1,try_get_valu:1,tupl:3,two:[1,2,4,6],type:[0,2,3,4,5,7,8],typeerror:[1,2,3,4,5,8],ufunc:1,under:[5,7,8],underli:3,unequ:1,unexpect:[2,5],union:[1,3,4,8],uniqu:1,unit:1,unsuccessfulli:[3,4,5],unsupervis:4,updat:[4,7,8],update_cartesian_path:7,update_collision_object:7,update_if_exist:8,update_joint_valu:7,update_pos:7,ur5:6,usabl:[4,8],use:[1,3,4,5,6,8],used:[1,3,4,7,8],useful:6,user:[3,4,5],using:1,util:[2,3,4],valid:[1,7,8],valu:[1,3,4,5,6,7,8],valueerror:[1,3,4,5],valueserror:1,valul:1,vector:[1,6],vel:1,veloc:[1,3,4,5],velocit:1,velocity_sc:[3,4,5],versa:6,version:[0,1],via:[2,3,4,5],view:[6,7,8],vise:6,visual:[7,8],wai:[1,2],want:6,weiss:2,weisswsg:5,weisswsggripperproperti:2,weisswsgproperti:2,went:1,when:[1,3,4,6,7,8],where:[1,3,4,7,8],wherea:[3,4],which:[1,2,3,4,5,6,7,8],why:6,width:[1,5],wish:6,with_acceleration_sc:4,with_arg:4,with_collision_check:[1,4],with_ik_jump_threshold:[1,4],with_max_devi:[1,4],with_sample_resolut:[1,4],with_se:4,with_start:4,with_time_from_start:1,with_velocity_sc:4,without:5,work:[6,7,8],world:[1,6,7,8],world_view_cli:[7,8],worldview:[0,4,6,8],worldviewcli:0,wrap:5,wrong:[1,7,8],wsg50:2,wsg:[1,2,6],wsg_50_common:2,wsg_driver:2,wsg_gripper:2,wsg_gripper_command:5,wsgcommand:[2,5],wsgcommandact:5,wsgresult:2,xamla:[2,6],xamla_mot:[1,2,3,4,5,7,8],xamla_motion_except:[],xamlamoveit:[5,6],xamlamoveit_msg:1,xml:6,xyz:[1,5],you:6,your:6,zero:1},titles:["Welcome to xamla_motion\u2019s documentation!","Data types","Gripper client","Motion client","Motion client version 2.0","Motion Service","Quick start guide","WorldView client","WorldViewClient version 2.0"],titleterms:{cartesianpath:1,client:[2,3,4,7],collisionobject:1,collisionprimit:1,commongripp:2,creat:6,data:[1,6],descript:1,document:0,endeffector:[3,4],endeffectordescript:1,endeffectorlimit:1,environ:1,exampl:6,first:6,get:6,gripper:2,guid:6,how:6,ikresult:1,indic:0,instal:6,joint:1,jointlimit:1,jointpath:1,jointset:1,jointstat:1,jointtrajectori:1,jointtrajectorypoint:1,jointvalu:1,jointvaluescollis:1,know:6,motion:[3,4,5],movecartesianoper:4,movegripperresult:1,movegroup:[3,4],movegroupdescript:1,movejointsoper:4,overview:[1,2,3,4,7,8],plan:4,planparamet:1,pose:1,project:6,quick:6,result:1,robot:1,rosvita:6,servic:5,space:1,start:6,state:1,step:6,steppedmotionst:1,tabl:0,task:1,taskspaceplanparamet:1,type:[1,6],version:[4,8],weisswsggripp:2,welcom:0,what:6,worldview:7,worldviewcli:[7,8],wsgresult:1,xamla_mot:[0,6]}})