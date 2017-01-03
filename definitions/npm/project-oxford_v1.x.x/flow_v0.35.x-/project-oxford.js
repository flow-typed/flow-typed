// @flow
/**
 * Flowtype definitions for project-oxford
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'project-oxford' {
    declare     export class Client {
        constructor(apiKey: string): this;
        face: FaceAPI;
        vision: VisionAPI
    }
    declare     export class FaceAPI {

        /**
         * Call the Face Detected API
         * Detects human faces in an image and returns face locations, face landmarks, and
        optional attributes including head-pose, gender, and age. Detection is an essential
        API that provides faceId to other APIs like Identification, Verification,
        and Find Similar.
         * @param  - Options object
         * @param  .url                    - URL to image to be used
         * @param  .path                   - Path to image to be used
         * @param  .stream                 - Stream for image to be used
         * @param  .analyzesFaceLandmarks  - Analyze face landmarks?
         * @param  .analyzesAge            - Analyze age?
         * @param  .analyzesGender         - Analyze gender?
         * @param  .analyzesHeadPose       - Analyze headpose?
         * @return  - Promise resolving with the resulting JSON
        */
        detect(options: Options$Detect): Promise<[FaceResponses$Detect]>;

        /**
         * Detect similar faces using faceIds (as returned from the detect API)
         * @param  - String of faceId for the source face
         * @param  - Array of faceIds to use as candidates
         * @return  - Promise resolving with the resulting JSON
         */
        similar(
            sourceFaceId: string,
            candidateFacesIds: string[]): Promise<FaceResponses$Similar>;

        /**
         * Divides candidate faces into groups based on face similarity using faceIds.
         * The output is one or more disjointed face groups and a MessyGroup.
        A face group contains the faces that have similar looking, often of the same person.
        There will be one or more face groups ranked by group size, i.e. number of face.
        Faces belonging to the same person might be split into several groups in the result.
        The MessyGroup is a special face group that each face is not similar to any other
        faces in original candidate faces. The messyGroup will not appear in the result if
        all faces found their similar counterparts. The candidate face list has a
        limit of 100 faces.
         * @param  - Array of faceIds to use
         * @return  - Promise resolving with the resulting JSON
        */
        grouping(faces: string[]): Promise<FaceResponses$Grouping>;

        /**
         * Identifies persons from a person group by one or more input faces.
         * To recognize which person a face belongs to, Face Identification needs a person group
        that contains number of persons. Each person contains one or more faces. After a person
        group prepared, it should be trained to make it ready for identification. Then the
        identification API compares the input face to those persons' faces in person group and
        returns the best-matched candidate persons, ranked by confidence.
         * @param  - Array of faceIds to use
         * @return  - Promise resolving with the resulting JSON
        */
        identify(
            faceIDs: string[],
            options: Options$Identify): Promise<FaceResponses$Identify[]>;

        /**
         * Analyzes two faces and determine whether they are from the same person.
         * Verification works well for frontal and near-frontal faces.
        For the scenarios that are sensitive to accuracy please use with own judgment.
         * @param  - Array containing two faceIds to use
         * @return  - Promise resolving with the resulting JSON
        */
        verify(faces: string[]): Promise<FaceResponses$Verify>;

        /**
         * 
         * @namespace  * 
         * @memberof  face
         */
        personGroup: PersonGroupResponses$PersonGroup;
        person: PersonResponses$Person
    }
    declare     export class VisionAPI {

        /**
         * This operation does a deep analysis on the given image and then extracts a
         * set of rich visual features based on the image content.
         * @param  - Options object describing features to extract
         * @param  .url            - Url to image to be analyzed
         * @param  .path           - Path to image to be analyzed
         * @param  .ImageType      - Detects if image is clipart or a line drawing.
         * @param  .Color          - Determines the accent color, dominant color, if image is black&white.
         * @param  .Faces          - Detects if faces are present. If present, generate coordinates, gender and age.
         * @param  .Adult          - Detects if image is pornographic in nature (nudity or sex act). Sexually suggestive content is also detected.
         * @param  .Categories     - Image categorization; taxonomy defined in documentation.
         * @return  - Promise resolving with the resulting JSON
         */
        analyzeImage(options: Options$Analyze): Promise<VisionResponses$Analyze>;

        /**
         * Generate a thumbnail image to the user-specified width and height. By default, the
         * service analyzes the image, identifies the region of interest (ROI), and generates
        smart crop coordinates based on the ROI. Smart cropping is designed to help when you
        specify an aspect ratio that differs from the input image.
         * @param  - Options object describing features to extract
         * @param  .url            - Url to image to be thumbnailed
         * @param  .path           - Path to image to be thumbnailed
         * @param  .width          - Width of the thumb in pixels
         * @param  .height         - Height of the thumb in pixels
         * @param  .smartCropping  - Should SmartCropping be enabled?
         * @param  .pipe           - We'll pipe the returned image to this object
         * @return  - Promise resolving with the resulting JSON
        */
        thumbnail(options: Options$Thumbnail): Promise<stream.Stream>;

        /**
         * Optical Character Recognition (OCR) detects text in an image and extracts the recognized
         * characters into a machine-usable character stream.
         * @param  - Options object describing features to extract
         * @param  .url                - Url to image to be analyzed
         * @param  .path               - Path to image to be analyzed
         * @param  .language           - BCP-47 language code of the text to be detected in the image. Default value is "unk", then the service will auto detect the language of the text in the image.
         * @param  .detectOrientation  - Detect orientation of text in the image
         * @return  - Promise resolving with the resulting JSON
         */
        ocr(options: Options$Ocr): Promise<VisionResponses$Ocr >
    }
    declare     export class PersonGroup {

        /**
         * Creates a new person group with a user-specified ID.
         * A person group is one of the most important parameters for the Identification API.
        The Identification searches person faces in a specified person group.
         * @param  - Numbers, en-us letters in lower case, '-', '_'. Max length: 64
         * @param  - Person group display name. The maximum length is 128.
         * @param  - User-provided data attached to the group. The size limit is 16KB.
         * @return  - Promise resolving with the resulting JSON
        */
        create(personGroupId: string, name: string, userData: string): Promise<void>;

        /**
         * Deletes an existing person group.
         * @param  - Name of person group to delete
         * @return  - Promise resolving with the resulting JSON
         */
        delete(personGroupId: string): Promise<void>;

        /**
         * Gets an existing person group.
         * @param  - Name of person group to get
         * @return  - Promise resolving with the resulting JSON
         */
        get(personGroupId: string): Promise<PersonGroupResponses$PersonGroup>;

        /**
         * Retrieves the training status of a person group. Training is triggered by the Train PersonGroup API.
         * The training will process for a while on the server side. This API can query whether the training
        is completed or ongoing.
         * @param  - Name of person group to get
         * @return  - Promise resolving with the resulting JSON
        */
        trainingStatus(personGroupId: string): Promise<PersonGroupResponses$TrainingStatus>;

        /**
         * Starts a person group training.
         *     Training is a necessary preparation process of a person group before identification.
        Each person group needs to be trained in order to call Identification. The training
        will process for a while on the server side even after this API has responded.
         * @param  - Name of person group to get
         * @return  - Promise resolving with the resulting JSON
        */
        trainingStart(personGroupId: string): Promise<PersonGroupResponses$TrainingStatus>;

        /**
         * Updates an existing person group's display name and userData.
         * @param  - Numbers, en-us letters in lower case, '-', '_'. Max length: 64
         * @param  - Person group display name. The maximum length is 128.
         * @param  - User-provided data attached to the group. The size limit is 16KB.
         * @return  - Promise resolving with the resulting JSON
         */
        update(personGroupId: string, name: string, userData: string): Promise<void>;

        /**
         * Lists all person groups in the current subscription.
         * @return  - Promise resolving with the resulting JSON
         */
        list(): Promise<PersonGroupResponses$PersonGroup[] >
    }
    declare     export class Person {

        /**
         * Adds a face to a person for identification. The maximum face count for each person is 32.
         * The face ID must be added to a person before its expiration. Typically a face ID expires
        24 hours after detection.
         * @param  - The target person's person group.
         * @param  - The target person that the face is added to.
         * @param  - The ID of the face to be added. The maximum face amount for each person is 32.
         * @param  - Optional. Attach user data to person's face. The maximum length is 1024.
         * @return  - Promise resolving with the resulting JSON
        */
        addFace(
            personGroupId: string,
            personId: string,
            faceId: string,
            userData?: string): Promise<void>;

        /**
         * Deletes a face from a person.
         * @param  - The target person's person group.
         * @param  - The target person that the face is removed from.
         * @param  - The ID of the face to be deleted.
         * @return  - Promise resolving with the resulting JSON
         */
        deleteFace(personGroupId: string, personId: string, faceId: string): Promise<void>;

        /**
         * Updates a face for a person.
         * @param  - The target person's person group.
         * @param  - The target person that the face is updated on.
         * @param  - The ID of the face to be updated.
         * @param  - Optional. Attach user data to person's face. The maximum length is 1024.
         * @return  - Promise resolving with the resulting JSON
         */
        updateFace(
            personGroupId: string,
            personId: string,
            faceId: string,
            userData: string): Promise<void>;

        /**
         * Get a face for a person.
         * @param  - The target person's person group.
         * @param  - The target person that the face is to get from.
         * @param  - The ID of the face to get.
         * @return  - Promise resolving with the resulting JSON
         */
        getFace(
            personGroupId: string,
            personId: string,
            faceId: string): Promise<PersonResponses$Face>;

        /**
         * Creates a new person in a specified person group for identification.
         * The number of persons has a subscription limit. Free subscription amount is 1000 persons.
        The maximum face count for each person is 32.
         * @param  - The target person's person group.
         * @param  - Array of face id's for the target person
         * @param  - Target person's display name. The maximum length is 128.
         * @param  - Optional fields for user-provided data attached to a person. Size limit is 16KB.
         * @return  - Promise resolving with the resulting JSON
        */
        create(
            personGroupId: string,
            faces: string[],
            name: string,
            userData: string): Promise<{
            personId: string
        }>;

        /**
         * Deletes an existing person from a person group.
         * @param  - The target person's person group.
         * @param  - The target person to delete.
         * @return  - Promise resolving with the resulting JSON
         */
        delete(personGroupId: string, personId: string): Promise<void>;

        /**
         * Gets an existing person from a person group.
         * @param  - The target person's person group.
         * @param  - The target person to get.
         * @return  - Promise resolving with the resulting JSON
         */
        get(personGroupId: string, personId: string): Promise<PersonResponses$Person>;

        /**
         * Updates a person's information.
         * @param  - The target person's person group.
         * @param  - Array of face id's for the target person
         * @param  - Target person's display name. The maximum length is 128.
         * @param  - Optional fields for user-provided data attached to a person. Size limit is 16KB.
         * @return  - Promise resolving with the resulting JSON
         */
        update(
            personGroupId: string,
            personId: string,
            faces: string[],
            name: string,
            userData: string): Promise<void>;

        /**
         * Lists all persons in a person group, with the person information.
         * @param  - The target person's person group.
         * @return  - Promise resolving with the resulting JSON
         */
        list(personGroupId: string): Promise<PersonResponses$Person[] >
    }
    declare interface Options$Detect {
        url?: string,
            path?: string,
            stream?: stream.Stream,
            analyzesFaceLandmarks?: boolean,
            analyzesAge?: boolean,
            analyzesGender?: boolean,
            analyzesHeadPose?: boolean
    }

    declare interface Options$Identify {
        personGroupId: string,
            maxNumOfCandidatesReturned: number
    }

    declare interface Options$Analyze {
        url?: string,
            path?: string,
            ImageType?: boolean,
            Color?: boolean,
            Faces?: boolean,
            Adult?: boolean,
            Categories?: boolean
    }

    declare interface Options$Thumbnail {
        url?: string,
            path?: string,
            width?: number,
            height?: number,
            smartCropping?: boolean,
            pipe?: stream.Writable
    }

    declare interface Options$Ocr {
        url?: string,
            path?: string,
            language?: string,
            detectOrientation?: boolean
    }
    declare interface FaceResponses$FaceRectangle {
        top: number,
            left: number,
            width: number,
            height: number
    }

    declare interface FaceResponses$point {
        x: number,
            y: number
    }

    declare interface FaceResponses$FaceLandmarks {
        pupilLeft: FaceResponses$point,
            pupilRight: FaceResponses$point,
            noseTip: FaceResponses$point,
            mouthLeft: FaceResponses$point,
            mouthRight: FaceResponses$point,
            eyebrowLeftOuter: FaceResponses$point,
            eyebrowLeftInner: FaceResponses$point,
            eyeLeftOuter: FaceResponses$point,
            eyeLeftTop: FaceResponses$point,
            eyeLeftBottom: FaceResponses$point,
            eyeLeftInner: FaceResponses$point,
            eyebrowRightInner: FaceResponses$point,
            eyebrowRightOuter: FaceResponses$point,
            eyeRightInner: FaceResponses$point,
            eyeRightTop: FaceResponses$point,
            eyeRightBottom: FaceResponses$point,
            eyeRightOuter: FaceResponses$point,
            noseRootLeft: FaceResponses$point,
            noseRootRight: FaceResponses$point,
            noseLeftAlarTop: FaceResponses$point,
            noseRightAlarTop: FaceResponses$point,
            noseLeftAlarOutTip: FaceResponses$point,
            noseRightAlarOutTip: FaceResponses$point,
            upperLipTop: FaceResponses$point,
            upperLipBottom: FaceResponses$point,
            underLipTop: FaceResponses$point,
            underLipBottom: FaceResponses$point
    }

    declare interface FaceResponses$Attributes {
        headPose: {
                pitch: number,
                roll: number,
                yaw: number
            },
            gender: string,
            age: number
    }

    declare interface FaceResponses$Detect {
        url?: string,
            path?: string,
            stream?: stream.Stream,
            analyzesFaceLandmarks?: boolean,
            analyzesAge?: boolean,
            analyzesGender?: boolean,
            analyzesHeadPose?: boolean
    }

    declare     export interface FaceResponses$Similar {
        faceIds: string[]
    }

    declare     export interface FaceResponses$Grouping {
        groups: string[],
            messyGroup: string[]
    }

    declare interface FaceResponses$Identify {
        personGroupId: string,
            maxNumOfCandidatesReturned: number
    }

    declare     export interface FaceResponses$Verify {
        isIdentical: boolean,
            confidence: number
    }
    declare     export interface PersonGroupResponses$PersonGroup {
        personGroupId: string,
            name: string,
            userData: string
    }

    declare     export interface PersonGroupResponses$TrainingStatus {
        personGroupId: string,
            status: string,
            startTime: string,
            endTime: string
    }
    declare     export interface PersonResponses$Create {
        personId: string
    }

    declare     export interface PersonResponses$Person {
        personId: string,
            faceIds: string[],
            name: string,
            userData: string
    }

    declare     export interface PersonResponses$Face {
        faceId: string,
            userData: string
    }
    declare interface VisionResponses$Analyze {
        url?: string,
            path?: string,
            ImageType?: boolean,
            Color?: boolean,
            Faces?: boolean,
            Adult?: boolean,
            Categories?: boolean
    }

    declare interface VisionResponses$Ocr {
        url?: string,
            path?: string,
            language?: string,
            detectOrientation?: boolean
    }
}